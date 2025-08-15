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

export async function activate(context: vscode.ExtensionContext): Promise<void> {

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

    const whichkeyExtension = vscode.extensions.getExtension("VSpaceCode.whichkey");

    if (whichkeyExtension) {
        try {
            if (!whichkeyExtension.isActive) {
                await whichkeyExtension.activate();
            }
            
            // Add a small delay to ensure WhichKey is fully initialized
            setTimeout(() => {
                vscode.commands.executeCommand("whichkey.register", {
                    bindings: "codex.whichkey.bindings",
                    overrides: "codex.whichkey.bindingOverrides",
                    title: "Code:X"
                }).then(() => {
                    console.log("Code:X - WhichKey bindings registered successfully");
                }, (error) => {
                    console.error("Code:X - Failed to register WhichKey bindings:", error);
                });
            }, 100);
        } catch (error) {
            console.error("Code:X - Failed to activate WhichKey extension:", error);
        }
    } else {
        console.warn("Code:X - WhichKey extension not found");
    }
}

// /////////////////////////////////////////////////////////////////////////////
// Code ends here
