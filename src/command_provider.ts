// Version: $Id: 7c5eb60b626ee0b6d3ea22524a5b745a34152818 $
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

import * as vscode from 'vscode';

export class CommandProvider {
    // private _channel: any = vscode.window.createOutputChannel('vscodex');

    constructor(private readonly _extensionUri: vscode.Uri) {}

    public indent_buffer() {
        vscode.commands.executeCommand('editor.action.formatDocument');
    }

    public indent_region() {
        vscode.commands.executeCommand('editor.action.formatSelection');
    }

    public comment_region() {
        vscode.commands.executeCommand('editor.action.addCommentLine');
    }

    public uncomment_region() {
        vscode.commands.executeCommand('editor.action.removeCommentLine');
    }

    public make_header() {
        const editor = vscode.window.activeTextEditor;

        if (!editor) return;

        const document = editor.document;
        const selection = editor.selection;

        let workspace: string = '';
        let file_name: string = '';

        if (vscode.workspace.workspaceFolders !== undefined) {
            workspace = vscode.workspace.workspaceFolders[0].uri.path;
            file_name = document.fileName.substring(
                vscode.workspace.workspaceFolders[0].uri.fsPath.length + 1,
            );
        }

        const lang = document.languageId;
        const delimiter = this.lang_delimiter(lang);

        const position = editor.selection.active;
        const beginning = new vscode.Position(0, 0);
        const end = new vscode.Position(document.lineCount, 0);

        let line_first = document.lineAt(0).text;

        let should_insert_header = !line_first.startsWith(
            delimiter + delimiter + 'Version: ' + '$Id',
        );

        let x = position.line;
        let y = position.character;

        let header: string = '';

        header += delimiter;
        y++;
        header += delimiter;
        y++;
        header += ' ';
        y++;
        header += 'Version: $Id: 7c5eb60b626ee0b6d3ea22524a5b745a34152818 $';
        header += '\n';
        x++;
        y = 0;
        header += delimiter;
        y++;
        header += delimiter;
        y++;
        header += ' ';
        y++;
        header += '\n';
        x++;
        y = 0;
        header += delimiter;
        y++;
        header += delimiter;
        y++;
        header += ' ';
        y++;
        header += '\n';
        x++;
        y = 0;
        header += '\n';
        x++;
        y = 0;

        header += delimiter;
        y++;
        header += delimiter;
        y++;
        header += ' ';
        y++;
        header += 'Commentary:';
        header += '\n';
        x++;
        y = 0;
        header += delimiter;
        y++;
        header += delimiter;
        y++;
        header += ' ';
        y++;
        header += '\n';
        x++;
        y = 0;
        header += delimiter;
        y++;
        header += delimiter;
        y++;
        header += ' ';
        y++;
        header += '\n';
        x++;
        y = 0;
        header += '\n';
        x++;
        y = 0;

        header += delimiter;
        y++;
        header += delimiter;
        y++;
        header += ' ';
        y++;
        header += 'Changelog:';
        header += '\n';
        x++;
        y = 0;
        header += delimiter;
        y++;
        header += delimiter;
        y++;
        header += ' ';
        y++;
        header += '\n';
        x++;
        y = 0;
        header += delimiter;
        y++;
        header += delimiter;
        y++;
        header += ' ';
        y++;
        header += '\n';
        x++;
        y = 0;
        header += '\n';
        x++;
        y = 0;

        header += delimiter;
        y++;
        header += delimiter;
        y++;
        header += ' ';
        y++;
        // while(y < 80) {
        // 	header += delimiter; y++;
        // }
        header += '\n';
        x++;
        y = 0;
        header += delimiter;
        y++;
        header += delimiter;
        y++;
        header += ' ';
        y++;
        header += 'Code starts here';
        y += 16;
        header += '\n';
        x++;
        y = 0;
        header += delimiter;
        y++;
        header += delimiter;
        y++;
        header += ' ';
        y++;
        while (y < 80) {
            header += delimiter;
            y++;
        }
        header += '\n';
        x++;
        y = 0;
        header += '\n';
        x++;
        y = 0;

        const destination = new vscode.Position(x, position.character);

        let line_last_offset = 1;
        let line_last = document.lineAt(
            document.lineCount - line_last_offset,
        ).text;

        while (
            line_last.trim() == '' &&
            line_last_offset + 1 < document.lineCount
        )
            line_last = document.lineAt(
                document.lineCount - ++line_last_offset,
            ).text;

        let should_insert_footer =
            line_last != delimiter + delimiter + ' ' + 'Code ends here';

        let footer: string = '\n\n';
        footer += delimiter;
        y++;
        footer += delimiter;
        y++;
        footer += ' ';
        y++;
        while (y < 80) {
            footer += delimiter;
            y++;
        }
        footer += '\n';
        x++;
        y = 0;
        footer += delimiter;
        y++;
        footer += delimiter;
        y++;
        footer += ' ';
        y++;
        footer += 'Code ends here';
        y += 9;
        footer += '\n';
        x++;
        y = 0;

        editor
            .edit((editBuilder) => {
                if (should_insert_header)
                    editBuilder.replace(beginning, header);

                if (should_insert_footer) editBuilder.replace(end, footer);
            })
            .then((success) => {
                if (should_insert_header)
                    editor.selection = new vscode.Selection(
                        destination,
                        destination,
                    );

                vscode.commands.executeCommand(
                    'editor.action.indentationToSpaces',
                );
            });
    }

    public make_section() {
        const editor = vscode.window.activeTextEditor;

        if (!editor) return;

        const document = editor.document;
        const selection = editor.selection;

        const lang = document.languageId;
        const position = editor.selection.active;

        let x = position.line;
        let y = position.character;

        const delimiter = this.lang_delimiter(lang);

        let content: string = '';
        content += delimiter;
        y++;
        content += delimiter;
        y++;
        content += ' ';
        y++;
        while (y < 80) {
            content += delimiter;
            y++;
        }
        content += '\n';
        x++;
        y = 0;

        while (y < position.character) {
            content += ' ';
            y++;
        }
        content += delimiter;
        y++;
        content += delimiter;
        y++;
        content += ' ';
        y++;

        const to = new vscode.Position(x, y);

        content += '\n';
        x++;
        y = 0;

        while (y < position.character) {
            content += ' ';
            y++;
        }
        content += delimiter;
        y++;
        content += delimiter;
        y++;
        content += ' ';
        y++;
        while (y < 80) {
            content += delimiter;
            y++;
        }
        content += '\n';
        x++;
        y = 0;

        editor
            .edit((editBuilder) => {
                editBuilder.replace(position, content);
            })
            .then(() => {
                editor.selection = new vscode.Selection(to, to);

                vscode.commands.executeCommand(
                    'editor.action.indentationToSpaces',
                );
            });
    }

    public make_divider() {
        const editor = vscode.window.activeTextEditor;

        if (!editor) return;

        const document = editor.document;
        const selection = editor.selection;

        const lang = document.languageId;
        const position = editor.selection.active;

        let x = position.line;
        let y = position.character;

        const delimiter = this.lang_delimiter(lang);

        let content: string = '';
        content += delimiter;
        y++;
        content += delimiter;
        y++;
        content += ' ';
        y++;
        while (y < 80) {
            content += delimiter;
            y++;
        }
        content += '\n';
        x++;
        y = 0;

        // ////////////////////////////////////////////////////////////////////

        editor
            .edit((editBuilder) => {
                editBuilder.replace(position, content);
            })
            .then(() => {
                editor.selection = new vscode.Selection(
                    new vscode.Position(x, y),
                    new vscode.Position(x, y),
                );

                vscode.commands.executeCommand(
                    'editor.action.indentationToSpaces',
                );
            });
    }

    public magit() {
        vscode.commands.executeCommand('workbench.scm.focus');
    }

    // ////////////////////////////////////////////////////////////////////////
    //
    // ////////////////////////////////////////////////////////////////////////

    private lang_delimiter(lang?: string) {
        switch (lang) {
            case 'c':
            case 'cpp':
            case 'csharp':
            case 'css':
            case 'go':
            case 'groovy':
            case 'java':
            case 'javascript':
            case 'javascriptreact':
            case 'jsonc':
            case 'kotlin':
            case 'less':
            case 'objective-c':
            case 'php':
            case 'qml':
            case 'sass':
            case 'scala':
            case 'stylus':
            case 'sql':
            case 'swift':
            case 'typescript':
            case 'typescriptreact':
                return '/';
            case 'bash':
            case 'dockerfile':
            case 'coffeescript':
            case 'ignore':
            case 'julia':
            case 'makefile':
            case 'perl':
            case 'perl6':
            case 'powershell':
            case 'properties':
            case 'python':
            case 'r':
            case 'ruby':
            case 'shell':
            case 'shellscript':
            case 'yaml':
            case 'yml':
            case 'home-assistant':
                return '#';
            case 'clojure':
            case 'lisp':
            case 'scheme':
            case 'ini':
            case 'rainmeter':
                return ';';
            case 'erlang':
            case 'latex':
            case 'matlab':
                return '%';
            case 'plaintext':
            default:
                return '#';
        }
    }
}

// /////////////////////////////////////////////////////////////////////////////
// Code ends here
