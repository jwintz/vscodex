// Version: $Id: d6f981c35ccf30eb7c038e6d5f3f842fe559c5ef $
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

import { LeaderKeybindingGuide } from './leader_provider+guide';
import { LeaderKeybindingGuideStatus } from './leader_provider+guide+status';
import { LeaderTree } from './leader_provider+tree';
import { load_configuration } from './leader_provider+settings';
import { is_active_setting } from './leader_provider+constants';

export class LeaderProvider {
    private static readonly emptyDisposable = vscode.Disposable.from({
        dispose: () => {},
    });
    private _keybindingTree: LeaderTree;
    private _typeCommandDisposable: vscode.Disposable;
    private _keybindingGuide: LeaderKeybindingGuide;
    private _isActive: boolean;

    public constructor(private readonly _extensionUri: vscode.Uri) {
        const config = load_configuration();

        this._isActive = false;
        this._keybindingTree = new LeaderTree(config.keybindings);
        this._keybindingGuide = new LeaderKeybindingGuideStatus();
        this._typeCommandDisposable = LeaderProvider.emptyDisposable;
    }

    public async enable() {
        if (this.isActive()) return;

        await this.setIsActive(true);

        const traverser = this._keybindingTree.getTraverser();
        const options = traverser.getAllowedKeys();

        this._keybindingGuide.show(options);

        this._typeCommandDisposable = vscode.commands.registerCommand(
            'type',
            async (args) => {
                try {
                    traverser.selectKey(args.text);
                } catch {
                    await this.disable();
                    return;
                }

                if (traverser.isTerminal()) {
                    const binding = traverser.getTerminalKeybinding();
                    await vscode.commands.executeCommand(
                        binding.command!,
                        binding.args || [],
                    );
                    await this.disable();
                    return;
                }

                const options = traverser.getAllowedKeys();
                this._keybindingGuide.show(options);
            },
        );
    }

    public async disable() {
        if (!this.isActive()) return;

        await this.setIsActive(false);

        this._typeCommandDisposable.dispose();
        this._typeCommandDisposable = LeaderProvider.emptyDisposable;
        this._keybindingGuide.hide();
    }

    public dispose() {
        this._keybindingGuide.dispose();
        this._typeCommandDisposable.dispose();
    }

    private async setIsActive(isActive: boolean) {
        this._isActive = isActive;
        await vscode.commands.executeCommand(
            'setContext',
            is_active_setting,
            isActive,
        );
    }

    private isActive(): boolean {
        return this._isActive;
    }
}

// /////////////////////////////////////////////////////////////////////////////
// Code ends here
