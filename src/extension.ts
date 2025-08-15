// Version: $Id:  $
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

// CommandProvider class inlined for better web compatibility
class CommandProvider {
    constructor(private readonly _extensionUri: vscode.Uri) { }

    public indent_buffer() {
        vscode.commands.executeCommand("editor.action.formatDocument");
    }

    public indent_region() {
        vscode.commands.executeCommand("editor.action.formatSelection");
    }

    public comment_region() {
        vscode.commands.executeCommand("editor.action.addCommentLine");
    }

    public uncomment_region() {
        vscode.commands.executeCommand("editor.action.removeCommentLine");
    }

    public make_header() {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const document = editor.document;
        const selection = editor.selection;

        let workspace: string = "";
        let file_name: string = "";

        if (vscode.workspace.workspaceFolders !== undefined) {
            workspace = vscode.workspace.workspaceFolders[0].uri.path;
            file_name = document.uri.path.substring(workspace.length + 1);
        }

        const lang = document.languageId;
        const delimiter = this.lang_delimiter(lang);

        const position = editor.selection.active;
        const beginning = new vscode.Position(0, 0);
        const end = new vscode.Position(document.lineCount, 0);

        let line_first = document.lineAt(0).text;
        let should_insert_header = !line_first.startsWith(delimiter + delimiter + " " + "Version: " + "$Id");

        let x = position.line;
        let y = position.character;

        let header: string = "";
        header += delimiter + delimiter + " Version: $Id:  $\n";
        header += delimiter + delimiter + " \n";
        header += delimiter + delimiter + " \n\n";
        header += delimiter + delimiter + " Commentary:\n";
        header += delimiter + delimiter + " \n";
        header += delimiter + delimiter + " \n\n";
        header += delimiter + delimiter + " Changelog:\n";
        header += delimiter + delimiter + " \n";
        header += delimiter + delimiter + " \n\n";
        header += delimiter + delimiter + " \n";
        header += delimiter + delimiter + " Code starts here\n";
        header += delimiter + delimiter + " " + delimiter.repeat(77) + "\n\n";

        let line_last_offset = 1;
        let line_last = document.lineAt(document.lineCount - line_last_offset).text;
        while (line_last.trim() == "" && line_last_offset + 1 < document.lineCount) {
            line_last = document.lineAt(document.lineCount - ++line_last_offset).text;
        }

        let should_insert_footer = line_last != delimiter + delimiter + " Code ends here";
        let footer: string = "\n" + delimiter + delimiter + " " + delimiter.repeat(77) + "\n";
        footer += delimiter + delimiter + " Code ends here\n";

        editor.edit((editBuilder) => {
            if (should_insert_header) editBuilder.replace(beginning, header);
            if (should_insert_footer) editBuilder.replace(end, footer);
        }).then((success) => {
            if (should_insert_header) {
                const destination = new vscode.Position(x + 12, position.character);
                editor.selection = new vscode.Selection(destination, destination);
            }
            vscode.commands.executeCommand("editor.action.indentationToSpaces");
        });
    }

    public make_section() {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const document = editor.document;
        const position = editor.selection.active;
        const lang = document.languageId;
        const delimiter = this.lang_delimiter(lang);

        let content = delimiter + delimiter + " " + delimiter.repeat(77) + "\n";
        content += delimiter + delimiter + " \n";
        content += delimiter + delimiter + " " + delimiter.repeat(77) + "\n";

        editor.edit((editBuilder) => {
            editBuilder.replace(position, content);
        }).then(() => {
            const newPos = new vscode.Position(position.line + 1, delimiter.length + 1);
            editor.selection = new vscode.Selection(newPos, newPos);
            vscode.commands.executeCommand("editor.action.indentationToSpaces");
        });
    }

    public make_divider() {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const document = editor.document;
        const position = editor.selection.active;
        const lang = document.languageId;
        const delimiter = this.lang_delimiter(lang);

        let content = delimiter + delimiter + " " + delimiter.repeat(77) + "\n";

        editor.edit((editBuilder) => {
            editBuilder.replace(position, content);
        }).then(() => {
            const newPos = new vscode.Position(position.line + 1, 0);
            editor.selection = new vscode.Selection(newPos, newPos);
            vscode.commands.executeCommand("editor.action.indentationToSpaces");
        });
    }

    private lang_delimiter(lang?: string) {
        switch (lang) {
            case "c":
            case "cpp":
            case "csharp":
            case "css":
            case "go":
            case "groovy":
            case "java":
            case "javascript":
            case "javascriptreact":
            case "jsonc":
            case "kotlin":
            case "less":
            case "objective-c":
            case "php":
            case "qml":
            case "sass":
            case "scala":
            case "stylus":
            case "sql":
            case "swift":
            case "typescript":
            case "typescriptreact":
                return "/";
            case "bash":
            case "dockerfile":
            case "coffeescript":
            case "ignore":
            case "julia":
            case "makefile":
            case "perl":
            case "perl6":
            case "powershell":
            case "properties":
            case "python":
            case "r":
            case "ruby":
            case "shell":
            case "shellscript":
            case "yaml":
            case "yml":
            case "home-assistant":
                return "#";
            case "clojure":
            case "lisp":
            case "scheme":
            case "ini":
            case "rainmeter":
                return ";";
            case "erlang":
            case "latex":
            case "matlab":
                return "%";
            case "plaintext":
            default:
                return "#";
        }
    }
}

export async function activate(context: vscode.ExtensionContext): Promise<void> {

    const command_provider = new CommandProvider(context.extensionUri);

    context.subscriptions.push(
        vscode.commands.registerCommand("codex.command.indentBuffer", () => {
            command_provider.indent_buffer();
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand("codex.command.indentRegion", () => {
            command_provider.indent_region();
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand("codex.command.commentRegion", () => {
            command_provider.comment_region();
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand("codex.command.uncommentRegion", () => {
            command_provider.uncomment_region();
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand("codex.command.makeHeader", () => {
            command_provider.make_header();
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand("codex.command.makeSection", () => {
            command_provider.make_section();
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand("codex.command.makeDivider", () => {
            command_provider.make_divider();
        })
    );

    // Register whichkey bindings when the extension is ready
    await registerWhichKeyBindings(context);
}

async function registerWhichKeyBindings(context: vscode.ExtensionContext): Promise<void> {
    const whichKeyExtension = vscode.extensions.getExtension('VSpaceCode.whichkey');

    if (!whichKeyExtension)
        return;

    if (!whichKeyExtension.isActive)
        await whichKeyExtension.activate();

    await vscode.commands.executeCommand("whichkey.register", {
        bindings: "codex.whichkey.bindings",
        overrides: "codex.whichkey.bindingOverrides",
        title: "Code:X"
    });
}

// /////////////////////////////////////////////////////////////////////////////
// Code ends here
