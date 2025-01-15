import React from 'react';

interface MoodResultProps {
  mood: string;
  explanation: string;
}

const MoodResult: React.FC<MoodResultProps> = ({ mood, explanation }) => {
  return (
    <div className="result">
      <h2>Your Mood: {mood}</h2>
      <p>{explanation}</p>
    </div>
  );
};

export default MoodResult;