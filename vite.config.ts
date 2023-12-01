import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  server: {
    // https: true,
    // warmup: {
    //   clientFiles: ['./src/**.ts']
    // }
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
    // basicSsl(),
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
