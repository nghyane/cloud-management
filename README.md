# Cloud Management Platform

A modern cloud management platform built with Next.js 15, React 19, Tailwind CSS v4, and Shadcn UI.

## Server Management MVP

This MVP focuses on providing a comprehensive server management solution that works across multiple cloud providers. The application allows users to monitor, manage, and connect to their servers from a single unified interface.

### Key Features

- **Server Dashboard**: Overview of all servers with status indicators and resource usage metrics
- **Server Details**: Detailed view of individual server information and performance metrics
- **Terminal Access**: Web-based SSH terminal for direct server access
- **File Management**: Browse, upload, download, and manage files on remote servers
- **Database Management**: Manage databases, run SQL queries, and create backups
- **Service Management**: Start, stop, and monitor services running on servers
- **Performance Monitoring**: Real-time and historical performance metrics with alerts
- **Multi-Provider Support**: Works with AWS, DigitalOcean, GCP, and other cloud providers

### Pages Implemented

1. **Server List** (`/servers/page.tsx`): Lists all servers with filtering and sorting options
2. **Server Detail** (`/servers/[id]/page.tsx`): Overview of a specific server
3. **Terminal** (`/servers/[id]/terminal/page.tsx`): Web-based SSH terminal
4. **File Management** (`/servers/[id]/files/page.tsx`): File browser and manager
5. **Database Management** (`/servers/[id]/databases/page.tsx`): Database management interface
6. **Service Management** (`/servers/[id]/services/page.tsx`): Service control panel
7. **Monitoring** (`/servers/[id]/monitoring/page.tsx`): Performance monitoring dashboard
8. **Server Connection** (`/servers/connect/page.tsx`): Interface to connect to new servers

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Components**: Shadcn UI
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useContext)
- **TypeScript**: For type safety and better developer experience

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/app`: Next.js App Router pages and layouts
- `/components`: Reusable UI components
- `/lib`: Utility functions and helpers
- `/public`: Static assets
- `/types`: TypeScript type definitions

## Future Enhancements

- Real-time server metrics using WebSockets
- Integration with more cloud providers
- Automated server provisioning
- Cost optimization recommendations
- Team collaboration features
- Role-based access control
- Notification system for alerts
- Mobile application for on-the-go management

## License

MIT
