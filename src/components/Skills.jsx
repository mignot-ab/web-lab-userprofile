import React from 'react';

const colorVariants = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100',
  purple: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100',
  amber: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100',
  rose: 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100',
  teal: 'bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100',
};

const defaultColor = 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200';

export default function Skills({ skills }) {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="w-full">
      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5 text-left">
        Skills
      </h3>
      <div className="flex flex-wrap gap-2 justify-start">
        {skills.map((skill, index) => {
          const skillName = typeof skill === 'object' ? skill.name : skill;
          const skillColor = typeof skill === 'object' ? skill.color : 'blue';
          const styleClass = colorVariants[skillColor] || defaultColor;

          return (
            <span
              key={index}
              className={`px-3 py-1 text-xs font-medium rounded-md border transition-colors ${styleClass}`}
            >
              {skillName}
            </span>
          );
        })}
      </div>
    </div>
  );
}
