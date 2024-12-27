// Version: $Id: c4f53f8c63399cf7bea4a1a90220d42373215b4c $
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

import { workspace } from 'vscode';

import {
    extension_name,
    keybindings_setting,
    LeaderKeyGuideVisibility,
    show_key_guide_setting,
} from './leader_provider+constants';

export interface LeaderKeybinding {
    keySequence: string[];
    command?: string;
    args?: any[];
    label?: string;
}

export interface LeaderConfiguration {
    keybindings: LeaderKeybinding[];
    show_key_guide: LeaderKeyGuideVisibility;
}

export function load_configuration(): LeaderConfiguration {
    const WorkspaceConfiguration = workspace.getConfiguration(extension_name);
    const config: LeaderConfiguration = {
        keybindings:
            WorkspaceConfiguration.get<LeaderKeybinding[]>(
                keybindings_setting,
            ) || [],
        show_key_guide:
            WorkspaceConfiguration.get<LeaderKeyGuideVisibility>(
                show_key_guide_setting,
            ) || LeaderKeyGuideVisibility.Always,
    };

    return config;
}

// /////////////////////////////////////////////////////////////////////////////
// Code ends here
