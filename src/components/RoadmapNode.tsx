// src/components/RoadmapNode.tsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { RoadmapModule, RoadmapSubmodule, RoadmapConcept, RoadmapItem, ContentType } from '@/data/roadmapData';
import { cn } from '@/lib/utils';

const getTypeColor = (type: ContentType): string => {
  switch (type) {
    case 'Live': return 'bg-roadmap-live text-white';
    case 'Recorded': return 'bg-roadmap-recorded text-white';
    case 'Live (Combined)': return 'bg-roadmap-combined text-white';
    case 'Recorded (Combined)': return 'bg-roadmap-combined border border-roadmap-recorded text-white';
    case 'Assignment': return 'bg-roadmap-assignment text-white';
    default: return 'bg-gray-500 text-white';
  }
};

// Level 1: Main Module (Handles both nested and direct item modules)
const RoadmapNode: React.FC<{ module: RoadmapModule; isFirst?: boolean; isLast?: boolean }> = ({ module, isFirst = false, isLast = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      {!isFirst && <div className="absolute w-0.5 bg-roadmap-connector h-8 -top-8 left-6" />}
      
      <div className="relative z-10">
        <div
          className={cn("bg-roadmap-module text-white rounded-lg p-4 mb-4 w-[280px] md:w-[320px] cursor-pointer hover:shadow-lg transition-shadow flex items-center justify-between")}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="font-bold">{module.title}</span>
          {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pl-12 relative">
                <div className="absolute left-6 top-0 bottom-4 w-0.5 bg-roadmap-connector" />
                
                {/* Conditional Rendering: Check for submodules or direct items */}
                {module.submodules && module.submodules.map((submodule, subIdx) => (
                  <SubmoduleNode key={submodule.title} submodule={submodule} isLast={subIdx === module.submodules.length - 1} />
                ))}

                {module.items && module.items.map((item, itemIdx) => (
                  <DirectItemNode key={item.title} item={item} isLast={itemIdx === module.items.length - 1} />
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// NEW Component for Direct Items (Replaces Submodule/Concept layers)
const DirectItemNode: React.FC<{ item: RoadmapItem; isLast?: boolean }> = ({ item, isLast = false }) => {
    return (
      <div className="relative mb-4">
        <div className="absolute w-6 h-0.5 bg-roadmap-connector left-0 top-6" />
        <div className="relative">
          <div className={cn(getTypeColor(item.type), "rounded-lg p-3 w-[260px] md:w-[300px]")}>
            <div className="text-left">
              <p className="font-medium">{item.title}</p>
              <p className="text-xs opacity-80 mt-1">{item.type}</p>
            </div>
          </div>
        </div>
        {!isLast && <div className="absolute left-0 top-12 bottom-0 w-0.5 bg-roadmap-connector" />}
      </div>
    );
  };
  

// Level 2: Sub-Module (e.g., Full-Stack LLM)
const SubmoduleNode: React.FC<{ submodule: RoadmapSubmodule; isLast?: boolean }> = ({ submodule, isLast = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="relative mb-4">
      <div className="absolute w-6 h-0.5 bg-roadmap-connector left-0 top-6" />
      <div className="relative">
        <div
          className={cn("bg-roadmap-submodule text-white rounded-lg p-3 w-[260px] md:w-[300px] cursor-pointer hover:shadow-md transition-shadow flex items-center justify-between")}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="font-medium">{submodule.title}</span>
          {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="pl-8 pt-2 relative">
                <div className="absolute left-4 top-0 bottom-3 w-0.5 bg-roadmap-connector" />
                {submodule.concepts.map((concept, conceptIdx) => (
                  <ConceptNode key={concept.title} concept={concept} isLast={conceptIdx === submodule.concepts.length - 1} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {!isLast && <div className="absolute left-0 top-12 bottom-0 w-0.5 bg-roadmap-connector" />}
    </div>
  );
};

// Level 3: Concept (e.g., Introduction, UI)
const ConceptNode: React.FC<{ concept: RoadmapConcept; isLast?: boolean }> = ({ concept, isLast = false }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="relative mb-3">
            <div className="absolute w-4 h-0.5 bg-roadmap-connector left-0 top-6" />
            <div className={cn("bg-roadmap-practice text-white rounded-lg p-2 ml-4 w-[240px] md:w-[280px] cursor-pointer hover:shadow-sm transition-shadow flex items-center justify-between")} onClick={() => setIsExpanded(!isExpanded)}>
                <span className="font-medium text-sm">{concept.title}</span>
                {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </div>
            <AnimatePresence>
                {isExpanded && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="pl-6 pt-2 relative">
                             <div className="absolute left-2 top-0 bottom-3 w-0.5 bg-roadmap-connector" />
                             {concept.items.map((item, itemIdx) => ( <ItemNode key={item.title} item={item} isLast={itemIdx === concept.items.length - 1} /> ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {!isLast && <div className="absolute left-0 top-12 bottom-0 w-0.5 bg-roadmap-connector" />}
        </div>
    );
};

// Level 4: Item (e.g., Lecture, Assignment)
const ItemNode: React.FC<{ item: RoadmapItem; isLast?: boolean }> = ({ item, isLast = false }) => {
  return (
    <div className="relative mb-3">
      <div className="absolute w-2 h-0.5 bg-roadmap-connector left-0 top-6" />
      <div className={cn(getTypeColor(item.type), "rounded-lg p-2 ml-4 w-[220px] md:w-[260px]")}>
        <div className="text-left">
          <p className="font-medium text-sm md:text-base">{item.title}</p>
          <p className="text-xs opacity-80 mt-1">{item.type}</p>
        </div>
      </div>
      {!isLast && <div className="absolute left-0 top-12 bottom-0 w-0.5 bg-roadmap-connector" />}
    </div>
  );
};

export default RoadmapNode;
