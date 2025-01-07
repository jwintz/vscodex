<script>
    export default {
        data() {
            return {
                codexKeybindings: [],
                codexKeybindingsLeaded: [],
                emacsKeybindings: [],
            };
        },
        emits: ["commandClicked"],
        mounted() {
            if (window.codexPackage && window.emacsPackage) {
                this.codexKeybindings = window.codexPackage.contributes.keybindings;
                this.codexKeybindingsLeaded = window.codexPackage.contributes.configuration.properties["codex.leader.keybindings"].default;
                this.emacsKeybindings = window.emacsPackage.contributes.keybindings;
            } else {
                const checkInterval = setInterval(() => {
                    if (window.codexPackage && emacsPackage) {
                        this.codexKeybindings = window.codexPackage.contributes.keybindings;
                        this.codexKeybindingsLeaded = window.codexPackage.contributes.configuration.properties["codex.leader.keybindings"].default;
                        this.emacsKeybindings = window.emacsPackage.contributes.keybindings;

                        clearInterval(checkInterval);
                    }
                }, 100);
            }
        },
    };
</script>

<template>
    <p id="2" class="flex gap-2 mb-2">
        <i class="codicon codicon-record-keys" style="font-size: 1.5em"></i>
        Keybindings
    </p>

    <div class="max-w-[85rem] bg-vscode-background rounded mb-5 shadow-sm border border-vscode-commandCenter-border">
        <div class="flex flex-col">
            <div
                data-hs-datatable='{
                  "pageLength": 10,
                  "pagingOptions": {
                    "pageBtnClasses": "min-w-[40px] flex justify-center items-center text-vscode-descriptionForeground hover:bg-vscode-commandCenter-background focus:outline-none focus:bg-vscode-commandCenter-background py-2.5 text-xs rounded-full disabled:opacity-50 disabled:pointer-events-none"
                  },
                  "selecting": true,
                  "language": {
                    "zeroRecords": "<div class=\"py-10 px-5 flex flex-col justify-center items-center text-center\"><svg class=\"shrink-0 size-6 text-vscode-descriptionForeground\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/></svg><div class=\"max-w-sm mx-auto\"><p class=\"mt-2 text-sm text-vscode-descriptionForeground\">No search results</p></div></div>"
                  }
                }'>
                <div class="px-3 py-3">
                    <div class="relative max-w-full">
                        <label for="hs-table-input-search" class="sr-only">Search</label>
                        <input type="text" name="hs-table-search" id="hs-table-input-search" class="py-2 px-3 ps-9 block w-full bg-vscode-sideBar-background border-vscode-commandCenter-border shadow-sm rounded text-sm text-vscode-foreground placeholder-vscode-descriptionForeground focus:z-10 focus:border-vscode-inputOption-activeBorder focus:ring-vscode-inputOption-active-border disabled:opacity-50 disabled:pointer-events-none" placeholder="Search for keybindings" data-hs-datatable-search="" />
                        <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                            <svg class="size-4 text-vscode-descriptionForeground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <div class="min-w-full inline-block align-middle">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="border-y border-vscode-commandCenter-border">
                                    <tr>
                                        <th scope="col" class="py-1 group text-start font-normal focus:outline-none">
                                            <div class="p-3 inline-flex items-center uppercase border border-transparent text-xs font-medium text-vscode-descriptionForeground">
                                                Key
                                                <svg class="size-3.5 ms-1 -me-0.5 text-vscode-descriptionForeground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path class="hs-datatable-ordering-desc:text-vscode-textLink-foreground dark:hs-datatable-ordering-desc:text-vscode-textLink-foreground" d="m7 15 5 5 5-5"></path>
                                                    <path class="hs-datatable-ordering-asc:text-vscode-textLink-foreground dark:hs-datatable-ordering-asc:text-vscode-textLink-foreground" d="m7 9 5-5 5 5"></path>
                                                </svg>
                                            </div>
                                        </th>

                                        <th scope="col" class="py-1 group text-start font-normal focus:outline-none">
                                            <div class="p-3 inline-flex items-center uppercase border border-transparent text-xs font-medium text-vscode-descriptionForeground">
                                                Command
                                                <svg class="size-3.5 ms-1 -me-0.5 text-vscode-descriptionForeground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path class="hs-datatable-ordering-desc:text-vscode-textLink-foreground dark:hs-datatable-ordering-desc:text-vscode-textLink-foreground" d="m7 15 5 5 5-5"></path>
                                                    <path class="hs-datatable-ordering-asc:text-vscode-textLink-foreground dark:hs-datatable-ordering-asc:text-vscode-textLink-foreground" d="m7 9 5-5 5 5"></path>
                                                </svg>
                                            </div>
                                        </th>

                                        <th scope="col" class="py-1 group text-start font-normal focus:outline-none">
                                            <div class="p-3 inline-flex items-center uppercase border border-transparent text-xs font-medium text-vscode-descriptionForeground">
                                                When
                                                <svg class="size-3.5 ms-1 -me-0.5 text-vscode-descriptionForeground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path class="hs-datatable-ordering-desc:text-vscode-textLink-foreground dark:hs-datatable-ordering-desc:text-vscode-textLink-foreground" d="m7 15 5 5 5-5"></path>
                                                    <path class="hs-datatable-ordering-asc:text-vscode-textLink-foreground dark:hs-datatable-ordering-asc:text-vscode-textLink-foreground" d="m7 9 5-5 5 5"></path>
                                                </svg>
                                            </div>
                                        </th>

                                        <th scope="col" class="py-1 group text-start font-normal focus:outline-none">
                                            <div class="p-3 inline-flex items-center uppercase border border-transparent text-xs font-medium text-vscode-descriptionForeground">
                                                Category
                                                <svg class="size-3.5 ms-1 -me-0.5 text-vscode-descriptionForeground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path class="hs-datatable-ordering-desc:text-vscode-textLink-foreground dark:hs-datatable-ordering-desc:text-vscode-textLink-foreground" d="m7 15 5 5 5-5"></path>
                                                    <path class="hs-datatable-ordering-asc:text-vscode-textLink-foreground dark:hs-datatable-ordering-asc:text-vscode-textLink-foreground" d="m7 9 5-5 5 5"></path>
                                                </svg>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-vscode-commandCenter-border">
                                    <tr v-for="keybinding in codexKeybindings" class="odd:bg-vscode-editor-background even:bg-vscode-sideBar-background">
                                        <td class="p-3 whitespace-nowrap text-xs text-vscode-foreground">
                                            <span v-for="key in keybinding.key.split(' ')" :key="key" class="mr-1">
                                                <kbd class="min-h-[30px] min-w-[30px] inline-flex justify-center items-center p-1.5 bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-xs text-foreground rounded-md" style="font-size: 0.65rem; line-height: 0.75rem">
                                                    {{ key }}
                                                </kbd>
                                            </span>
                                        </td>
                                        <td class="p-3 whitespace-nowrap font-mono text-xs text-vscode-foreground" style="font-size: 0.65rem; line-height: 0.75rem" @click="this.$emit('commandClicked', keybinding.command)">
                                            <a>{{ keybinding.command }}</a>
                                        </td>
                                        <td class="p-3 whitespace-nowrap font-mono text-xs text-vscode-foreground" style="font-size: 0.65rem; line-height: 0.75rem">{{ keybinding.when }}</td>
                                        <td class="p-3 whitespace-nowrap font-mono text-xs text-vscode-foreground" style="font-size: 0.65rem; line-height: 0.75rem">Codex</td>
                                    </tr>
                                    <tr v-for="keybinding in codexKeybindingsLeaded" class="odd:bg-vscode-editor-background even:bg-vscode-sideBar-background">
                                        <td class="p-3 whitespace-nowrap text-xs text-vscode-foreground">
                                            <span class="mr-1">
                                                <kbd class="min-h-[30px] min-w-[30px] inline-flex justify-center items-center p-1.5 bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-xs text-foreground rounded-md" style="font-size: 0.65rem; line-height: 0.75rem">C-c</kbd>
                                            </span>
                                            <span v-for="key in keybinding.keySequence" :key="key" class="mr-1">
                                                <kbd class="min-h-[30px] min-w-[30px] inline-flex justify-center items-center p-1.5 bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-xs text-foreground rounded-md" style="font-size: 0.65rem; line-height: 0.75rem">
                                                    {{ key }}
                                                </kbd>
                                            </span>
                                        </td>
                                        <td v-if="keybinding.label" class="p-3 whitespace-nowrap font-mono text-xs text-vscode-foreground" style="font-size: 0.65rem; line-height: 0.75rem" @click="this.$emit('commandClicked', keybinding.command)">
                                            <a>{{ keybinding.label }}</a>
                                        </td>
                                        <td v-else class="p-3 whitespace-nowrap font-mono text-xs text-vscode-foreground" style="font-size: 0.65rem; line-height: 0.75rem" @click="this.$emit('commandClicked', keybinding.command)">
                                            <a>{{ keybinding.command }}</a>
                                        </td>
                                        <td class="p-3 whitespace-nowrap font-mono text-xs text-vscode-foreground" style="font-size: 0.65rem; line-height: 0.75rem">{{ keybinding.when }}</td>
                                        <td class="p-3 whitespace-nowrap font-mono text-xs text-vscode-foreground" style="font-size: 0.65rem; line-height: 0.75rem">Codex</td>
                                    </tr>
                                    <tr v-for="keybinding in emacsKeybindings" class="odd:bg-vscode-editor-background even:bg-vscode-sideBar-background">
                                        <td class="p-3 whitespace-nowrap text-xs text-vscode-foreground">
                                            <span v-for="key in keybinding.key.split(' ')" :key="key" class="mr-1">
                                                <kbd class="min-h-[30px] min-w-[30px] inline-flex justify-center items-center p-1.5 bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-xs text-foreground rounded-md" style="font-size: 0.65rem; line-height: 0.75rem">
                                                    {{ key }}
                                                </kbd>
                                            </span>
                                        </td>
                                        <td class="p-3 whitespace-nowrap font-mono text-xs text-vscode-foreground" style="font-size: 0.65rem; line-height: 0.75rem" @click="this.$emit('commandClicked', keybinding.command)">
                                            <a>{{ keybinding.command }}</a>
                                        </td>
                                        <td class="p-3 whitespace-nowrap font-mono text-xs text-vscode-foreground" style="font-size: 0.65rem; line-height: 0.75rem">{{ keybinding.when }}</td>
                                        <td class="p-3 whitespace-nowrap font-mono text-xs text-vscode-foreground" style="font-size: 0.65rem; line-height: 0.75rem">Awesome Emacs Keybindings</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="py-3 hidden border-t border-vscode-commandCenter-border" data-hs-datatable-paging="">
                    <nav class="flex items-center space-x-1">
                        <button type="button" class="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-vscode-descriptionForeground hover:bg-vscode-commandCenter-background focus:outline-none focus:bg-vscode-sideBar-background disabled:opacity-50 disabled:pointer-events-none" data-hs-datatable-paging-prev="">
                            <span aria-hidden="true">«</span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <div class="flex items-center space-x-1 text-vscode-descriptionForeground [&>.active]:bg-vscode-commandCenter-background" data-hs-datatable-paging-pages=""></div>
                        <button type="button" class="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-vscode-descriptionForeground hover:bg-vscode-commandCenter-background focus:outline-none focus:bg-vscode-sideBar-background disabled:opacity-50 disabled:pointer-events-none" data-hs-datatable-paging-next="">
                            <span class="sr-only">Next</span>
                            <span aria-hidden="true">»</span>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
