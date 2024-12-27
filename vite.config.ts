import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    css: {
        postcss: "./postcss.config.js",
    },
    build: {
        outDir: "dist/assistant",
        manifest: true,
        rollupOptions: {
            input: resolve(__dirname, "src/assistant/main.ts"),
        },
    },
});
