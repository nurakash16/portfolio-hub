// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  projects;
  experiences;
  achievements;
  currentUserId;
  currentProjectId;
  currentExperienceId;
  currentAchievementId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.projects = /* @__PURE__ */ new Map();
    this.experiences = /* @__PURE__ */ new Map();
    this.achievements = /* @__PURE__ */ new Map();
    this.currentUserId = 1;
    this.currentProjectId = 1;
    this.currentExperienceId = 1;
    this.currentAchievementId = 1;
    this.initializePortfolioData();
  }
  initializePortfolioData() {
    const sampleProjects = [
      {
        title: "16-bit Single-cycle MIPS Processor (PNR)",
        description: "VLSI project implementing a complete 16-bit MIPS processor with place and route design.",
        technologies: ["VLSI", "Verilog", "Cadence", "Digital Design"],
        category: "vlsi",
        status: "completed",
        year: "2022",
        imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "4-bit Ripple Carry Adder",
        description: "Complete schematic and layout design of a 4-bit ripple carry adder circuit.",
        technologies: ["VLSI", "Cadence Virtuoso", "Layout Design"],
        category: "vlsi",
        status: "completed",
        year: "2022",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Low-power Flip-flop Design",
        description: "Innovative low-power flip-flop design using static latch and dynamic pulse generator.",
        technologies: ["VLSI", "Power Electronics", "Circuit Design"],
        category: "vlsi",
        status: "completed",
        year: "2022",
        imageUrl: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Wireless DC Motor Speed Control",
        description: "IR remote controlled DC motor speed control system using 555 timer.",
        technologies: ["Arduino", "IR Remote", "555 Timer", "Motor Control"],
        category: "control_systems",
        status: "completed",
        year: "2021",
        imageUrl: "https://images.unsplash.com/photo-1581092918484-8313de5ec97b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "AC Fan Speed Control",
        description: "Arduino-based AC fan speed control system using TRIAC for phase control.",
        technologies: ["Arduino", "TRIAC", "AC Control", "Power Electronics"],
        category: "power_systems",
        status: "completed",
        year: "2021",
        imageUrl: "https://images.unsplash.com/photo-1581092786450-ced7eb4b3fef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Supporting System for Blind People",
        description: "Assistive technology project to help visually impaired individuals navigate safely.",
        technologies: ["Arduino", "Sensors", "Audio Output", "Embedded Systems"],
        category: "embedded",
        status: "completed",
        year: "2021",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Solar-dependent Traffic Lamp",
        description: "Smart traffic light system using Arduino and LDR for solar-dependent operation.",
        technologies: ["Arduino", "LDR", "Solar Power", "Smart Systems"],
        category: "embedded",
        status: "completed",
        year: "2020",
        imageUrl: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
      },
      {
        title: "Graphene-based Photonic Crystal Biosensor",
        description: "Research on high-performance biosensor design for waterborne bacteria detection using one-dimensional photonic crystal.",
        technologies: ["Photonic Crystals", "Graphene", "MATLAB", "Optical Simulation"],
        category: "research",
        status: "completed",
        year: "2023",
        imageUrl: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
      }
    ];
    const sampleExperiences = [
      {
        title: "IC Layout Design Engineer",
        company: "Sincos Group",
        duration: "March 2023 - Present",
        description: "Proficient in Analog Layout design methodologies, ensuring optimal performance and adherence to design specifications. Expertise in industry-standard EDA tools such as Cadence Virtuoso and Cadence Genus. Strong understanding of layout verification tools and methodologies to ensure design correctness.",
        technologies: ["Cadence Virtuoso", "Cadence Genus", "DRC", "LVS", "Parasitic Extraction", "BGR", "PLL"],
        type: "work",
        current: true
      }
    ];
    const sampleAchievements = [
      {
        title: "Runners up of VLSI Hackathon",
        description: "MindSparks 2022, powered by Neural Semiconductor",
        year: "2022",
        category: "competition"
      },
      {
        title: "Top 15 finalists of VLSI Day 2022 Design Competition",
        description: "Design Competition at UIU",
        year: "2022",
        category: "competition"
      },
      {
        title: "Final Year Design Project Poster Exhibition (FYDP)",
        description: "Participated and secured among the top 10 projects",
        year: "2023",
        category: "exhibition"
      }
    ];
    sampleProjects.forEach((project) => {
      this.createProject(project);
    });
    sampleExperiences.forEach((experience) => {
      this.createExperience(experience);
    });
    sampleAchievements.forEach((achievement) => {
      this.createAchievement(achievement);
    });
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async getAllProjects() {
    return Array.from(this.projects.values()).sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  }
  async getProjectById(id) {
    return this.projects.get(id);
  }
  async getProjectsByCategory(category) {
    return Array.from(this.projects.values()).filter((project) => project.category === category).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  }
  async searchProjects(query) {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.projects.values()).filter(
      (project) => project.title.toLowerCase().includes(lowercaseQuery) || project.description.toLowerCase().includes(lowercaseQuery) || project.technologies.some((tech) => tech.toLowerCase().includes(lowercaseQuery))
    ).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  }
  async createProject(insertProject) {
    const id = this.currentProjectId++;
    const project = {
      ...insertProject,
      id,
      imageUrl: insertProject.imageUrl || null,
      githubUrl: insertProject.githubUrl || null,
      demoUrl: insertProject.demoUrl || null,
      year: insertProject.year || null,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.projects.set(id, project);
    return project;
  }
  async getAllExperiences() {
    return Array.from(this.experiences.values()).sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  }
  async getExperienceById(id) {
    return this.experiences.get(id);
  }
  async createExperience(insertExperience) {
    const id = this.currentExperienceId++;
    const experience = {
      ...insertExperience,
      id,
      current: insertExperience.current || false,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.experiences.set(id, experience);
    return experience;
  }
  async getAllAchievements() {
    return Array.from(this.achievements.values()).sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  }
  async getAchievementById(id) {
    return this.achievements.get(id);
  }
  async createAchievement(insertAchievement) {
    const id = this.currentAchievementId++;
    const achievement = {
      ...insertAchievement,
      id,
      year: insertAchievement.year || null,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.achievements.set(id, achievement);
    return achievement;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  technologies: text("technologies").array().notNull(),
  category: text("category").notNull(),
  // 'vlsi', 'power_systems', 'control_systems', 'embedded', 'research'
  status: text("status").notNull(),
  // 'completed', 'in_progress', 'research'
  year: text("year"),
  imageUrl: text("image_url"),
  githubUrl: text("github_url"),
  demoUrl: text("demo_url"),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});
var experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  duration: text("duration").notNull(),
  description: text("description").notNull(),
  technologies: text("technologies").array().notNull(),
  type: text("type").notNull(),
  // 'work', 'internship', 'volunteer'
  current: boolean("current").default(false),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});
var achievements = pgTable("achievements", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  year: text("year"),
  category: text("category").notNull(),
  // 'competition', 'exhibition', 'recognition'
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  updatedAt: true
});
var insertExperienceSchema = createInsertSchema(experiences).omit({
  id: true,
  updatedAt: true
});
var insertAchievementSchema = createInsertSchema(achievements).omit({
  id: true,
  updatedAt: true
});

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/projects", async (req, res) => {
    try {
      const { category, search } = req.query;
      let projects2;
      if (search) {
        projects2 = await storage.searchProjects(search);
      } else if (category && category !== "all") {
        projects2 = await storage.getProjectsByCategory(category);
      } else {
        projects2 = await storage.getAllProjects();
      }
      res.json(projects2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });
  app2.get("/api/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const project = await storage.getProjectById(id);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch project" });
    }
  });
  app2.post("/api/projects", async (req, res) => {
    try {
      const validatedData = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(validatedData);
      res.status(201).json(project);
    } catch (error) {
      res.status(400).json({ message: "Invalid project data" });
    }
  });
  app2.get("/api/experiences", async (req, res) => {
    try {
      const experiences2 = await storage.getAllExperiences();
      res.json(experiences2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch experiences" });
    }
  });
  app2.get("/api/experiences/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const experience = await storage.getExperienceById(id);
      if (!experience) {
        return res.status(404).json({ message: "Experience not found" });
      }
      res.json(experience);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch experience" });
    }
  });
  app2.post("/api/experiences", async (req, res) => {
    try {
      const validatedData = insertExperienceSchema.parse(req.body);
      const experience = await storage.createExperience(validatedData);
      res.status(201).json(experience);
    } catch (error) {
      res.status(400).json({ message: "Invalid experience data" });
    }
  });
  app2.get("/api/achievements", async (req, res) => {
    try {
      const achievements2 = await storage.getAllAchievements();
      res.json(achievements2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch achievements" });
    }
  });
  app2.get("/api/achievements/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const achievement = await storage.getAchievementById(id);
      if (!achievement) {
        return res.status(404).json({ message: "Achievement not found" });
      }
      res.json(achievement);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch achievement" });
    }
  });
  app2.post("/api/achievements", async (req, res) => {
    try {
      const validatedData = insertAchievementSchema.parse(req.body);
      const achievement = await storage.createAchievement(validatedData);
      res.status(201).json(achievement);
    } catch (error) {
      res.status(400).json({ message: "Invalid achievement data" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
