# HomeSkills - Home Education Platform

## Overview

HomeSkills is a comprehensive educational platform designed for new homeowners, providing organized learning resources across different skill levels and categories. The application features a modern web interface built with React and TypeScript, offering educational content management with filtering, search, and progress tracking capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with a clear separation between client and server components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints
- **Development**: Hot module replacement via Vite integration

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Tables**: Users, Resources, and UserProgress with proper relationships
- **Migrations**: Managed through drizzle-kit

### Storage Implementation
- **Interface**: IStorage abstraction for data operations
- **Current Implementation**: In-memory storage (MemStorage) with sample data
- **Future Ready**: Designed to easily swap to database implementation

### UI Component System
- **Base**: shadcn/ui components built on Radix UI primitives
- **Theme**: Custom design system with skill-level specific colors
- **Responsive**: Mobile-first design approach
- **Accessibility**: Built-in accessibility features via Radix UI

### Resource Management
- **Categories**: Maintenance, Repairs, Safety, Budgeting, Seasonal, Energy
- **Skill Levels**: Beginner, Intermediate, Advanced
- **Content**: Rich text content with metadata (reading time, images, etc.)
- **Search**: Full-text search across titles, descriptions, and content

## Data Flow

### Resource Discovery Flow
1. User lands on home page with hero section
2. Skill level selector allows filtering by expertise level
3. Category filters provide topical organization
4. Search functionality enables content discovery
5. Resource grid displays filtered and sorted results
6. Individual resource pages show detailed content

### State Management Flow
1. TanStack Query handles all server state
2. Local component state manages UI interactions
3. URL parameters preserve filter states
4. Optimistic updates provide smooth UX

### API Request Flow
1. Frontend makes requests to `/api/*` endpoints
2. Express middleware handles request logging
3. Storage layer abstracts data operations
4. Structured JSON responses with error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **express**: Web application framework
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/***: Headless UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type safety
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development Environment
- **Server**: Express with Vite middleware for HMR
- **Database**: Configured for PostgreSQL via DATABASE_URL
- **Scripts**: `npm run dev` starts development server with hot reload

### Production Build
- **Frontend**: Vite builds optimized React application
- **Backend**: esbuild bundles Express server
- **Output**: Static assets in `dist/public`, server in `dist/index.js`
- **Execution**: `npm start` runs production server

### Database Management
- **Migrations**: `npm run db:push` applies schema changes
- **Configuration**: Environment-based DATABASE_URL
- **Provider**: Ready for Neon Database or any PostgreSQL service

### Replit Integration
- **Development**: Cartographer plugin for enhanced debugging
- **Error Handling**: Runtime error modal for development
- **Deployment**: Compatible with Replit's hosting infrastructure

The architecture prioritizes type safety, developer experience, and scalable growth while maintaining simplicity in the current implementation. The modular design allows for easy extension of features and smooth transition from in-memory storage to persistent database operations.