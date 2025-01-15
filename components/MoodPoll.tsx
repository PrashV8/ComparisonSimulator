'use client';
import React, { useState } from 'react';
import ParameterInput from './ParameterInput';
import MoodResult from './MoodResult';
import { moodCategories } from '../data/moodCategories';

interface ValuesState {
  emotionalIntensity: number;
  emotionalLayering: number;
  environmentalInfluence: number;
  socialDynamics: number;
  physicalExpression: number;
  musicalConnection: number;
  philosophicalInfluence: number;
  resilience: number;
  curiosity: number;
  empathy: number;
  energyLevels: number;
  focus: number;
  playfulness: number;
  romanticFeelings: number;
}

const MoodPoll: React.FC = () => {
  const [values, setValues] = useState<ValuesState>({
    emotionalIntensity: 0,
    emotionalLayering: 0,
    environmentalInfluence: 0,
    socialDynamics: 0,
    physicalExpression: 0,
    musicalConnection: 0,
    philosophicalInfluence: 0,
    resilience: 0,
    curiosity: 0,
    empathy: 0,
    energyLevels: 0,
    focus: 0,
    playfulness: 0,
    romanticFeelings: 0,
  });

  const [mood, setMood] = useState<{ name: string; explanation: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: parseInt(value, 10),
    }));
  };

  const calculateMood = () => {
    let bestMatch: { name: string; explanation: string } | null = null;
    let highestScore = -1;

    moodCategories.forEach((category) => {
      let score = 0;
      const totalParams = Object.keys(category.criteria).length;

      Object.entries(category.criteria).forEach(([param, range]) => {
        const value = values[param as keyof ValuesState];
        if (value >= range.min && value <= range.max) {
          score += 1;
        }
      });

      const matchPercentage = (score / totalParams) * 100;

      if (matchPercentage > highestScore) {
        highestScore = matchPercentage;
        bestMatch = { name: category.name, explanation: category.explanation };
      }
    });

    setMood(bestMatch);
  };

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '2.2em',
          marginBottom: '20px',
          color: '#333',
        }}
      >
        Advanced Mood Poll
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateMood();
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        {Object.keys(values).map((key) => (
          <ParameterInput
            key={key}
            label={`${key.replace(/([A-Z])/g, ' $1')} (1-100)`}
            name={key}
            value={values[key as keyof ValuesState]}
            onChange={handleChange}
          />
        ))}
        <button
          type="submit"
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            fontSize: '1.2em',
            color: '#fff',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          Submit
        </button>
      </form>
      {mood && (
        <MoodResult mood={mood.name} explanation={mood.explanation} />
      )}
    </div>
  );
};

export default MoodPoll;
