import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// GitHub Pages uses a subpath like /<repo>/.
// Configure with VITE_BASE_PATH (e.g. "/peladaManager/").
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const rawBase = env.VITE_BASE_PATH || "/peladaManager/";
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

  return {
    base,
    plugins: [react()],
    build: {
      outDir: "dist",
    },
  };
});
