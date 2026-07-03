# AI Violence Detection System - Project Overview

## 🎨 Design System

### Color Scheme (60-30-10 Rule)
- **60% White Background**: Clean, professional white backgrounds across all pages
- **30% Dark Blue**: Blue-900 (#1e3a8a) and Blue-800 (#1e40af) for UI components, navigation bars, and headers
- **10% Red Accent**: Red-600 (#dc2626) for alerts, primary buttons, and critical notifications

---

## 📄 Pages

### 1. **Home Page (Landing Page)**
- **Hero Section**: 
  - Large heading introducing the AI Violence Detection System
  - Interactive floating bubbles/particles that react to cursor movement
  - Call-to-action buttons (Get Started Free, Watch Demo)
  - Live statistics display (99.2% accuracy, <2s response time, etc.)
  
- **Features Section**:
  - Real-Time Detection
  - Advanced AI Engine
  - Smart Alerts
  - Video Analysis
  
- **How It Works Section**:
  - 4-step process visualization
  - Connect Cameras → AI Processing → Instant Alerts → Take Action
  
- **Live Detection Preview**:
  - Interactive camera preview mockup
  - Detection capabilities list
  - Try Live Detection CTA button

- **Final CTA Section**:
  - Dark blue gradient background
  - Start Free Trial and Login buttons
  - Key statistics summary

### 2. **Login Page**
- Centered glassmorphism card
- Email and password input fields with icons
- Red login button
- Particle background that reacts to cursor movement
- Remember me checkbox
- Forgot password link
- Sign up link

### 3. **Signup Page**
- Centered glassmorphism card
- Name, email, password, and confirm password fields
- Red create account button
- Particle background that reacts to cursor movement
- Terms of service checkbox
- Login link

### 4. **Dashboard Page**
- **Layout**: Full width with top navigation bar only (NO sidebar)
- **Top Navigation**: Dark blue gradient with user profile and logout button
- **Stats Cards**:
  - Violence Detected (red accent)
  - Cameras Active (blue accent)
  - Total Alerts (orange accent)
  
- **Live Camera Monitoring**:
  - Grid layout of camera feeds
  - Status indicators (Online/Offline)
  - Detection status (Safe/N/A)
  
- **Recent Alerts**:
  - List of latest system notifications
  - Severity indicators (high/medium/low)
  - View action buttons

### 5. **History Page**
- **Layout**: Full width with top navigation bar
- **Search & Filters**:
  - Search by camera ID or detection type
  - Filter by status (All/Violent/Safe/Warning)
  - Filter by camera
  
- **Data Table**:
  - Columns: Date & Time, Camera ID, Detection Type, Status, Duration, Actions
  - Red labels for violent incidents
  - Green labels for safe status
  - Orange labels for warnings
  - View and Export buttons
  
- **Pagination**: Navigation controls at the bottom

### 6. **Live Detection Page**
- Real-time webcam feed using `navigator.mediaDevices.getUserMedia()`
- Start/Stop camera controls
- Live detection status display
- Detection history in sidebar

### 7. **Upload & Analysis Page**
- Drag-and-drop video upload
- File browser upload
- Progress bar during analysis
- Detection results display
- Download report option

### 8. **Settings Page**
- Profile settings (name, email)
- Notification preferences (email, push, alerts)
- Detection sensitivity configuration
- Security settings (password change)

---

## 🎯 Key Features

### Interactive Particle Background
- Floating bubbles that move with cursor direction
- Used on: Home, Login, Signup pages
- Blue gradient particles with connecting lines
- Smooth animations and transitions

### Navigation System
- **Public Pages** (Home, How It Works, Contact): 
  - Main Navbar with logo, navigation links, login/signup buttons
  - Sticky positioning
  - Responsive mobile menu
  
- **Authenticated Pages** (Dashboard, History, Live Detection, etc.):
  - Top Navigation Bar only
  - User profile display
  - Logout button
  - Navigation links to all authenticated pages

### Authentication Flow
- Mock authentication system using React Context
- Login/Signup redirects to Dashboard
- User state persisted across pages
- Logout returns to login page

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Grid layouts that adapt to screen size
- Mobile navigation menu

---

## 🛠️ Technology Stack

- **React 18.3.1**: UI library
- **TypeScript**: Type safety
- **React Router 7**: Navigation and routing
- **Tailwind CSS 4**: Styling framework
- **Motion (Framer Motion)**: Animations
- **Lucide React**: Icon library
- **Radix UI**: Accessible component primitives
- **Recharts**: Charts and graphs (Dashboard)
- **Sonner**: Toast notifications

---

## 📁 Project Structure

```
/src/app
├── App.tsx                    # Main app component
├── routes.ts                  # React Router configuration
│
├── /components
│   ├── TopNavigation.tsx      # Top nav for authenticated pages
│   ├── Navbar.tsx             # Main navbar for public pages
│   ├── Footer.tsx             # Footer component
│   ├── Layout.tsx             # Layout wrapper (Navbar + Outlet + Footer)
│   ├── ParticleBackground.tsx # Interactive particle animation
│   └── /ui                    # Reusable UI components (Button, Card, etc.)
│
├── /pages
│   ├── Home.tsx               # Landing page
│   ├── HowItWorks.tsx         # How it works page
│   ├── Contact.tsx            # Contact page
│   ├── Login.tsx              # Login page
│   ├── Signup.tsx             # Signup page
│   ├── Dashboard.tsx          # Main dashboard
│   ├── History.tsx            # Detection history
│   ├── LiveDetection.tsx      # Live webcam detection
│   ├── UploadAnalysis.tsx     # Video upload and analysis
│   └── Settings.tsx           # User settings
│
└── /context
    └── AuthContext.tsx        # Authentication context
```

---

## 🚀 Getting Started

1. The application starts at the Home page (/)
2. Users can navigate to Login or Signup
3. After authentication, users are redirected to Dashboard
4. Dashboard has top navigation to access all features:
   - Dashboard (overview)
   - Live Detection (webcam monitoring)
   - Upload & Analysis (video analysis)
   - History (past detections)
   - Settings (preferences)

---

## ✨ Design Highlights

- **Modern AI Tech Aesthetic**: Clean, futuristic design with glassmorphism effects
- **Interactive Elements**: Particle animations, hover effects, smooth transitions
- **Accessibility**: Proper labels, keyboard navigation, ARIA attributes
- **Performance**: Optimized animations, lazy loading, efficient rendering
- **User Experience**: Intuitive navigation, clear CTAs, responsive feedback

---

## 🎨 Color Palette

- **Primary Blue**: #1e3a8a (blue-900) - Main UI components
- **Secondary Blue**: #1e40af (blue-800) - Gradients and accents
- **Accent Red**: #dc2626 (red-600) - Alerts and primary actions
- **Success Green**: #16a34a (green-600) - Safe status indicators
- **Warning Orange**: #ea580c (orange-600) - Medium severity alerts
- **Background White**: #ffffff - Clean backgrounds
- **Text Gray**: #4b5563 (gray-600) - Body text
- **Heading Dark**: #1e3a8a (blue-900) - Headings

---

## 📊 Dashboard Features

- **No Sidebar Navigation**: Clean, full-width layout
- **Top Navigation Only**: All navigation in the top bar
- **Direct Access**: Dashboard opens immediately when clicked
- **Analytics Cards**: Key metrics at a glance
- **Live Monitoring**: Real-time camera status grid
- **Recent Alerts**: Latest notifications and incidents
- **Clean Design**: No unnecessary animations, focus on data

---

Built with ❤️ using modern web technologies and AI-powered design principles.
