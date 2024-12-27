// Version: $Id: f023ad65d3b001ebf63f20ee98dddc974d8e0c5e $
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

import { StatusBarAlignment, StatusBarItem, window } from 'vscode';

import { LeaderKeyOption } from './leader_provider+tree+traverser';
import { no_label } from './leader_provider+constants';
import { LeaderKeybindingGuide } from './leader_provider+guide';

export class LeaderKeybindingGuideStatus implements LeaderKeybindingGuide {
    private _statusBars: StatusBarItem[];
    private _statusBarItemFactory: () => StatusBarItem;

    public constructor(
        statusBarItemFactory: () => StatusBarItem = window.createStatusBarItem.bind(
            StatusBarAlignment.Left,
        ),
    ) {
        this._statusBars = [];
        this._statusBarItemFactory = statusBarItemFactory;
    }

    private static getOption(keyOption: LeaderKeyOption) {
        const noDescriptionString: string = no_label;

        let optionDescription: string = noDescriptionString;

        if (keyOption.keybinding) {
            optionDescription =
                keyOption.keybinding.label ||
                keyOption.keybinding.command ||
                noDescriptionString;
        } else {
            optionDescription = noDescriptionString;
        }

        const isCommand: boolean =
            keyOption.keybinding !== undefined &&
            keyOption.keybinding.command !== undefined;

        if (isCommand) return `[ ${keyOption.key} ] - ${optionDescription}`;
        else return `[ ${keyOption.key} ] - (${optionDescription})`;
    }

    public show(options: ReadonlyArray<LeaderKeyOption>): void {
        this._statusBars.forEach((statusBar) => statusBar.dispose());
        this._statusBars = options.map((option) => {
            const statusBar = this._statusBarItemFactory();
            statusBar.text = LeaderKeybindingGuideStatus.getOption(option);
            statusBar.command = option.keybinding && option.keybinding.command;
            statusBar.show();
            return statusBar;
        });
    }

    public hide() {
        this.disposeStatusBars();
    }

    public dispose() {
        this.disposeStatusBars();
    }

    private disposeStatusBars() {
        this._statusBars.forEach((statusBar) => statusBar.dispose());
    }
}

// ////////////////////////////////////////////////////////////////////////////
// Code ends here
