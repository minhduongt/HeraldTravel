import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  plugins: [
    react({
      // Add this line
      include: "**/*.jsx",
    }),
  ],
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
});
