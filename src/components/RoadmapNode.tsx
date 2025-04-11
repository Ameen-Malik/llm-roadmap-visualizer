
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { RoadmapModule, RoadmapSubmodule, RoadmapItem, ContentType } from '@/data/roadmapData';
import { cn } from '@/lib/utils';

interface RoadmapNodeProps {
  module: RoadmapModule;
  isFirst?: boolean;
  isLast?: boolean;
}

const getTypeColor = (type: ContentType): string => {
  switch (type) {
    case 'Live':
      return 'bg-roadmap-live';
    case 'Recorded':
      return 'bg-roadmap-recorded';
    case 'Live (Combined)':
      return 'bg-roadmap-combined';
    case 'Recorded (Combined)':
      return 'bg-roadmap-combined border border-roadmap-recorded';
    case 'Assignment':
      return 'bg-roadmap-assignment';
    case 'Practice Set':
      return 'bg-roadmap-practice';
    default:
      return 'bg-gray-500';
  }
};

const RoadmapNode: React.FC<RoadmapNodeProps> = ({ module, isFirst = false, isLast = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Vertical connector line */}
      {!isFirst && <div className="absolute w-0.5 bg-roadmap-connector h-8 -top-8 left-6" />}
      {!isLast && <div className="absolute w-0.5 bg-roadmap-connector h-8 top-14 left-6" />}
      
      {/* Module node */}
      <div className="relative z-10">
        <div 
          className={cn(
            "bg-roadmap-module text-white rounded-lg p-4 mb-4",
            "w-[280px] md:w-[320px] cursor-pointer hover:shadow-lg transition-shadow",
            "flex items-center justify-between"
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="font-bold">{module.title}</span>
          {isExpanded ? (
            <ChevronDown size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
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
                {/* Vertical line connecting to submodules */}
                <div className="absolute left-6 top-0 bottom-4 w-0.5 bg-roadmap-connector" />
                
                {module.submodules.map((submodule, subIdx) => (
                  <SubmoduleNode
                    key={submodule.title}
                    submodule={submodule}
                    isLast={subIdx === module.submodules.length - 1}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

interface SubmoduleNodeProps {
  submodule: RoadmapSubmodule;
  isLast?: boolean;
}

const SubmoduleNode: React.FC<SubmoduleNodeProps> = ({ submodule, isLast = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative mb-4">
      {/* Horizontal connector line */}
      <div className="absolute w-6 h-0.5 bg-roadmap-connector left-0 top-6" />
      
      <div className="relative">
        <div
          className={cn(
            "bg-roadmap-submodule text-white rounded-lg p-3",
            "w-[260px] md:w-[300px] cursor-pointer hover:shadow-md transition-shadow",
            "flex items-center justify-between"
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="font-medium">{submodule.title}</span>
          {isExpanded ? (
            <ChevronDown size={18} />
          ) : (
            <ChevronRight size={18} />
          )}
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
              <div className="pl-8 pt-2 relative">
                {/* Vertical line connecting to items */}
                <div className="absolute left-4 top-0 bottom-3 w-0.5 bg-roadmap-connector" />
                
                {submodule.items.map((item, itemIdx) => (
                  <ItemNode
                    key={item.title}
                    item={item}
                    isLast={itemIdx === submodule.items.length - 1}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Don't render the vertical line after the last submodule */}
      {!isLast && <div className="absolute left-0 top-12 bottom-0 w-0.5 bg-roadmap-connector" />}
    </div>
  );
};

interface ItemNodeProps {
  item: RoadmapItem;
  isLast?: boolean;
}

const ItemNode: React.FC<ItemNodeProps> = ({ item, isLast = false }) => {
  return (
    <div className="relative mb-3">
      {/* Horizontal connector line */}
      <div className="absolute w-4 h-0.5 bg-roadmap-connector left-0 top-6" />
      
      <div 
        className={cn(
          getTypeColor(item.type),
          "rounded-lg p-2 ml-4",
          "w-[240px] md:w-[280px]"
        )}
      >
        <div className="text-left text-sm md:text-base">
          <p className="font-medium text-sm md:text-base">{item.title}</p>
          <p className="text-xs opacity-80 mt-1">{item.type}</p>
        </div>
      </div>
      
      {/* Don't render the vertical line after the last item */}
      {!isLast && <div className="absolute left-0 top-12 bottom-0 w-0.5 bg-roadmap-connector" />}
    </div>
  );
};

export default RoadmapNode;
