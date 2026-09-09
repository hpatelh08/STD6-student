# Std 6 Student Learning Companion

A React and Vite learning portal for Class 6 students and parents. Students can explore lessons, games, puzzles, facts, a learning journey, fill-in-the-blanks activities, and a growth garden. Parents can open the parent dashboard directly from the role switcher after student login.

## Features

- Student dashboard with XP, levels, streaks, missions, and achievements
- Arcade, English, and Maths games with difficulty levels and progress tracking
- Brain puzzles, Fun Facts, Journey, Fill in the Blanks, and Garden activities
- Parent dashboard with progress, attendance, books, reports, and settings
- Local progress and session persistence through browser storage
- Optional AI-powered learning assistance

## Requirements

- Node.js 18 or newer
- npm

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

The development server is configured for port `3000` and accepts connections from the local network.

## Environment Variables

AI features can use optional API keys in a local `.env` or `.env.local` file:

```env
GEMINI_API_KEY=your_gemini_key
GROQ_API_KEY=your_groq_key
```

Never commit these files or expose API keys in the browser. The repository ignores `.env` and `.env.*` files.

## Available Scripts

```bash
npm run dev       # Start the Vite development server
npm run build     # Create a production build
npm run preview   # Preview the production build locally
npm run build:kb  # Build the knowledge base with the Python script
```

## Authentication Flow

1. Sign in with a Student ID and password configured in `data/studentProfiles.ts`.
2. Use the Student/Parent switch in the dashboard header to open the parent section directly.
3. Use Logout to clear the local session.

This project uses local demo authentication and browser storage. It is not a production identity system.

## Project Structure

```text
auth/        Authentication and role routing
child/       Student dashboard and activities
games/       Game hub, game engine, questions, and progress
parent/      Parent dashboard and reports
components/  Shared UI components
data/        Curriculum, student profiles, and configuration
services/    AI, reports, and activity services
public/      Static images, books, and game assets
```

## Notes

- Generated folders such as `node_modules`, `dist`, and `.vite` are intentionally excluded from Git.
- The largest textbook PDF is excluded because GitHub rejects files over 100 MB. Add large books through Git LFS or external storage if they are needed for deployment.
