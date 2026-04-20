interface SlantedButtonProps {
  text: string;
  icon?: React.ReactNode;
  color?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean; // Add this
}

const SlantedButton: React.FC<SlantedButtonProps> = ({
  text,
  icon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  color = "#8B2F5A",
  className = "",
  onClick,
  disabled = false, // Add this with default value
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled} // Add this
      className={`py-4 text-2xl font-bold hover:opacity-90 transition-opacity mt-4 relative overflow-hidden ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`} // Add disabled styles
      style={{
        backgroundColor: color,
        letterSpacing: "2px",
        clipPath: "polygon(0 8px, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <span className="flex items-center justify-center gap-3">
        {text} {icon}
      </span>
    </button>
  );
};

export default SlantedButton;
