<script>
    export default {
        methods: {
            toggleArea(area) {
                console.info("Toggling area", area);

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

    <div class="mt-3">
        <div id="equal-width-elements-1" role="tabpanel" aria-labelledby="equal-width-elements-item-1">
            <p class="text-vscode-descriptionForeground">This is the first item's tab body.</p>
        </div>
        <div id="equal-width-elements-2" class="hidden" role="tabpanel" aria-labelledby="equal-width-elements-item-2">
            <p class="text-vscode-descriptionForeground">This is the second item's tab body.</p>
        </div>
        <div id="equal-width-elements-3" class="hidden" role="tabpanel" aria-labelledby="equal-width-elements-item-3">
            <p class="text-vscode-descriptionForeground">This is the third item's tab body.</p>
        </div>
        <div id="equal-width-elements-4" class="hidden" role="tabpanel" aria-labelledby="equal-width-elements-item-4">
            <p class="text-vscode-descriptionForeground">This is the fourth item's tab body.</p>
        </div>
    </div>
</template>

<style scoped></style>
