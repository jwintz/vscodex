<script>
    export default {
        methods: {
            toggleArea(area) {
                $("#assistant_area_primary").removeClass("text-vscode-button-foreground");
                $("#assistant_area_primary").removeClass("bg-vscode-button-background");
                $("#assistant_area_workbench").removeClass("text-vscode-button-foreground");
                $("#assistant_area_workbench").removeClass("bg-vscode-button-background");
                $("#assistant_area_auxiliary").removeClass("text-vscode-button-foreground");
                $("#assistant_area_auxiliary").removeClass("bg-vscode-button-background");
                $("#assistant_area_panels").removeClass("text-vscode-button-foreground");
                $("#assistant_area_panels").removeClass("bg-vscode-button-background");

                switch (area) {
                    case "primary":
                        $("#assistant_area_primary").addClass("text-vscode-button-foreground");
                        $("#assistant_area_primary").addClass("bg-vscode-button-background");
                        break;
                    case "workbench":
                        $("#assistant_area_workbench").addClass("text-vscode-button-foreground");
                        $("#assistant_area_workbench").addClass("bg-vscode-button-background");
                        break;
                    case "auxiliary":
                        $("#assistant_area_auxiliary").addClass("text-vscode-button-foreground");
                        $("#assistant_area_auxiliary").addClass("bg-vscode-button-background");
                        break;
                    case "panels":
                        $("#assistant_area_panels").addClass("text-vscode-button-foreground");
                        $("#assistant_area_panels").addClass("bg-vscode-button-background");
                        break;
                    default:
                        break;
                }
            },
        },
    };
</script>

<template>
    <p id="4" class="flex gap-2 mb-2">
        <i class="codicon codicon-layout-sidebar-right -mt-0.5" style="font-size: 1.5em"></i>
        Assistant
    </p>

    <figure class="ms-auto me-20 mb-3 overflow-x-clip relative z-[1] w-full h-auto border border-vscode-commandCenter-border shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] rounded">
        <div class="relative flex items-center w-full border-b border-vscode-commandCenter-border bg-vscode-editor-background rounded-t py-2 px-24">
            <div class="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
                <span class="size-2 bg-vscode-commandCenter-background border border-vscode-commandCenter-border rounded-full"></span>
                <span class="size-2 bg-vscode-commandCenter-background border border-vscode-commandCenter-border rounded-full"></span>
                <span class="size-2 bg-vscode-commandCenter-background border border-vscode-commandCenter-border rounded-full"></span>
            </div>
            <div class="flex justify-center items-center size-full min-w-[10rem] border border-vscode-commandCenter-border bg-vscode-commandCenter-background text-[.5rem] text-vscode-descriptionForeground rounded-sm sm:text-[.5rem]">VSCodeX</div>
        </div>

        <div
            data-hs-layout-splitter='{
            "horizontalSplitterTemplate": "<div><span class=\"absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 block w-4 h-6 flex justify-center items-center bg-vscode-sideBar-background border border-vscode-commandCenter-border text-vscode-commandCenter-border rounded-md cursor-col-resize hover:bg-vscode-editor-background\"><svg class=\"shrink-0 size-3.5\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"9\" cy=\"12\" r=\"1\"/><circle cx=\"9\" cy=\"5\" r=\"1\"/><circle cx=\"9\" cy=\"19\" r=\"1\"/><circle cx=\"15\" cy=\"12\" r=\"1\"/><circle cx=\"15\" cy=\"5\" r=\"1\"/><circle cx=\"15\" cy=\"19\" r=\"1\"/></svg></span></div>",
            "horizontalSplitterClasses": "relative flex border-s border-vscode-commandCenter-border",
            "verticalSplitterTemplate": "<div><span class=\"absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 block w-6 h-4 flex justify-center items-center bg-vscode-sideBar-background border border-vscode-commandCenter-border text-vscode-commandCenter-border rounded-md cursor-row-resize hover:bg-vscode-editor-background\"><svg class=\"shrink-0 size-3.5\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"9\" r=\"1\"/><circle cx=\"19\" cy=\"9\" r=\"1\"/><circle cx=\"5\" cy=\"9\" r=\"1\"/><circle cx=\"12\" cy=\"15\" r=\"1\"/><circle cx=\"19\" cy=\"15\" r=\"1\"/><circle cx=\"5\" cy=\"15\" r=\"1\"/></svg></span></div>",
            "verticalSplitterClasses": "relative flex border-t border-vscode-commandCenter-border"
          }'>
            <div class="flex flex-col h-64 text-vscode-descriptionForeground" data-hs-layout-splitter-vertical-group="">
                <div class="overflow-hidden" data-hs-layout-splitter-item="50.0" style="flex: 30 1 0px">
                    <div class="flex h-full" data-hs-layout-splitter-horizontal-group="">
                        <div id="assistant_area_primary" class="overflow-hidden h-full text-vscode-button-foreground bg-vscode-button-background" data-hs-layout-splitter-item="10.0" style="flex: 10 1 0px">
                            <div class="flex items-center justify-center h-full p-3">Primary</div>
                        </div>
                        <div id="assistant_area_workbench" class="overflow-hidden h-full" data-hs-layout-splitter-item="30.0" style="flex: 30 1 0px">
                            <div class="flex items-center justify-center h-full p-3">Workbench</div>
                        </div>
                        <div id="assistant_area_auxiliary" class="overflow-hidden h-full" data-hs-layout-splitter-item="10.0" style="flex: 10 1 0px">
                            <div class="flex items-center justify-center h-full p-3">Auxiliary</div>
                        </div>
                    </div>
                </div>
                <div id="assistant_area_panels" class="overflow-hidden" data-hs-layout-splitter-item="20 0.0" style="flex: 20 1 0px">
                    <div class="flex items-center justify-center h-full p-3">Panels</div>
                </div>
            </div>
        </div>
    </figure>

    <nav class="flex gap-x-1 rounded border border-vscode-commandCenter-border p-2 overflow-x-auto" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
        <button @click="toggleArea('primary')" type="button" class="hs-tab-active:bg-vscode-button-background hs-tab-active:text-vscode-button-foreground py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center gap-x-2 bg-transparent text-xs font-medium text-descriptionForeground hover:bg-vscode-commandCenter-background focus:outline-none rounded-lg disabled:opacity-50 disabled:pointer-events-none active" id="equal-width-elements-item-1" aria-selected="true" data-hs-tab="#equal-width-elements-1" aria-controls="equal-width-elements-1" role="tab">Primary</button>
        <button @click="toggleArea('workbench')" type="button" class="hs-tab-active:bg-vscode-button-background hs-tab-active:text-vscode-button-foreground py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center gap-x-2 bg-transparent text-xs font-medium text-descriptionForeground hover:bg-vscode-commandCenter-background focus:outline-none rounded-lg disabled:opacity-50 disabled:pointer-events-none" id="equal-width-elements-item-2" aria-selected="false" data-hs-tab="#equal-width-elements-2" aria-controls="equal-width-elements-2" role="tab">Workbench</button>
        <button @click="toggleArea('auxiliary')" type="button" class="hs-tab-active:bg-vscode-button-background hs-tab-active:text-vscode-button-foreground py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center gap-x-2 bg-transparent text-xs font-medium text-descriptionForeground hover:bg-vscode-commandCenter-background focus:outline-none rounded-lg disabled:opacity-50 disabled:pointer-events-none" id="equal-width-elements-item-3" aria-selected="false" data-hs-tab="#equal-width-elements-3" aria-controls="equal-width-elements-3" role="tab">Auxiliary</button>
        <button @click="toggleArea('panels')" type="button" class="hs-tab-active:bg-vscode-button-background hs-tab-active:text-vscode-button-foreground py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center gap-x-2 bg-transparent text-xs font-medium text-descriptionForeground hover:bg-vscode-commandCenter-background focus:outline-none rounded-lg disabled:opacity-50 disabled:pointer-events-none" id="equal-width-elements-item-4" aria-selected="false" data-hs-tab="#equal-width-elements-4" aria-controls="equal-width-elements-4" role="tab">Panels</button>
    </nav>

    <div class="mt-3 text-vscode-descriptionForeground">
        <div id="equal-width-elements-1" class="text-justify" role="tabpanel" aria-labelledby="equal-width-elements-item-1">
            <div class="hs-accordion-group space-y-3">
                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="primary-heading-zero">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-active-bordered-collapse-zero">
                        Keybindings
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-zero" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="primary-heading-zero">
                        <div class="w-full flex flex-col">
                            <div class="-m-1.5 overflow-x-auto">
                                <div class="p-1.5 min-w-full inline-block align-middle">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full">
                                            <tbody class="divide-y divide-vscode-commandCenter-border">
                                                <tr>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs font-medium text-vscode-foreground">Toggle</td>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs">
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">M</kbd>
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">C-space</kbd>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs font-medium text-vscode-foreground">Navigate in views</td>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs">
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">C-q</kbd>
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">C-Q</kbd>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="primary-heading-one">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-one">
                        Nature
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-one" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="primary-heading-one">
                        <div class="pb-4 px-5">
                            <ul class="list-none list-inside space-y-2">
                                <li>
                                    <span class="font-medium">Placement:</span>
                                    The primary sidebar is located on the left-hand side of the interface by default (though it can be moved to the right).
                                </li>
                                <li>
                                    <span class="font-medium">Dynamic Content:</span>
                                    Its content changes depending on the currently selected activity (e.g., Explorer, Source Control, Extensions).
                                </li>
                                <li>
                                    <span class="font-medium">Expandable and Collapsible:</span>
                                    The sidebar can be toggled on or off to maximize screen real estate for the editor area.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="primary-heading-two">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-two">
                        Intent
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="primary-heading-two">
                        <div class="pb-4 px-5">
                            <ul class="list-none list-inside space-y-2">
                                <li>
                                    <span class="font-medium">Navigation and Management:</span>
                                    <ul class="list-disc list-inside space-y-1 pl-4">
                                        <li>Provides quick access to important tools and resources, such as file navigation, version control, debugging, and extensions.</li>
                                        <li>Allows users to browse the project structure, search for files or content, and manage resources efficiently.</li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="font-medium">Customization and Extensibility:</span>
                                    <ul class="list-disc list-inside space-y-1 pl-4">
                                        <li>Users can install extensions to add new functionality to the sidebar, making it adaptable to individual workflows.</li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="font-medium">Context-Sensitive Workflow:</span>
                                    <ul class="list-disc list-inside space-y-1 pl-4">
                                        <li>Each activity-specific view in the sidebar, such as the Explorer or Source Control panel, offers tools and information relevant to the current task, reducing the need to switch contexts.</li>
                                    </ul>
                                </li>
                                <li>
                                    <span class="font-medium">Productivity Enhancement:</span>
                                    <ul class="list-disc list-inside space-y-1 pl-4">
                                        <li>By centralizing essential tools and commands, the sidebar minimizes the time spent searching for resources or commands in other menus.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="primary-heading-three">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-three">
                        Common Activity Views
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="primary-heading-three">
                        <div class="pb-4 px-5">
                            <ul class="list-none list-inside space-y-2">
                                <li>
                                    <span class="font-medium">Explorer:</span>
                                    File and folder navigation within the project workspace.
                                </li>
                                <li>
                                    <span class="font-medium">Search:</span>
                                    Powerful text and file search across the workspace.
                                </li>
                                <li>
                                    <span class="font-medium">Source Control:</span>
                                    Git or other version control system integration for tracking changes.
                                </li>
                                <li>
                                    <span class="font-medium">Run and Debug:</span>
                                    Tools for running and debugging code.
                                </li>
                                <li>
                                    <span class="font-medium">Extensions:</span>
                                    Management of VSCode extensions for added functionality.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="primary-heading-four">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-four">
                        Customisation Options
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-four" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="primary-heading-four">
                        <div class="pb-4 px-5">
                            <ul class="list-none list-inside space-y-2">
                                <li>Users can rearrange, hide, or display different sections of the sidebar.</li>
                                <li>Extensions can add new activity panels, enriching its capabilities.</li>
                                <li>Themes and settings can adjust its appearance to match user preferences.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="equal-width-elements-2" class="hidden text-justify" role="tabpanel" aria-labelledby="equal-width-elements-item-2">
            <div class="hs-accordion-group space-y-3">
                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="primary-heading-zero">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-active-bordered-collapse-zero">
                        Keybindings
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-zero" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="primary-heading-zero">
                        <div class="w-full flex flex-col">
                            <div class="-m-1.5 overflow-x-auto">
                                <div class="p-1.5 min-w-full inline-block align-middle">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full">
                                            <tbody class="divide-y divide-vscode-commandCenter-border">
                                                <tr>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs font-medium text-vscode-foreground">Close editor</td>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs">
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">C-x</kbd>
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">0</kbd>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs font-medium text-vscode-foreground">Close all other editors</td>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs">
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">C-x</kbd>
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">1</kbd>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs font-medium text-vscode-foreground">Split editor vertically</td>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs">
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">C-x</kbd>
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">2</kbd>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs font-medium text-vscode-foreground">Split editor horizontally</td>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs">
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">C-x</kbd>
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">3</kbd>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs font-medium text-vscode-foreground">Navigate in views</td>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs">
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">C-x</kbd>
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">b</kbd>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="workspace-heading-one">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-one">
                        Nature
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-one" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="workspace-heading-one">
                        <div class="pb-4 px-5">
                            <ul class="list-disc list-inside space-y-2">
                                <li>
                                    <span class="font-medium">Central Area:</span>
                                    The workspace area occupies the central part of the VSCode interface and is the primary space for editing files.
                                </li>
                                <li>
                                    <span class="font-medium">Multiple Editors:</span>
                                    It supports multiple open files in a tabbed or split-view format, enabling side-by-side editing.
                                </li>
                                <li>
                                    <span class="font-medium">Customizable Layout:</span>
                                    The workspace area layout is highly flexible, allowing users to split editors horizontally or vertically as needed.
                                </li>
                                <li>
                                    <span class="font-medium">Integration with Tools:</span>
                                    It seamlessly integrates with debugging tools, terminals, and extensions, providing a unified workspace.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="workspace-heading-two">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-two">
                        Intent
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="workspace-heading-two">
                        <div class="pb-4 px-5">
                            <ul class="list-disc list-inside space-y-2">
                                <li>
                                    <span class="font-medium">Focus on Code:</span>
                                    Designed to prioritize code editing with a clean, distraction-free environment.
                                </li>
                                <li>
                                    <span class="font-medium">Multitasking:</span>
                                    Supports working on multiple files or projects simultaneously through tabs, split views, and groupings.
                                </li>
                                <li>
                                    <span class="font-medium">Enhanced Productivity:</span>
                                    Allows users to utilize keyboard shortcuts, extensions, and integrated tools directly within the workspace for faster development.
                                </li>
                                <li>
                                    <span class="font-medium">Real-Time Feedback:</span>
                                    Works closely with the terminal, problems panel, and debug console to provide instant feedback and error diagnostics.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="workspace-heading-three">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-three">
                        Key Features
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="workspace-heading-three">
                        <div class="pb-4 px-5">
                            <ul class="list-disc list-inside space-y-2">
                                <li>
                                    <span class="font-medium">Syntax Highlighting:</span>
                                    Enhanced readability with language-specific formatting.
                                </li>
                                <li>
                                    <span class="font-medium">Intellisense:</span>
                                    Code completion, suggestions, and parameter hints.
                                </li>
                                <li>
                                    <span class="font-medium">Integrated Terminal:</span>
                                    Allows running commands and scripts without leaving the workspace.
                                </li>
                                <li>
                                    <span class="font-medium">Debugging:</span>
                                    Direct integration for setting breakpoints, inspecting variables, and running code.
                                </li>
                                <li>
                                    <span class="font-medium">Custom Themes:</span>
                                    Users can modify the workspace appearance to suit their preferences.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="equal-width-elements-3" class="hidden text-justify" role="tabpanel" aria-labelledby="equal-width-elements-item-3">
            <div class="hs-accordion-group space-y-3">
                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="auxiliary-heading-zero">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-active-bordered-collapse-zero">
                        Keybindings
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-zero" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="auxiliary-heading-zero">
                        <div class="w-full flex flex-col">
                            <div class="-m-1.5 overflow-x-auto">
                                <div class="p-1.5 min-w-full inline-block align-middle">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full">
                                            <tbody class="divide-y divide-vscode-commandCenter-border">
                                                <tr>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs font-medium text-vscode-foreground">Toggle</td>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs">
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">M</kbd>
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">C-A-space</kbd>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs font-medium text-vscode-foreground">Navigate in views</td>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs">
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">C-q</kbd>
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">C-Q</kbd>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="auxiliary-heading-one">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-one">
                        Nature
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-one" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="auxiliary-heading-one">
                        <div class="pb-4 px-5">
                            <ul class="list-disc list-inside space-y-2">
                                <li>
                                    <span class="font-medium">Placement:</span>
                                    The auxiliary sidebar is positioned opposite the primary sidebar, typically on the right-hand side of the editor interface.
                                </li>
                                <li>
                                    <span class="font-medium">Supplementary Role:</span>
                                    It complements the primary sidebar by hosting additional views and tools relevant to the current workflow.
                                </li>
                                <li>
                                    <span class="font-medium">Contextual Content:</span>
                                    The content in the auxiliary sidebar is often context-sensitive, such as outline views, timeline, or extensions providing specialized panels.
                                </li>
                                <li>
                                    <span class="font-medium">Adjustable Visibility:</span>
                                    The auxiliary sidebar can be toggled on or off to maximize screen space as needed.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="auxiliary-heading-two">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-two">
                        Intent
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="auxiliary-heading-two">
                        <div class="pb-4 px-5">
                            <ul class="list-disc list-inside space-y-2">
                                <li>
                                    <span class="font-medium">Enhanced Productivity:</span>
                                    Provides quick access to additional tools without disrupting the primary workflow.
                                </li>
                                <li>
                                    <span class="font-medium">Focus on Context:</span>
                                    Tailored to show context-specific tools and resources, such as an outline of the current file or a timeline of recent changes.
                                </li>
                                <li>
                                    <span class="font-medium">Seamless Integration:</span>
                                    Works alongside the primary sidebar and workspace area, creating a unified environment for developers.
                                </li>
                                <li>
                                    <span class="font-medium">Customization:</span>
                                    Supports extensions and custom views, allowing users to adapt it to their needs.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="auxiliary-heading-three">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-three">
                        Key Features
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="auxiliary-heading-three">
                        <div class="pb-4 px-5">
                            <ul class="list-disc list-inside space-y-2">
                                <li>
                                    <span class="font-medium">Outline View:</span>
                                    Displays the structure of the current file, such as functions, classes, and headings.
                                </li>
                                <li>
                                    <span class="font-medium">Timeline:</span>
                                    Tracks recent changes to files in the workspace.
                                </li>
                                <li>
                                    <span class="font-medium">Extension Panels:</span>
                                    Hosts custom views added by extensions, such as database explorers or project-specific tools.
                                </li>
                                <li>
                                    <span class="font-medium">Resizable Layout:</span>
                                    Allows users to adjust the width of the auxiliary sidebar to suit their workflow.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="equal-width-elements-4" class="hidden text-justify" role="tabpanel" aria-labelledby="equal-width-elements-item-4">
            <div class="hs-accordion-group space-y-3">
                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="panels-heading-zero">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-active-bordered-collapse-zero">
                        Keybindings
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-zero" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="panels-heading-zero">
                        <div class="w-full flex flex-col">
                            <div class="-m-1.5 overflow-x-auto">
                                <div class="p-1.5 min-w-full inline-block align-middle">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full">
                                            <tbody class="divide-y divide-vscode-commandCenter-border">
                                                <tr>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs font-medium text-vscode-foreground">Toggle</td>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs">
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">C-x</kbd>
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">j</kbd>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs font-medium text-vscode-foreground">Navigate in views</td>
                                                    <td class="px-5 py-3 whitespace-nowrap text-xs">
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">C-q</kbd>
                                                        <kbd class="mr-1 text-xs font-semibold bg-vscode-commandCenter-background border border-vscode-commandCenter-border font-mono text-foreground rounded-md px-2 py-1">C-Q</kbd>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="panels-heading-one">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-one">
                        Nature
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-one" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="panels-heading-one">
                        <div class="pb-4 px-5">
                            <ul class="list-disc list-inside space-y-2">
                                <li>
                                    <span class="font-medium">Location:</span>
                                    The panels area is located at the bottom of the VSCode interface by default, though it can be moved to the right side or hidden.
                                </li>
                                <li>
                                    <span class="font-medium">Multi-Purpose:</span>
                                    It serves as a workspace for tools like the terminal, debug console, problems panel, and output view.
                                </li>
                                <li>
                                    <span class="font-medium">Dynamic Interaction:</span>
                                    Content within the panels changes based on the developer’s tasks, providing relevant information and feedback.
                                </li>
                                <li>
                                    <span class="font-medium">Resizable and Collapsible:</span>
                                    The panels area can be resized to fit the user's workflow and collapsed when not needed.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="panels-heading-two">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-two">
                        Intent
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="panels-heading-two">
                        <div class="pb-4 px-5">
                            <ul class="list-disc list-inside space-y-2">
                                <li>
                                    <span class="font-medium">Task Management:</span>
                                    Provides essential tools for debugging, viewing errors, and monitoring application output.
                                </li>
                                <li>
                                    <span class="font-medium">Streamlined Workflow:</span>
                                    Ensures developers can access debugging, terminal commands, and error tracking in a single location without disrupting code editing.
                                </li>
                                <li>
                                    <span class="font-medium">Real-Time Feedback:</span>
                                    Displays live updates on issues, output logs, and debugging status to guide the development process.
                                </li>
                                <li>
                                    <span class="font-medium">Customization:</span>
                                    Users can configure the panel layout and toggle specific views to fit their needs.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="hs-accordion hs-accordion-active:bg-vscode-background rounded border border-vscode-commandCenter-border" id="panels-heading-three">
                    <button class="hs-accordion-toggle hs-accordion-active:text-vscode-button-foreground inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-vscode-foreground py-4 px-5 hover:text-vscode-button-foreground disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-three">
                        Key Features
                        <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                        </svg>
                    </button>
                    <div id="hs-basic-active-bordered-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="panels-heading-three">
                        <div class="pb-4 px-5">
                            <ul class="list-disc list-inside space-y-2">
                                <li>
                                    <span class="font-medium">Integrated Terminal:</span>
                                    Execute shell commands directly within the editor.
                                </li>
                                <li>
                                    <span class="font-medium">Debug Console:</span>
                                    Inspect variables, evaluate expressions, and monitor debugging output.
                                </li>
                                <li>
                                    <span class="font-medium">Problems Panel:</span>
                                    Displays errors, warnings, and other issues detected in the workspace.
                                </li>
                                <li>
                                    <span class="font-medium">Output View:</span>
                                    Shows logs and output from various tasks and extensions.
                                </li>
                                <li>
                                    <span class="font-medium">Flexible Positioning:</span>
                                    Panels can be repositioned or hidden for a cleaner workspace.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
