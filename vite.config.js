import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.js",
      name: "SheetComponent",
      fileName: (format) => `index.${format === "es" ? "es" : "umd"}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@radix-ui/react-dialog",
        "lucide-react",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@radix-ui/react-dialog": "RadixDialog",
          "lucide-react": "LucideReact",
        },
      },
    },
  },
});
