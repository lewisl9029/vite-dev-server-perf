import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
console.log("process.env.USE_HTTPS", process.env.USE_HTTPS);

export default defineConfig({
  server: {
    https: !!process.env.USE_HTTPS,
    warmup: {
      clientFiles: ["./src/**/*.ts"],
    },
  },
  plugins: [
    {
      name: "artificial-slowdown",
      transform(code) {
        // syncDelay(1);
        // await asyncDelay(2)
        return code;
      },
    },
    ...(process.env.USE_HTTPS ? [basicSsl()] : []),
  ],
});

function syncDelay(ms: number) {
  let s = performance.now();
  let i = 0;
  while (performance.now() - s < ms) {
    i++;
  }
  return i;
}

function asyncDelay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
