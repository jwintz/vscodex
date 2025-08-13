// Version: $Id: $
//
//

// Commentary:
//
//

// Changelog:
//
//

//
// Code starts here
// /////////////////////////////////////////////////////////////////////////////

import * as vscode from "vscode";

export class AssistantProvider implements vscode.WebviewViewProvider {
    constructor(private readonly context: vscode.ExtensionContext) { }

    onCommandClicked(command: string) {
        vscode.commands.executeCommand(command);
    }

    onInsertClicked(configuration: string) {
        vscode.window.activeTextEditor?.insertSnippet(new vscode.SnippetString(configuration));
    }

    resolveWebviewView(webviewView: vscode.WebviewView, context: vscode.WebviewViewResolveContext, token: vscode.CancellationToken): void {
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this.context.extensionUri],
        };

        // Load HTML asynchronously
        this.getHtmlForWebview(webviewView.webview).then(html => {
            webviewView.webview.html = html;
        });

        webviewView.webview.onDidReceiveMessage((data) => {
            switch (data.type) {
                case "commandClicked": {
                    this.onCommandClicked(data.value);
                    break;
                }
                case "insertClicked": {
                    this.onInsertClicked(data.value);
                    break;
                }
                default: {
                    console.info("onDidReceiveMessage: ", data.type, data.value);
                    break;
                }
            }
        });
    }

    private async getHtmlForWebview(webview: vscode.Webview): Promise<string> {
        // Use VS Code's file system API instead of Node.js fs
        const assistantDistUri = vscode.Uri.joinPath(this.context.extensionUri, "dist", "assistant");

        try {
            // Try to read the manifest file using VS Code's file system API
            const manifestUri = vscode.Uri.joinPath(assistantDistUri, ".vite", "manifest.json");
            const manifestData = await vscode.workspace.fs.readFile(manifestUri);
            const manifest = JSON.parse(new TextDecoder().decode(manifestData));

            const scriptFileName = manifest["src/assistant/main.ts"]?.file || "main.js";
            const styleFileName = manifest["src/assistant/main.ts"]?.css?.[0] || "main.css";

            const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(assistantDistUri, scriptFileName));
            const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(assistantDistUri, styleFileName));

            // Create URIs for dependencies
            const jqueryUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "node_modules", "jquery", "dist", "jquery.min.js"));
            const datatablesUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "node_modules", "datatables.net", "js", "dataTables.min.js"));
            const clipboardUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "node_modules", "clipboard", "dist", "clipboard.min.js"));
            const prelineUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "node_modules", "preline", "dist", "preline.js"));
            const prelineClipboardUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "node_modules", "preline", "dist", "helper-clipboard.js"));
            const highlightUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "src", "assistant", "highlight.min.js"));
            const highlightJSONUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "src", "assistant", "highlight-json.min.js"));
            const highlightSHELLUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "src", "assistant", "highlight-shell.min.js"));
            const iconsUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "node_modules", "@vscode", "codicons", "dist", "codicon.css"));

            // Read package files using VS Code's file system API
            let codexPackage = {};
            let emacsPackage = {};

            try {
                const codexPackageUri = vscode.Uri.joinPath(this.context.extensionUri, "package.json");
                const codexPackageData = await vscode.workspace.fs.readFile(codexPackageUri);
                codexPackage = JSON.parse(new TextDecoder().decode(codexPackageData));
            } catch (error) {
                console.warn("Failed to read package.json:", error);
            }

            try {
                const emacsPackageUri = vscode.Uri.joinPath(this.context.extensionUri, "package-mcx.json");
                const emacsPackageData = await vscode.workspace.fs.readFile(emacsPackageUri);
                emacsPackage = JSON.parse(new TextDecoder().decode(emacsPackageData));
            } catch (error) {
                console.warn("Failed to read package-mcx.json:", error);
            }

            return this.generateHtml(
                scriptUri,
                styleUri,
                jqueryUri,
                datatablesUri,
                clipboardUri,
                prelineUri,
                prelineClipboardUri,
                highlightUri,
                highlightJSONUri,
                highlightSHELLUri,
                iconsUri,
                codexPackage,
                emacsPackage
            );

        } catch (error) {
            console.error("Failed to load manifest or generate webview HTML:", error);

            // Fallback: create basic HTML without manifest
            const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "dist", "assistant", "main.js"));
            const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "dist", "assistant", "main.css"));
            const iconsUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "node_modules", "@vscode", "codicons", "dist", "codicon.css"));

            return this.generateBasicHtml(scriptUri, styleUri, iconsUri);
        }
    }

    private generateHtml(
        scriptUri: vscode.Uri,
        styleUri: vscode.Uri,
        jqueryUri: vscode.Uri,
        datatablesUri: vscode.Uri,
        clipboardUri: vscode.Uri,
        prelineUri: vscode.Uri,
        prelineClipboardUri: vscode.Uri,
        highlightUri: vscode.Uri,
        highlightJSONUri: vscode.Uri,
        highlightSHELLUri: vscode.Uri,
        iconsUri: vscode.Uri,
        codexPackage: any,
        emacsPackage: any
    ): string {
        return /* html */ `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href="${iconsUri}" rel="stylesheet">
        <link href="${styleUri}" rel="stylesheet">

        <title>Codex</title>
    </head>
    <body>
        <div id="main"></div>
        <script>
            window.codexPackage = ${JSON.stringify(codexPackage)};
            window.emacsPackage = ${JSON.stringify(emacsPackage)};
        </script>
        <script src="${jqueryUri}"></script>
        <script src="${datatablesUri}"></script>
        <script src="${clipboardUri}"></script>
        <script src="${prelineUri}"></script>
        <script src="${prelineClipboardUri}"></script>
        <script src="${highlightUri}"></script>
        <script src="${highlightJSONUri}"></script>
        <script src="${highlightSHELLUri}"></script>
        <script type="module" src="${scriptUri}"></script>
        <script>hljs.highlightAll();</script>
    </body>
</html>`;
    }

    private generateBasicHtml(scriptUri: vscode.Uri, styleUri: vscode.Uri, iconsUri: vscode.Uri): string {
        return /* html */ `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href="${iconsUri}" rel="stylesheet">
        <link href="${styleUri}" rel="stylesheet">

        <title>Codex</title>
    </head>
    <body>
        <div id="main"></div>
        <script>
            window.codexPackage = {};
            window.emacsPackage = {};
        </script>
        <script type="module" src="${scriptUri}"></script>
    </body>
</html>`;
    }
}

// /////////////////////////////////////////////////////////////////////////////
// Code ends here
