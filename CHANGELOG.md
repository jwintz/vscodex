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
    - [x] `M C-A-space`: `workbench.action.toggleAuxiliaryBar`
    - [x] `C-c`: `codex.leader.enter`
    - [x] `C-g`: `codex.leader.leave`

- View:

    - [x] `views.vscodex.assistant`

- Extension Pack:

    - [x] `tuttieee.emacs-mcx`
    - [x] `wenhoujx.swiper`
    - [x] `alefragnani.project-manager`
