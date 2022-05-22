import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_APP");
  const envWithProcessPrefix = Object.entries(env).reduce((prev, [key, val]) => {
    return {
      ...prev,
      ["process.env." + key]: `"${val}"`,
    };
  }, {});

  envWithProcessPrefix["process.env.NODE_ENV"] = `'${mode}'`;

  return {
    plugins: [react()],
    define: envWithProcessPrefix,
  }
})
