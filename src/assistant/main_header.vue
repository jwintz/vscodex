<script></script>

<template>
    <div class="max-w-full mx-auto mb-6">
        <div class="grid md:grid-cols-2 gap-6">
            <div>
                <h2 class="text-2xl text-vscode-forerground font-bold lg:text-4xl">CodeX: Personal extension framework</h2>
                <p class="mt-3 text-vscode-descriptionForeground text-justify">VSCodeX is a personal extension framework for Visual Studio Code that allows you to create your own extension with a set of predefined components.</p>
                <p class="mt-3 text-vscode-descriptionForeground text-justify">Its structure follows entry points for a VSCode extension, namely commands, keybindings, configuration and views.</p>
                <p class="mt-3 text-vscode-descriptionForeground text-justify">VSCodeX also serves as an extension pack, that is, it gathers, configures and articulates other extensions in a way that is meant to be consistent.</p>
                <p class="mt-5">
                    <a class="inline-flex items-center gap-x-1 text-sm text-vscode-textLink-foreground decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="https://gitlab.inria.fr/jwintz/vscodex" target="_blank">
                        Browse the documentation on GitLab
                        <svg class="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </a>
                </p>
            </div>

            <div class="space-y-6 lg:space-y-10">
                <div class="flex gap-x-5">
                    <a href="#1">
                        <span class="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-vscode-commandCenter-border bg-vscode-commandCenter-background text-vscode-commandCenter-foreground shadow-sm mx-auto">
                            <i class="codicon codicon-record-keys" style="font-size: 2em"></i>
                        </span>
                    </a>
                    <div class="grow">
                        <h3 class="text-base sm:text-lg font-semibold text-vscode-foreground">Commands</h3>
                        <p class="mt-1 text-justify text-vscode-descriptionForeground">Commands are the core of interactivity. They represent actions that users can perform, such as formatting code, creating new files, or interacting with the terminal. These commands are accessible via the Command Palette (`M-x`) or can be triggered by keybindings, menus, or APIs.</p>
                    </div>
                </div>

                <div class="flex gap-x-5">
                    <a href="#2">
                        <span class="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-vscode-commandCenter-border bg-vscode-commandCenter-background text-vscode-commandCenter-foreground shadow-sm mx-auto">
                            <i class="codicon codicon-record-keys" style="font-size: 2em"></i>
                        </span>
                    </a>
                    <div class="grow">
                        <h3 class="text-base sm:text-lg font-semibold text-vscode-foreground">Keybindings</h3>
                        <p class="mt-1 text-justify text-vscode-descriptionForeground">Keybindings are shortcuts that map specific key combinations to commands, allowing users to quickly execute actions without needing to navigate menus or the Command Palette. Visual Studio Code uses a `keybindings.json` file to define these mappings, and extensions can contribute their own.</p>
                    </div>
                </div>

                <div class="flex gap-x-5">
                    <a href="#3">
                        <span class="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-vscode-commandCenter-border bg-vscode-commandCenter-background text-vscode-commandCenter-foreground shadow-sm mx-auto">
                            <i class="codicon codicon-settings" style="font-size: 2em"></i>
                        </span>
                    </a>
                    <div class="grow">
                        <h3 class="text-base sm:text-lg font-semibold text-vscode-foreground">Configuration</h3>
                        <p class="mt-1 text-justify text-vscode-descriptionForeground">Configuration allows users to customize the behavior of an extension through the VSCode settings interface. Extensions contribute settings via the configuration section in `package.json`, enabling users to modify options in the `settings.json` file or through the GUI settings editor.</p>
                    </div>
                </div>

                <div class="flex gap-x-5">
                    <a href="#4">
                        <span class="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-vscode-commandCenter-border bg-vscode-commandCenter-background text-vscode-commandCenter-foreground shadow-sm mx-auto">
                            <i class="codicon codicon-layout-sidebar-right" style="font-size: 2em"></i>
                        </span>
                    </a>
                    <div class="grow">
                        <h3 class="text-base sm:text-lg font-semibold text-vscode-foreground">Assistant</h3>
                        <p class="mt-1 text-justify text-vscode-descriptionForeground">The assistant is a core feature of VSCodeX, serving as a view within the extension that provides an interactive interface for users. Views in VSCode are UI components that integrate into the Activity Bar, Side Bar, or other areas, and they are defined in the `package.json` under the views section.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
