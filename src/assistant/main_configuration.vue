<script>
    window.addEventListener("load", () => {
        (function () {
            const toastMarkup = `
            <div class="flex p-4">
                <p class="text-sm text-vscode-foreground">TODO</p>
                <div class="ms-auto">
                    <button type="button" class="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-vscode-descriptionForeground opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100" aria-label="Close">
                        <span class="sr-only">Close</span>
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                    </button>
                </div>
            </div>
            `;

            const callToast = document.querySelector("#todo");

            callToast.addEventListener("click", () => {
                const toast = Toastify({
                    text: toastMarkup,
                    className: "hs-toastify-on:opacity-100 opacity-0 fixed -top-[150px] right-[20px] z-[90] transition-all duration-300 w-[200px] bg-vscode-editor-background text-sm text-vscode-foreground border border-vscode-commandCenter-border rounded-xl shadow-lg [&>.toast-close]:hidden",
                    duration: 3000,
                    close: true,
                    escapeMarkup: false,
                    onClick: function () {
                        toast.hideToast();
                    },
                }).showToast();
            });
        })();
    });

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
                <button id="configuration-insert" type="button" class="mb-2 mr-1 group inline-flex items-center gap-x-2 text-xs font-medium focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                    <i class="codicon codicon-insert" style="font-size: 1.5em; margin-bottom: 0.15em"></i>

                    <span class="">Insert</span>
                </button>
            </div>
        </div>
    </div>

    <div class="w-full p-2 overflow-x-auto font-mono text-xs bg-vscode-background disabled:opacity-50 disabled:pointer-events-none rounded mb-5 shadow-sm border border-vscode-commandCenter-border" style="font-size: 0.65rem; line-height: 0.8rem">
        <pre><code id="configuration">"editor.cursorBlinking": "solid",
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
"workbench.iconTheme": "vs-minimal",</code></pre>
    </div>
</template>

<style scoped></style>
