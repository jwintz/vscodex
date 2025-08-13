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

import * as assistant from "./assistant_provider";
import * as command from "../command_provider";
import * as leader from "../leader_provider";

export function activate(context: vscode.ExtensionContext): void {
    // /////////////////////////////////////////////////////////////////////////
    // Assistant provider (web-compatible)
    // /////////////////////////////////////////////////////////////////////////

    const provider = new assistant.AssistantProvider(context);
    context.subscriptions.push(vscode.window.registerWebviewViewProvider("assistant", provider));

    // ////////////////////////////////////////////////////////////////////////
    // Commands provider
    // ////////////////////////////////////////////////////////////////////////

    const command_provider = new command.CommandProvider(context.extensionUri);

    context.subscriptions.push(
        vscode.commands.registerCommand("codex.command.explorer", () => {
            command_provider.explorer();
        })
    );

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

    context.subscriptions.push(
        vscode.commands.registerCommand("codex.command.magit", () => {
            command_provider.magit();
        })
    );

    // ////////////////////////////////////////////////////////////////////////
    // Leader provider
    // ////////////////////////////////////////////////////////////////////////

    const leader_provider = new leader.LeaderProvider(context.extensionUri);

    context.subscriptions.push(
        vscode.commands.registerCommand("codex.leader.enter", () => {
            leader_provider.enable();
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand("codex.leader.leave", () => {
            leader_provider.disable();
        })
    );
}

export function deactivate(): void { }

// /////////////////////////////////////////////////////////////////////////////
// Code ends here
