import { createBrowserRouter } from 'react-router';
import { UnifiedLayout } from './components/UnifiedLayout';
import { Home } from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
import { LiveDetection } from './pages/LiveDetection';
import { UploadAnalysis } from './pages/UploadAnalysis';
import { Dashboard } from './pages/Dashboard';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { History } from './pages/History';
import { Settings } from './pages/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: UnifiedLayout,
    children: [
      { index: true, Component: Home },
      { path: 'how-it-works', Component: HowItWorks },
      { path: 'live-detection', Component: LiveDetection },
      { path: 'upload-analysis', Component: UploadAnalysis },
      { path: 'dashboard', Component: Dashboard },
      { path: 'contact', Component: Contact },
      { path: 'login', Component: Login },
      { path: 'signup', Component: Signup },
      { path: 'history', Component: History },
      { path: 'settings', Component: Settings },
    ],
  },
]);
