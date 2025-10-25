# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Types of changes include:

- `Added` for new features
- `Changed` for changes in existing functionality
- `Deprecated` for soon-to-be removed features
- `Removed` for now removed features
- `Fixed` for any bug fixes
- `Security` in case of vulnerabilities

## [0.0.20] - 2025-10-25

### Added

- Leader sequence: C-c s c: Show copilot sessions

## [0.0.19] - 2025-10-25

### Added

- Leader sequence: C-c s c: Show copilot sessions

## [0.0.18] - 2025-08-16

### Fixed

- Module loading errors on web

## [0.0.17] - 2025-08-15

### Fixed

- Extension for the web: File system API incompatibility: Using fsPath instead of path for URIs 

## [0.0.15] - 2025-08-15

### Fixed

- Module type for the web and correct extension id reference

## [0.0.14] - 2025-08-15

### Fixed

- Async activation for `whichkey`

## [0.0.13] - 2025-08-15

### Fixed

- Web compatibility

## [0.0.12] - 2025-08-15

### Added

- Extension Pack:

    - [x] `VSpaceCode.whichkey`

- Configuration:

    - [x] `codex.whichkey.bindings`

### Removed

- Assistant provider
- Leader provider

## [0.0.11] - 2025-08-14

### Added

- Extension Pack:

    - [x] `kahole.magit`

- Keybindings:

    - [x] `C-c v v`: `magit.status`

### Removed

- Commands:

    - [x] `codex.magit`

## [0.0.10] - 2025-08-13

### Added

- Release actions

## [0.0.9] - 2025-08-13

### Added

- Keybindings:

    - [x] `C-x [`: `workbench.action.toggleSidebarVisibility`
    - [x] `C-x ]`: `workbench.action.toggleAuxiliaryBar`

## [0.0.8] - 2025-08-13

### Fixed

- Assistant: supporting files were excluded from package

## [0.0.7] - 2025-08-13

### Changed

- Naming conventions

## [0.0.6] - 2025-08-13

### Changed

- Naming conventions

## [0.0.5] - 2025-08-13

### Changed

- Display Name -> Code:X

## [0.0.4] - 2025-08-13

### Added

- Extension Pack:

    - [x] `jwintz.vscodet`

## [0.0.3] - 2025-08-04

### Fixed

- Keybindings:

    - [x] `codex.leader.enter`
    - [x] `--emacs-mcx.browseKillRing`

## [0.0.2] - 2025-07-24

### Added

- Architecture:
    - [x] Web entry point
    - [x] Virtual workspace support

### Fixed

- Keybindings:

    - [x] `workbench.action.togglePanel`

## [0.0.1] - 2024-12-11

### Added

- Commands:

    - [x] `codex.command.explorer`
    - [x] `codex.command.commentRegion`
    - [x] `codex.command.indentBuffer`
    - [x] `codex.command.indentRegion`
    - [x] `codex.command.makeHeader`
    - [x] `codex.command.makeDivider`
    - [x] `codex.command.makeSection`
    - [x] `codex.command.magit`
    - [x] `codex.leader.enter`
    - [x] `codex.leader.leave`

- Configuration:

    - [x] `codex.leader.showKeyGuide`
    - [x] `codex.leader.keybindings`

- Keybindings:

    - [x] `C-c c c`: `workbench.panel.chat`
    - [x] `C-c c e`: `workbench.panel.chatEditing`
    - [x] `C-c c i`: `inlineChat.startWithCurrentLine`
    - [x] `C-c c s`: `editor.action.inlineSuggest.trigger`
    - [x] `C-c d d`: `workbench.action.debug.start`
    - [x] `C-c d D`: `workbench.action.debug.stop`
    - [x] `C-c e c`: `codex.command.makeSection`
    - [x] `C-c e d`: `codex.command.makeDivider`
    - [x] `C-c e e`: `codex.command.explorer`
    - [x] `C-c e l`: `editor.action.copyLinesDownAction`
    - [x] `C-c e L`: `editor.action.copyLinesUpAction`
    - [x] `C-c e m`: `codex.command.makeHeader`
    - [x] `C-c p f`: `projectManager.listProjects`
    - [x] `C-c p w`: `projectManager.saveProject`
    - [x] `C-c v c`: `git.commit`
    - [x] `C-c v p`: `git.push`
    - [x] `C-c v s`: `git.stageAll`
    - [x] `C-x n`: `workbench.action.nextEditor`
    - [x] `C-x p`: `workbench.action.previousEditor`
    - [x] `M >`: `cursorBottom`
    - [x] `M <`: `cursorTop`
    - [x] `C-s`: `swiper.swiper`
    - [x] `C-x 0`: `workbench.action.closeEditorsInGroup`
    - [x] `C-x 1`: `workbench.action.closeEditorsInOtherGroups`
    - [x] `C-x 5`: `workbench.action.newWindow`
    - [x] `C-x 6`: `workbench.action.closeWindow`
    - [x] `C-x F`: `workbench.action.files.openFolder`
    - [x] `C-x K`: `workbench.action.closeFolder`
    - [x] `C-x left`: `workbench.action.navigateLeft`
    - [x] `C-x right`: `workbench.action.navigateRight`
    - [x] `C-x up`: `workbench.action.navigateUp`
    - [x] `C-x down`: `workbench.action.navigateDown`
    - [x] `C-+`: `editor.action.fontZoomIn`
    - [x] `C--`: `editor.action.fontZoomOut`
    - [x] `C-0`: `editor.action.fontZoomReset`
    - [x] `C-A-+`: `workbench.action.zoomIn`
    - [x] `C-A-=`: `workbench.action.zoomOut`
    - [x] `C-A-0`: `workbench.action.zoomReset`
    - [x] `tab`: `editor.action.indentLines`
    - [x] `M C-space`: `workbench.action.toggleSidebarVisibility`
    - [x] `M C-A-space`: `workbench.action.toggleAuxiliaryBar`
    - [x] `C-c`: `codex.leader.enter`
    - [x] `C-g`: `codex.leader.leave`
    - [x] `M-q`: `rewrap.rewrapComment`

- View:

    - [x] `views.vscodex.assistant`

- Extension Pack:

    - [x] `tuttieee.emacs-mcx`
    - [x] `wenhoujx.swiper`
    - [x] `dnut.rewrap-revived`
