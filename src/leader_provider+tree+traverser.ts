// Version: $Id: bad407af33d3d8204003c2a5357df23b71f3354d $
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

import { LeaderKeybinding } from './leader_provider+settings';

export type LeaderKeyOption = {
    key: string;
    keybinding?: LeaderKeybinding;
};

export interface LeaderTreeNode {
    readonly children: LeaderTreeNode[];
    readonly key: string;
    readonly keybinding?: LeaderKeybinding; // can be undefined if the user creates a parent-less keybinding
}

export class LeaderTreeTraverser {
    private _currentNode: LeaderTreeNode;

    public constructor(rootNode: LeaderTreeNode) {
        this._currentNode = rootNode;
    }

    public isTerminal(): boolean {
        return (
            this._currentNode.keybinding !== undefined &&
            this._currentNode.keybinding.command !== undefined
        );
    }

    public getTerminalKeybinding(): LeaderKeybinding {
        if (!this.isTerminal())
            throw new Error('No command for given sequence.');

        return this._currentNode.keybinding!;
    }

    public getAllowedKeys(): ReadonlyArray<LeaderKeyOption> {
        return this._currentNode.children;
    }

    public selectKey(key: string) {
        const newNode = this._currentNode.children.filter(
            (node) => node.key === key,
        );

        if (newNode.length === 0) throw new Error('Invalid key');

        this._currentNode = newNode[0];
    }
}

// /////////////////////////////////////////////////////////////////////////////
// Code ends here
