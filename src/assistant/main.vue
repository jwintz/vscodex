<script>
    import main_header from "./main_header.vue";
    import main_commands from "./main_commands.vue";
    import main_keybindings from "./main_keybindings.vue";
    import main_configuration from "./main_configuration.vue";
    import main_assistant from "./main_assistant.vue";
    import main_colophon from "./main_colophon.vue";

    const vscode = acquireVsCodeApi();

    export default {
        components: {
            main_header,
            main_commands,
            main_keybindings,
            main_configuration,
            main_assistant,
            main_colophon,
        },
        methods: {
            commandClicked(command) {
                vscode.postMessage({ type: "commandClicked", value: command });
            },
            insertClicked(configuration) {
                vscode.postMessage({ type: "insertClicked", value: configuration });
            },
        },
    };
</script>

<template>
    <main_header />
    <main_commands @commandClicked="(command) => commandClicked(command)" />
    <main_keybindings @commandClicked="(command) => commandClicked(command)" />
    <main_configuration @insertClicked="(configuration) => insertClicked(configuration)" />
    <main_assistant />
    <main_colophon />

    <script>
        export function initialize() {
            window.addEventListener("load", () => {
                const inputs = document.querySelectorAll(".dt-container thead input");

                inputs.forEach((input) => {
                    input.addEventListener("keydown", function (evt) {
                        if ((evt.metaKey || evt.ctrlKey) && evt.key === "a") this.select();
                    });
                });
            });
        }
    </script>
</template>

<style scoped></style>
