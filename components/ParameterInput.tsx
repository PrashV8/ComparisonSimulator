import React from 'react';

interface ParameterInputProps {
  label: string;
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ParameterInput: React.FC<ParameterInputProps> = ({ label, name, value, onChange }) => {
  return (
    <div className="margin-bottom: 20px;">
      <label htmlFor={name}>{label}</label>
      <input
        type="range"
        id={name}
        name={name}
        min="1"
        max="100"
        value={value}
        onChange={onChange}
      />
      <span>{value}</span>
    </div>
  );
};

export default ParameterInput;