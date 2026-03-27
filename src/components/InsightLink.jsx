import React from 'react';

const InsightLink = ({ insightId, children, onInsightClick }) => {
  return (
    <span
      onClick={() => onInsightClick && onInsightClick(insightId)}
      className="border-b-2 border-dashed border-orange-500 cursor-pointer hover:bg-orange-50/30 dark:hover:bg-orange-900/30 text-orange-900 dark:text-orange-200 font-semibold transition-colors px-1 rounded-sm mx-0.5"
      title="Clicca per approfondire (Deep Insight)"
    >
      {children}
    </span>
  );
};

export default InsightLink;
