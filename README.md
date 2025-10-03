# Forge Dashboard

A modern, responsive React dashboard for an Adaptive Learning & Job Portal platform built with React, Vite, and Tailwind CSS.

## Features

- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Interactive Components**:
  - Sticky header with search, notifications, and user profile
  - Collapsible sidebar navigation
  - Mobile bottom navigation
  - Dashboard with stats, progress tracking, and recommendations
  - Gamification elements (streaks, badges, progress bars)
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Headless UI
- Canvas Confetti

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       - Sticky header with search and user menu
│   ├── Sidebar.jsx      - Side navigation with quick stats
│   ├── MobileNav.jsx    - Bottom navigation for mobile
│   └── Dashboard.jsx    - Main dashboard view
├── App.jsx              - Main app component
├── main.jsx             - React entry point
└── index.css            - Global styles
```

## Features Overview

### Dashboard
- Quick stats cards (Active Courses, Skills Mastered, Interview Score, Job Matches)
- Recommended actions with progress tracking
- Recent activity feed
- Day streak tracker with gamification
- Upcoming sessions
- Learning progress indicators
- Career readiness score

### Navigation
- Multi-section navigation (Dashboard, Learn, Practice, AI Interview, Job Portal, Profile, Analytics)
- Responsive sidebar that collapses on mobile
- Mobile-optimized bottom navigation
- Floating menu button on mobile

### Theme
- System-wide dark/light mode toggle
- Smooth theme transitions
- Gradient accents (blue to purple)
- Color-coded stats and indicators

## Customization

The dashboard uses Tailwind CSS for styling, making it easy to customize colors, spacing, and components. Modify `tailwind.config.js` to adjust the theme.

## License

MIT
