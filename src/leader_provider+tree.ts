// Version: $Id: db96a34c59a893ea47e9031339d93d9449659b5a $
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
import {
    LeaderTreeNode,
    LeaderTreeTraverser,
} from './leader_provider+tree+traverser';

export class LeaderTree {
    private _rootNode: LeaderTreeNode;

    public constructor(keybindings: LeaderKeybinding[]) {
        this._rootNode = LeaderTree.buildTree(keybindings);
    }

    private static createRoot(): LeaderTreeNode {
        return {
            children: [],
            key: '',
        };
    }

    private static buildTree(keybindings: LeaderKeybinding[]): LeaderTreeNode {
        const root = LeaderTree.createRoot();

        if (!keybindings) return root;

        // make the tree in alphabetical order
        keybindings.sort(LeaderTree.compareKeybindings);

        keybindings.forEach((keybinding) => {
            LeaderTree.addKeyBinding(keybinding, root);
        });

        return root;
    }

    private static compareKeybindings(
        binding1: LeaderKeybinding,
        binding2: LeaderKeybinding,
    ): number {
        const keySeq1 = binding1.keySequence.join();
        const keySeq2 = binding2.keySequence.join();
        const keySeq1Upper = keySeq1.toUpperCase();
        const keySeq2Upper = keySeq2.toUpperCase();

        // first sort in increasing case insensitive order
        if (keySeq1Upper < keySeq2Upper) return -1;

        if (keySeq1Upper > keySeq2Upper) return 1;

        // otherwise keys are the same but may differ in case
        // we will switch the ordering so that lowercase comes first
        if (keySeq1 > keySeq2) return -1;

        if (keySeq1 < keySeq2) return 1;

        return 0;
    }

    private static addKeyBinding(
        keybinding: LeaderKeybinding,
        rootNode: LeaderTreeNode,
    ) {
        let currentNode: LeaderTreeNode = rootNode;

        keybinding.keySequence.forEach((key, index) => {
            const matchingNodes = currentNode.children.filter(
                (node) => node.key === key,
            );

            // full key sequence read, create leaf node
            if (index === keybinding.keySequence.length - 1) {
                // a command cannot be at or above any other key binding
                if (matchingNodes.length > 0 && keybinding.command) {
                    throw new Error(
                        `Conflicting key sequence at: ${keybinding.keySequence}`,
                    );
                }

                const leafNode: LeaderTreeNode = {
                    children: [],
                    key,
                    keybinding,
                };

                currentNode.children.push(leafNode);
            } else if (matchingNodes.length > 0) {
                // found an existing keybinding, follow subtree
                const matchingNode = matchingNodes[0];
                // a command cannot be at or above any other key binding
                if (
                    matchingNode.keybinding &&
                    matchingNode.keybinding.command
                ) {
                    throw new Error(
                        `Conflicting key sequence at: ${keybinding.keySequence} and ${matchingNode.keybinding}`,
                    );
                }

                currentNode = matchingNode;
            } else {
                // no existing keybinding, create new subtree
                const newNode: LeaderTreeNode = {
                    children: [],
                    key,
                };
                currentNode.children.push(newNode);
                currentNode = newNode;
            }
        });
    }

    public getTraverser(): LeaderTreeTraverser {
        return new LeaderTreeTraverser(this._rootNode);
    }
}

// /////////////////////////////////////////////////////////////////////////////
// Code ends here
