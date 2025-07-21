import { users, projects, experiences, achievements, type User, type InsertUser, type Project, type InsertProject, type Experience, type InsertExperience, type Achievement, type InsertAchievement } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Project methods
  getAllProjects(): Promise<Project[]>;
  getProjectById(id: number): Promise<Project | undefined>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  searchProjects(query: string): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Experience methods
  getAllExperiences(): Promise<Experience[]>;
  getExperienceById(id: number): Promise<Experience | undefined>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  
  // Achievement methods
  getAllAchievements(): Promise<Achievement[]>;
  getAchievementById(id: number): Promise<Achievement | undefined>;
  createAchievement(achievement: InsertAchievement): Promise<Achievement>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private experiences: Map<number, Experience>;
  private achievements: Map<number, Achievement>;
  private currentUserId: number;
  private currentProjectId: number;
  private currentExperienceId: number;
  private currentAchievementId: number;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.experiences = new Map();
    this.achievements = new Map();
    this.currentUserId = 1;
    this.currentProjectId = 1;
    this.currentExperienceId = 1;
    this.currentAchievementId = 1;
    
    // Initialize with portfolio data
    this.initializePortfolioData();
  }

  private initializePortfolioData() {
    const sampleProjects: InsertProject[] = [
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

    const sampleExperiences: InsertExperience[] = [
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

    const sampleAchievements: InsertAchievement[] = [
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

    sampleProjects.forEach(project => {
      this.createProject(project);
    });

    sampleExperiences.forEach(experience => {
      this.createExperience(experience);
    });

    sampleAchievements.forEach(achievement => {
      this.createAchievement(achievement);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) => 
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  }

  async getProjectById(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(project => project.category === category)
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  }

  async searchProjects(query: string): Promise<Project[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.projects.values())
      .filter(project => 
        project.title.toLowerCase().includes(lowercaseQuery) ||
        project.description.toLowerCase().includes(lowercaseQuery) ||
        project.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery))
      )
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { 
      ...insertProject, 
      id,
      imageUrl: insertProject.imageUrl || null,
      githubUrl: insertProject.githubUrl || null,
      demoUrl: insertProject.demoUrl || null,
      year: insertProject.year || null,
      updatedAt: new Date()
    };
    this.projects.set(id, project);
    return project;
  }

  async getAllExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values()).sort((a, b) => 
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  }

  async getExperienceById(id: number): Promise<Experience | undefined> {
    return this.experiences.get(id);
  }

  async createExperience(insertExperience: InsertExperience): Promise<Experience> {
    const id = this.currentExperienceId++;
    const experience: Experience = { 
      ...insertExperience, 
      id,
      current: insertExperience.current || false,
      updatedAt: new Date()
    };
    this.experiences.set(id, experience);
    return experience;
  }

  async getAllAchievements(): Promise<Achievement[]> {
    return Array.from(this.achievements.values()).sort((a, b) => 
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  }

  async getAchievementById(id: number): Promise<Achievement | undefined> {
    return this.achievements.get(id);
  }

  async createAchievement(insertAchievement: InsertAchievement): Promise<Achievement> {
    const id = this.currentAchievementId++;
    const achievement: Achievement = { 
      ...insertAchievement, 
      id,
      year: insertAchievement.year || null,
      updatedAt: new Date()
    };
    this.achievements.set(id, achievement);
    return achievement;
  }
}

export const storage = new MemStorage();