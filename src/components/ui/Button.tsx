import React from "react";

interface ButtonProps {
  text?: string;
  type?: "submit" | "button";
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="focus:shadow-outline flex select-none items-center justify-center rounded border border-gray py-2 px-4 font-medium tracking-wider text-light transition-all duration-200 hover:border-current hover:bg-dark/50 hover:text-dark focus:outline-none dark:text-dark"
    >
      {icon}
      <h6>{text}</h6>
    </button>
  );
};

export default Button;
