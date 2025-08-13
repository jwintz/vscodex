<script>
    const clipboard = new ClipboardJS("#configuration-copy");

    clipboard.on("success", function (e) {
        const button = e.trigger;

        $(button).find("i").attr("class", "codicon codicon-check").attr("style", "font-size: 1.5em; margin-bottom: 0.15em; color: var(--vscode-notebookStatusSuccessIcon-foreground)");
        $(button).find("span").text("Copied");

        const checkInterval = setInterval(() => {
            if ($(button).find("i").hasClass("codicon-check")) {
                $(button).find("i").attr("class", "codicon codicon-copy").attr("style", "font-size: 1.5em; margin-bottom: 0.15em");
                $(button).find("span").text("Copy");

                clearInterval(checkInterval);
        }
    }, 2000);
});

    export default {
        data() {
            return {
                configuration: `{
    // /////////////////////////////////////////////////////////////////////////////
    // Font download:
    // - Hubot Sans: https://github.com/github/hubot-sans/releases/
    // - Mona Sans: https://github.com/github/mona-sans/releases/
    // - Monaspace: https://github.com/githubnext/monaspace/releases/
    // /////////////////////////////////////////////////////////////////////////////

    // Once installed ...

    // /////////////////////////////////////////////////////////////////////////////
    // Breadcrumbs Settings
    // /////////////////////////////////////////////////////////////////////////////

    "breadcrumbs.enabled": false,

    // /////////////////////////////////////////////////////////////////////////////
    // Editor Settings
    // /////////////////////////////////////////////////////////////////////////////

    "editor.cursorBlinking": "solid",
    "editor.cursorWidth": 2,
    "editor.codeLensFontFamily": "'Monaspace Krypton Var', monospace",
    "editor.fontSize": 11,
    "editor.fontFamily": "'Monaspace Neon Var', monospace",
    "editor.fontLigatures": "'calt', 'liga', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06', 'ss07', 'ss08', 'ss09'",
    "editor.formatOnSave": true,
    "editor.defaultFormatter": null,
    "editor.inlayHints.fontFamily": "'Monaspace Krypton Var', monospace",
    "editor.inlineSuggest.enabled": true,
    "editor.inlineSuggest.fontFamily": "'Monaspace Krypton Var', monospace",
    "editor.inlineSuggest.showToolbar": "always",
    "editor.inlineSuggest.syntaxHighlightingEnabled": true,
    "editor.minimap.showSlider": "mouseover",
    "editor.minimap.renderCharacters": false,
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.stickyScroll.scrollWithEditor": false,
    "editor.stickyScroll.enabled": false,
    "editor.smoothScrolling": true,

    // /////////////////////////////////////////////////////////////////////////////
    // Explorer Settings
    // /////////////////////////////////////////////////////////////////////////////

    "explorer.confirmDragAndDrop": false,
    "explorer.confirmDelete": false,
    "explorer.compactFolders": false,

    // /////////////////////////////////////////////////////////////////////////////
    // Source Code Management (GIT) Settings
    // /////////////////////////////////////////////////////////////////////////////

    "git.confirmSync": false,

    // /////////////////////////////////////////////////////////////////////////////
    // Source Code Management (SCM) Settings
    // /////////////////////////////////////////////////////////////////////////////

    "scm.inputFontFamily": "editor",

    // /////////////////////////////////////////////////////////////////////////////
    // Terminal Settings
    // /////////////////////////////////////////////////////////////////////////////

    "terminal.integrated.fontSize": 11,
    "terminal.integrated.cursorStyle": "line",
    "terminal.integrated.cursorWidth": 2,
    "terminal.integrated.fontFamily": "'Monaspace Argon Var', monospace",
    "terminal.integrated.tabs.enabled": false,
    "terminal.integrated.tabs.showActiveTerminal": "always",

    // /////////////////////////////////////////////////////////////////////////////
    // Window Settings
    // /////////////////////////////////////////////////////////////////////////////

    "window.autoDetectColorScheme": true,
    "window.commandCenter": true,
    "window.titleBarStyle": "custom",

    // /////////////////////////////////////////////////////////////////////////////
    // Workbench Settings
    // /////////////////////////////////////////////////////////////////////////////

    "workbench.activityBar.location": "hidden",
    "workbench.editor.showTabs": "none",
    "workbench.layoutControl.enabled": false,
    "workbench.preferredDarkColorTheme": "Code:T Dark",
    "workbench.preferredLightColorTheme": "Code:T Light",
    "workbench.startupEditor": "none",
    "workbench.tips.enabled": false,
    "workbench.tree.enableStickyScroll": false,
    "workbench.tree.indent": 16,

    // /////////////////////////////////////////////////////////////////////////////
    // File associations
    // /////////////////////////////////////////////////////////////////////////////

    "files.associations": {
        "CMakeLists.txt": "cmake",
        "*.cmake": "cmake",
        "*.cmake.in": "cmake",
        "*json.in": "jsonc",
        "*plist.in": "xml"
    },

    // /////////////////////////////////////////////////////////////////////////
    // Language Settings
    // /////////////////////////////////////////////////////////////////////////

    "[cpp]": {
        "editor.defaultFormatter": "llvm-vs-code-extensions.vscode-clangd",
        "editor.formatOnSave": true,
        "editor.formatOnType": false,
        "editor.formatOnPaste": false,
    },

    "json.format.enable": true,
    "json.format.keepLines": true,

    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features",
        "editor.formatOnSave": true,
        "editor.formatOnType": false,
        "editor.formatOnPaste": false,
        "editor.tabSize": 4,
    },

    "[jsonc]": {
        "editor.defaultFormatter": "vscode.json-language-features",
        "editor.formatOnSave": true,
        "editor.formatOnType": false,
        "editor.formatOnPaste": false,
        "editor.tabSize": 4,
    },

    "[qml]": {
        "editor.defaultFormatter": "theqtcompany.qt-qml",
        "editor.formatOnSave": true,
        "editor.formatOnType": false,
        "editor.formatOnPaste": false,
    },

    "typescript.format.enable": false,
    "typescript.format.semicolons": "insert",
    "typescript.format.insertSpaceAfterKeywordsInControlFlowStatements": true,
    "typescript.format.insertSpaceAfterCommaDelimiter": true,
    "typescript.format.insertSpaceAfterSemicolonInForStatements": true,
    "typescript.format.insertSpaceBeforeAndAfterBinaryOperators": true,
    "typescript.format.insertSpaceAfterConstructor": false,
    "typescript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": true,
    "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
    "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": false,
    "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true,
    "typescript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": false,
    "typescript.format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": false,
    "typescript.format.insertSpaceAfterTypeAssertion": false,
    "typescript.format.insertSpaceBeforeFunctionParenthesis": false,
    "typescript.format.placeOpenBraceOnNewLineForFunctions": false,
    "typescript.format.placeOpenBraceOnNewLineForControlBlocks": false,

    "[typescript]": {
        "editor.formatOnSave": false,
        "editor.defaultFormatter": "vscode.typescript-language-features",
        "editor.tabSize": 4,
    },

    "[vue]": {
        "editor.formatOnSave": false,
        "editor.defaultFormatter": null,
        "editor.tabSize": 4,
    },

    // /////////////////////////////////////////////////////////////////////////////
    // Extension: CMake Tools Settings
    // /////////////////////////////////////////////////////////////////////////////

    "cmake.automaticReconfigure": false,
    "cmake.configureOnOpen": false,
    "cmake.configureOnEdit": false,

    // /////////////////////////////////////////////////////////////////////////////
    // Extension: Emacs MCX Settings
    // /////////////////////////////////////////////////////////////////////////////

    "emacs-mcx.useMetaPrefixEscape": true,
    "emacs-mcx.useMetaPrefixCtrlLeftBracket": true,

    // /////////////////////////////////////////////////////////////////////////////
    // Extension: GitHub Copilot Settings
    // /////////////////////////////////////////////////////////////////////////////

    "chat.agent.maxRequests": 500,
    "chat.checkpoints.enabled": true,
    "chat.editor.fontFamily": "'Monaspace Krypton Var', monospace",
    "chat.editor.fontSize": 11,
    "chat.editRequests": "inline",
    "chat.notifyWindowOnConfirmation": true,
    "chat.todoListTool.enabled": true,
    "chat.tools.terminal.autoApprove": {
        "/.*/": true,
        "brew install": false,
        "brew remove": false,
        "git add": false,
        "git rm": false,
        "git commit": false,
        "git push": false,
        "sleep": false,
    },

    // "editor.aiStats.enabled": true,

    // /////////////////////////////////////////////////////////////////////////
    // Extension: Custom UI Style Settings
    // /////////////////////////////////////////////////////////////////////////

    "custom-ui-style.stylesheet": {
        ".mtki": "font-family: 'Monaspace Radon Var';",
        ".ghost-text-decoration": "font-family: 'Monaspace Krypton Var';",
        ".ghost-text-decoration-preview": "font-family: 'Monaspace Krypton Var';",
        ".monaco-button": "border-radius: 8px;",
        ".monaco-text-button": "border-radius: 8px;",
        ".monaco-inputbox": "border-radius: 8px;",
        ".monaco-select-box": "border-radius: 8px;",
        ".monaco-dropdown": "border-radius: 8px;",
        ".monaco-button-dropdown": "border-radius: 8px;",
        ".monaco-checkbox": "border-radius: 4px;",
        ".monaco-radio-button": "border-radius: 50%;",

        ".monaco-scrollable-element .scrollbar.vertical": "width: 2px !important;",
        ".monaco-scrollable-element .scrollbar.horizontal": "height: 2px !important;",
        ".monaco-scrollable-element .slider": "border-radius: 2px !important;",
        ".monaco-list .monaco-scrollable-element .scrollbar.vertical": "width: 2px !important;",
        ".monaco-list .monaco-scrollable-element .scrollbar.horizontal": "height: 2px !important;",
        ".monaco-list .monaco-scrollable-element .slider": "border-radius: 2px !important;"
    },

    // /////////////////////////////////////////////////////////////////////////
    // Otherwise changed by VS Code
    // /////////////////////////////////////////////////////////////////////////

    "entry": "placeholder",
}`,
        };
    },
        emits: [ "insertClicked" ],
};
</script>

<template>
    <div id="3" class="flex items-center justify-between">
        <div class="flex gap-2 mb-2">
            <i class="codicon codicon-settings" style="font-size: 1.5em"></i>
            Configuration
        </div>
        <div class="flex gap-4">
            <div class="flex gap-2">
                <button id="configuration-copy" type="button" class="mb-2 mr-1 group inline-flex items-center gap-x-2 text-xs font-medium focus:outline-none disabled:opacity-50 disabled:pointer-events-none" data-clipboard-target="#configuration" data-clipboard-action="copy" data-clipboard-success-text="Copied">
                    <i class="codicon codicon-copy" style="font-size: 1.5em; margin-bottom: 0.15em"></i>

                    <span class="">Copy</span>
                </button>
            </div>
            <div id="todo" class="flex gap-2">
                <button @click="this.$emit('insertClicked', configuration)" id="configuration-insert" type="button" class="mb-2 mr-1 group inline-flex items-center gap-x-2 text-xs font-medium focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                    <i class="codicon codicon-insert" style="font-size: 1.5em; margin-bottom: 0.15em"></i>

                    <span class="">Insert</span>
                </button>
            </div>
        </div>
    </div>

    <div class="w-full p-2 overflow-x-auto font-mono text-xs bg-vscode-background disabled:opacity-50 disabled:pointer-events-none rounded mb-5 shadow-sm border border-vscode-commandCenter-border" style="font-size: 0.65rem; line-height: 0.8rem">
        <pre><code id="configuration" class="language-json">{{ this.configuration }}</code></pre>
    </div>
</template>

<style scoped></style>
