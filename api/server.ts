import { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import { registerRoutes } from "../server/routes";
import { serveStatic } from "../server/vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
  // Register your routes
  await registerRoutes(app);

  // Serve static frontend
  serveStatic(app);
})();

export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
