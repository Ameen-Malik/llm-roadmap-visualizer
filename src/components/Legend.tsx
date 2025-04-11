
import React from 'react';
import { cn } from '@/lib/utils';

interface LegendItemProps {
  color: string;
  label: string;
  borderColor?: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ color, label, borderColor }) => (
  <div className="flex items-center mb-2">
    <div 
      className={cn(
        "w-4 h-4 mr-2 rounded", 
        color,
        borderColor && "border",
        borderColor && `border-${borderColor}`
      )}
    ></div>
    <span className="text-sm">{label}</span>
  </div>
);

const Legend: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-3">Legend</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <LegendItem color="bg-roadmap-module" label="Module" />
        <LegendItem color="bg-roadmap-submodule" label="Submodule" />
        <LegendItem color="bg-roadmap-live" label="Live Lecture" />
        <LegendItem color="bg-roadmap-recorded" label="Recorded Lecture" />
        <LegendItem color="bg-roadmap-combined" label="Combined (Live)" />
        <LegendItem 
          color="bg-roadmap-combined" 
          label="Combined (Recorded)" 
          borderColor="roadmap-recorded" 
        />
        <LegendItem color="bg-roadmap-assignment" label="Assignment" />
        <LegendItem color="bg-roadmap-practice" label="Practice Set" />
      </div>
    </div>
  );
};

export default Legend;
