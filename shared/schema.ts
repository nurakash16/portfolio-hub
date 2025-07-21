import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  technologies: text("technologies").array().notNull(),
  category: text("category").notNull(), // 'vlsi', 'power_systems', 'control_systems', 'embedded', 'research'
  status: text("status").notNull(), // 'completed', 'in_progress', 'research'
  year: text("year"),
  imageUrl: text("image_url"),
  githubUrl: text("github_url"),
  demoUrl: text("demo_url"),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  duration: text("duration").notNull(),
  description: text("description").notNull(),
  technologies: text("technologies").array().notNull(),
  type: text("type").notNull(), // 'work', 'internship', 'volunteer'
  current: boolean("current").default(false),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const achievements = pgTable("achievements", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  year: text("year"),
  category: text("category").notNull(), // 'competition', 'exhibition', 'recognition'
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  updatedAt: true,
});

export const insertExperienceSchema = createInsertSchema(experiences).omit({
  id: true,
  updatedAt: true,
});

export const insertAchievementSchema = createInsertSchema(achievements).omit({
  id: true,
  updatedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type Experience = typeof experiences.$inferSelect;
export type InsertAchievement = z.infer<typeof insertAchievementSchema>;
export type Achievement = typeof achievements.$inferSelect;
