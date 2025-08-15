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

import * as command from "./command_provider";

export function activate(context: vscode.ExtensionContext): void {

    const command_provider = new command.CommandProvider(context.extensionUri);

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

    vscode.commands.executeCommand("whichkey.register", {
        bindings: "codex.whichkey.bindings",
        overrides: "codex.whichkey.bindingOverrides",
        title: "Code:X"
    });
}

// /////////////////////////////////////////////////////////////////////////////
// Code ends here
