// Importing env files here to validate on build
import "./src/env.mjs";
import "@acme/auth/env.mjs";

import i18nConfig from "./next-i18next.config.mjs";

/** @type {import("next").NextConfig} */
const config = {
  i18n: i18nConfig.i18n,
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@acme/trpc", "@acme/auth", "@acme/db", "@acme/lib"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;
