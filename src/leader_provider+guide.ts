// Version: $Id: f037ac05b74ac726df16d130da5e3fed81e64724 $
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

import { LeaderKeyOption } from './leader_provider+tree+traverser';

export interface LeaderKeybindingGuide {
    show(options: ReadonlyArray<LeaderKeyOption>): void;
    hide(): void;
    dispose(): void;
}

// /////////////////////////////////////////////////////////////////////////////
// Code ends here
