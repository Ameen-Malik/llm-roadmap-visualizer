
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';
import Roadmap from '@/components/Roadmap';
import Legend from '@/components/Legend';
import { Info, X } from 'lucide-react';

const Index: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Logo />
            <button 
              onClick={() => setShowInfo(!showInfo)}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              {showInfo ? <X size={18} /> : <Info size={18} />}
              <span className="hidden sm:inline">{showInfo ? 'Hide' : 'Show'} Info</span>
            </button>
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
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Interactive visualization of the LLM Engineering curriculum. Click on modules to expand and see details.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Roadmap */}
          <div className="flex-grow overflow-x-auto pb-4">
            <Roadmap />
          </div>
          
          {/* Legend & Info Panel */}
          <div className="md:w-64 lg:w-80 space-y-4">
            <Legend />
            
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-medium mb-3">How to use</h3>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>Click on a module to expand and see its submodules</li>
                  <li>Click on a submodule to see individual lectures and assignments</li>
                  <li>Different colors indicate different content types (see legend)</li>
                  <li>Follow the roadmap from top to bottom for a structured learning path</li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo className="mb-4 md:mb-0" />
            <p className="text-gray-500 text-sm">© 2025 100xEngineers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
