import type { Config } from "tailwindcss";

import baseConfig from "@acme/tailwind-config";

export default {
  content: ["./src/**/*.tsx", "./src/components/**/*.tsx"],
  presets: [baseConfig],
} satisfies Config;
