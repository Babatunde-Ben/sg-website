import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    environmentMatchGlobs: [
      ["**/__tests__/api/**", "node"],
      ["**/__tests__/lib/**", "node"],
    ],
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["lib/**", "app/api/**", "hooks/**"],
      exclude: ["lib/sanity/**"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
