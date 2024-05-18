import React from 'react';

const MainTitle = ({ text }) => {
  const elements = text.split(''); // Split text into characters

  return (
    <span className="MainTitle">
      {elements.map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </span>
  );
};

export default MainTitle;