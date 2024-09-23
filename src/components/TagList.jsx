import React from 'react';
import Tag from './Tag';

const TagList = ({tags, onSelect}) => {
  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default TagList;
