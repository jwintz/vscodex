<script lang="ts">
    import main_header from "./main_header.vue";
    import main_commands from "./main_commands.vue";
    import main_keybindings from "./main_keybindings.vue";
    import main_configuration from "./main_configuration.vue";
    import main_assistant from "./main_assistant.vue";
    import main_colophon from "./main_colophon.vue";

    export default {
        components: {
            main_header,
            main_commands,
            main_keybindings,
            main_configuration,
            main_assistant,
            main_colophon,
        },
    };
</script>

<template>
    <main_header />
    <main_commands />
    <main_keybindings />
    <main_configuration />
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
