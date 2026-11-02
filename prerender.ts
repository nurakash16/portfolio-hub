import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import React from "react";
import { renderToString } from "react-dom/server";

async function main() {
  console.log("Starting static pre-rendering...");

  // 1. Build SSR bundle of Home page using Vite
  execSync("npx vite build --ssr src/pages/home.tsx --outDir ../dist-ssr", {
    stdio: "inherit"
  });

  // 2. Set environment location for router compatibility
  // @ts-ignore
  global.location = { pathname: "/" };

  // 3. Import compiled SSR component and render to string
  const ssrModulePath = path.resolve(process.cwd(), "dist-ssr/home.js");
  const mod = await import(`file://${ssrModulePath.replace(/\\/g, "/")}`);
  const Component = mod.default || mod;

  const appHtml = renderToString(React.createElement(Component));

  // 4. Inject into dist/index.html
  const distHtmlPath = path.resolve(process.cwd(), "dist/index.html");
  if (!fs.existsSync(distHtmlPath)) {
    throw new Error("dist/index.html not found. Please ensure vite build runs first.");
  }

  const htmlTemplate = fs.readFileSync(distHtmlPath, "utf-8");
  const finalHtml = htmlTemplate.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  fs.writeFileSync(distHtmlPath, finalHtml, "utf-8");
  console.log(`Pre-render complete! Injected ${appHtml.length} characters of HTML into dist/index.html.`);

  // 5. Clean up temporary dist-ssr directory
  const ssrDir = path.resolve(process.cwd(), "dist-ssr");
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
  }
}

main().catch((err) => {
  console.error("Pre-rendering error:", err);
  process.exit(1);
});
