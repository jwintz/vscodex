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
                configuration: `"editor.cursorBlinking": "solid",
"editor.cursorWidth": 2,
"editor.fontFamily": "'Monaspace Neon', monospace",
"editor.fontLigatures": "'calt', 'liga', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06', 'ss07', 'ss08', 'ss09'",
"editor.detectIndentation": false,
"editor.inlineSuggest.enabled": true,
"editor.inlineSuggest.fontFamily": "'Monaspace Krypton', monospace",
"editor.inlineSuggest.showToolbar": "always",
"editor.inlineSuggest.syntaxHighlightingEnabled": true,
"editor.minimap.showSlider": "mouseover",
"editor.minimap.renderCharacters": false,
"editor.multiCursorModifier": "ctrlCmd",
"editor.semanticHighlighting.enabled": true,
"editor.stickyScroll.scrollWithEditor": false,
"editor.stickyScroll.enabled": false,
"editor.scrollbar.vertical": "hidden"
"files.trimTrailingWhitespace": true,
"terminal.integrated.gpuAcceleration": "on",
"terminal.integrated.cursorStyle": "line",
"terminal.integrated.cursorWidth": 2,
"terminal.integrated.fontFamily": "'Monaspace Argon', monospace",
"terminal.integrated.tabs.location": "right",
"terminal.integrated.tabs.hideCondition": "singleGroup",
"terminal.integrated.fontSize": 12,
"window.commandCenter": true,
"window.titleBarStyle": "custom",
"workbench.editor.showTabs": "single",
"workbench.activityBar.location": "hidden",
"workbench.layoutControl.enabled": false,
"workbench.tree.enableStickyScroll": false,
"workbench.startupEditor": "none",
"workbench.tips.enabled": false,
"workbench.iconTheme": "vs-minimal",`,
            };
        },
        emits: ["insertClicked"],
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
