import React from "react";

interface InputProps {
  value: string | number;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ value, placeholder, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full select-none rounded border border-gray bg-transparent py-1 pl-3 pr-8 text-base placeholder:text-light focus:outline-none"
    />
  );
};

export default Input;
