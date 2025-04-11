
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';
import Roadmap from '@/components/Roadmap';
import Legend from '@/components/Legend';
import { Info, X, Sun, Moon } from 'lucide-react';

const Index: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Toggle dark mode
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm py-4 border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                <span className="hidden sm:inline">{darkMode ? 'Light' : 'Dark'} Mode</span>
              </button>
              <button 
                onClick={() => setShowInfo(!showInfo)}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {showInfo ? <X size={18} /> : <Info size={18} />}
                <span className="hidden sm:inline">{showInfo ? 'Hide' : 'Show'} Info</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container px-4 md:px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">LLM Engineering Roadmap</h1>
          <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
            Interactive visualization of the LLM Engineering curriculum. Click on modules to expand and see details.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Legend & Info Panel */}
          <div className="md:w-64 lg:w-80 space-y-4 order-2 md:order-1">
            <Legend />
            
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-card text-card-foreground p-4 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-medium mb-3">How to use</h3>
                <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
                  <li>Click on a module to expand and see its submodules</li>
                  <li>Click on a submodule to see individual lectures and assignments</li>
                  <li>Different colors indicate different content types (see legend)</li>
                  <li>Follow the roadmap from top to bottom for a structured learning path</li>
                </ul>
              </motion.div>
            )}
          </div>
          
          {/* Roadmap */}
          <div className="flex-grow overflow-x-auto pb-4 order-1 md:order-2">
            <Roadmap />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-6 mt-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo className="mb-4 md:mb-0" />
            <p className="text-muted-foreground text-sm">© 2025 100xEngineers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
