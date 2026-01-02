
import React from 'react';
import { Menu, X, Zap, BarChart2, Video, User, LayoutGrid } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  onPageChange: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onPageChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Hub', id: 'hub' as Page, icon: <LayoutGrid size={18} /> },
    { name: 'Radar', id: 'radar' as Page, icon: <BarChart2 size={18} /> },
    { name: 'Studio', id: 'lab' as Page, icon: <Video size={18} /> },
    { name: 'Accounts', id: 'accounts' as Page, icon: <User size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onPageChange('landing')}
          >
            <div className="bg-blue-600 p-1.5 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <Zap className="text-white fill-white" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              ViraGo<span className="text-blue-500">.io</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activePage === item.id
                      ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => onPageChange('radar')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-blue-500/25"
              >
                Start Analyzing
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-2 w-full px-3 py-3 rounded-md text-base font-medium ${
                  activePage === item.id ? 'text-blue-400 bg-blue-500/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
