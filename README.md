# VSCodeX: Personal Extension Framework

VSCodeX is a personal extension framework for Visual Studio Code that allows you
to create your own extension with a set of predefined components.

Its structure follows entry points for a VSCode extension, namely commands,
keybindings, configuration and views.

VSCodeX also serves as an extension pack, that is, it gathers, configures and
articulates other extensions in a way that is meant to be consistent.

## Table of Contents

1. [Commands](#commands)
2. [Keybindings](#keybindings)
3. [Configuration](#configuration)
4. [Assistant](#assistant)
5. [References](#references)

## Commands

Commands are the core of interactivity. They represent actions that users can
perform, such as formatting code, creating new files, or interacting with the
terminal. These commands are accessible via the Command Palette (`M-x`) or can
be triggered by keybindings, menus, or APIs.

In VSCodeX, commands are defined in the `package.json` file of the extension
under the `commands` section. Each command has an identifier, a title, and an
optional category to group similar commands. For example:

```json
"commands": [
    {
        "command": "codex.leader.enter",
        "category": "Codex",
        "title": "Enter Leader Mode"
    }
]
```

## Keybindings

Keybindings are shortcuts that map specific key combinations to commands,
allowing users to quickly execute actions without needing to navigate menus or
the Command Palette. Visual Studio Code uses a `keybindings.json` file to
define these mappings, and extensions can contribute their own.

In VSCodeX, the previous command is mapped to a keybinding like this:

```json
"keybindings": {
    "key": "ctrl+c",
    "command": "codex.leader.enter",
    "when": "editorTextFocus"
},
```

This means pressing `ctrl+c` while the text editor is focused will trigger the
`codex.leader.enter` command. Keybindings enhance productivity by providing a
seamless and customizable workflow.

The "leader framework" refers to a keybinding system built around a "leader key"
concept. This design pattern organizes keybindings hierarchically to make them
easier to remember and more efficient to use.

**Leader Key**

- A single key `C-c` serves as a prefix for all major commands.
- It acts as a "root" for a tree of keybindings, which users can navigate by
  pressing subsequent keys in sequence.

**Mnemonic Keybinding Organization**

- Commands are grouped logically under subkeys that represent their
  functionality. For example:
    - `C-c f` for file-related commands (e.g., open, save, close).
    - `C-c b` for buffer management (e.g., switching, killing).
    - `C-c p` for project-related commands (e.g., switching projects, searching
      within a project).

**Discoverability**

- The leader key framework often integrates tools to display available
  keybindings dynamically (e.g. the status bar), making it easier for users to
  discover and learn commands.

**Customizability**

- Users can easily redefine or extend keybinding trees to suit their workflows,
  allowing the leader framework to adapt to various needs.

This allows to define keybindings as a key sequence, for example:

```json
"configuration": {
    "codex.leader.keybindings": {
        "default": [
            {
                "keySequence": [
                    "e"
                ],
                "label": "Editor"
            },
            {
                "keySequence": [
                    "e",
                    "c"
                ],
                "command": "codex.command.makeSection",
                "label": "Make section"
            }
        ]
    }
}
```

## Configuration

Configuration allows users to customize the behavior of an extension through the
VSCode settings interface. Extensions contribute settings via the configuration
section in `package.json`, enabling users to modify options in the
`settings.json` file or through the GUI settings editor.

For example, VSCodeX defines a configurable setting like this:

```json
"configuration": {
    "title": "Codex Leader Mode",
    "type": "object",
    "properties": {
        "codex.leader.showKeyGuide": {
            "type": "string",
            "enum": [
                "always",
                "never"
            ],
            "default": "always"
        }
    }
}
```

It also provides default settings for extensions present in the extension pack.

## Assistant

The assistant is a core feature of VSCodeX, serving as a view within the
extension that provides an interactive interface for users. Views in VSCode are
UI components that integrate into the Activity Bar, Side Bar, or other areas,
and they are defined in the `package.json` under the views section.

For example, the assistant view might display helpful tips, shortcuts, or even
an interactive contextual interface.

## Extension Pack

VSCodeX also acts as an extension pack, bundling other extensions to provide a
comprehensive development environment. The curated list of extensions includes:

- [Awesome Emacs Keymap](https://marketplace.visualstudio.com/items?itemName=tuttieee.emacs-mcx)
- [Swiper](https://marketplace.visualstudio.com/items?itemName=wenhoujx.swiper)
- [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
- [Rewrap](https://marketplace.visualstudio.com/items?itemName=dnut.rewrap-revived)

By combining these extensions, VSCodeX ensures a consistent and productive
workflow for developers.

## References

1. [VSCode Extension API](https://code.visualstudio.com/api)
