import React from 'react';

const Tag = ({tag, onSelect}) => {
  return (
    <div className="tag" style={{backgroundColor: tag.color}} onClick={() => onSelect(tag)}>
      {tag.name}
    </div>
  );
};

export default Tag;
