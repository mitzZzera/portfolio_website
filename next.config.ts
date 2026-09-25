import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "portfolio_website";
const assetPrefix = isGithubPages ? `/${repositoryName}/` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  assetPrefix,
  images: { unoptimized: true },
};

export default nextConfig;
