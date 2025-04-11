
import React from 'react';
import { motion } from 'framer-motion';
import RoadmapNode from './RoadmapNode';
import { roadmapData } from '@/data/roadmapData';

const Roadmap: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex justify-center"
    >
      <div className="flex flex-col gap-8 items-center">
        {roadmapData.map((module, index) => (
          <RoadmapNode
            key={module.title}
            module={module}
            isFirst={index === 0}
            isLast={index === roadmapData.length - 1}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Roadmap;
