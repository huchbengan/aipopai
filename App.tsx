
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ViralRadar from './components/ViralRadar';
import ContentLab from './components/ContentLab';
import AccountHub from './components/AccountHub';
import ViralHub from './components/ViralHub';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [prefilledScript, setPrefilledScript] = useState<string>('');

  const handleRemix = (summary: string) => {
    setPrefilledScript(`Based on this viral concept: "${summary}"\n\nWrite a localized script for my niche: `);
    setCurrentPage('lab');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onStart={() => setCurrentPage('hub')} />;
      case 'hub':
        return <ViralHub onRemix={handleRemix} />;
      case 'radar':
        return <ViralRadar />;
      case 'lab':
        return <ContentLab initialScript={prefilledScript} />;
      case 'accounts':
        return <AccountHub />;
      default:
        return <LandingPage onStart={() => setCurrentPage('hub')} />;
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-blue-500/30">
      <Navbar activePage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="relative z-10 animate-in fade-in duration-700">
        {renderPage()}
      </main>

      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none -z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <footer className="py-12 glass border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">
              ViraGo<span className="text-blue-500">.io</span>
            </span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 ViraGo.io. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
