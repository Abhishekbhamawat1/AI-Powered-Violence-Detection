import { Outlet } from 'react-router';
import { UnifiedNavbar } from './UnifiedNavbar';
import { Footer } from './Footer';

export function UnifiedLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <UnifiedNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}