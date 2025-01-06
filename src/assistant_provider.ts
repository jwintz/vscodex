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
import * as path from "path";
import * as fs from "fs";

export class AssistantProvider implements vscode.WebviewViewProvider {
    constructor(private readonly context: vscode.ExtensionContext) {}

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

        webviewView.webview.html = this.getHtmlForWebview(webviewView.webview);

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

    private getHtmlForWebview(webview: vscode.Webview): string {
        const assistantDistPath = path.join(this.context.extensionUri.fsPath, "dist", "assistant");

        const manifestPath = path.join(assistantDistPath, ".vite", "manifest.json");
        const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

        const scriptFileName = manifest["src/assistant/main.ts"].file;
        const styleFileName = manifest["src/assistant/main.ts"].css[0];

        const jqueryUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "node_modules", "jquery", "dist", "jquery.min.js"));
        const datatablesUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "node_modules", "datatables.net", "js", "dataTables.min.js"));
        const clipboardUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "node_modules", "clipboard", "dist", "clipboard.min.js"));
        const toastifyUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "node_modules", "toastify-js", "src", "toastify.js"));
        const prelineUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "node_modules", "preline", "dist", "preline.js"));
        const prelineClipboardUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "node_modules", "preline", "dist", "helper-clipboard.js"));
        const highlightUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "src", "assistant", "highlight.min.js"));
        const highlightJSONUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "src", "assistant", "highlight-json.min.js"));
        const highlightSHELLUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "src", "assistant", "highlight-shell.min.js"));

        const iconsUri = webview.asWebviewUri(vscode.Uri.joinPath(this.context.extensionUri, "node_modules", "@vscode", "codicons", "dist", "codicon.css"));

        const scriptUri = webview.asWebviewUri(vscode.Uri.file(path.join(assistantDistPath, scriptFileName)));
        const styleUri = webview.asWebviewUri(vscode.Uri.file(path.join(assistantDistPath, styleFileName)));

        const codexPackagePath = path.join(this.context.extensionUri.fsPath, "package.json");
        const codexPackage = JSON.parse(fs.readFileSync(codexPackagePath, "utf-8"));

        const emacsPackagePath = path.join(this.context.extensionUri.fsPath, "package-mcx.json");
        const emacsPackage = JSON.parse(fs.readFileSync(emacsPackagePath, "utf-8"));

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
        <script src="${toastifyUri}"></script>
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
}

// /////////////////////////////////////////////////////////////////////////////
// Code ends here
