import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
// Enabling vite proxy:
// 1. Remove VITE_API_URL and VITE_API_PORT from .env.development,
// 2. Add the following block to UserConfig object below:
//     server: {
//       proxy: {
//         "/api": {
//           target: "http://localhost:8334",
//           changeOrigin: true,
//         },
//       },
//     },
export default defineConfig({
  plugins: [react()],
});
