import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import Dashboard from './components/Dashboard';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="flex">
        <Sidebar
          activeView={activeView}
          setActiveView={setActiveView}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />

        <main className="flex-1 min-h-[calc(100vh-64px)] pb-20 lg:pb-6">
          {activeView === 'dashboard' && <Dashboard />}
          {activeView === 'learn' && (
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Learn</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Browse courses and learning paths</p>
            </div>
          )}
          {activeView === 'practice' && (
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Practice</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Coding challenges and exercises</p>
            </div>
          )}
          {activeView === 'ai-interview' && (
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Interview</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Practice with AI-powered interviews</p>
            </div>
          )}
          {activeView === 'job-portal' && (
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Job Portal</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Find your dream job</p>
            </div>
          )}
          {activeView === 'profile' && (
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Manage your profile and settings</p>
            </div>
          )}
          {activeView === 'analytics' && (
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Track your progress and insights</p>
            </div>
          )}
        </main>
      </div>

      <MobileNav activeView={activeView} setActiveView={setActiveView} />

      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-24 right-4 lg:hidden w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:shadow-xl transition-shadow"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}

export default App;
