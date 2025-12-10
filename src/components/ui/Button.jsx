export default function Button({ 
  children, 
  variant = "primary", 
  size = "md",
  className = "",
  icon: Icon,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    outline: "border-2 border-gray-200 text-gray-700 hover:bg-gray-50",
    ghost: "text-gray-700 hover:bg-gray-100",
  };
  
  const sizes = {
    sm: "text-sm px-3 py-1.5 min-h-[36px]",
    md: "text-sm px-4 py-2.5 min-h-[44px]",
    lg: "text-base px-6 py-3 min-h-[48px]",
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={size === "sm" ? 16 : size === "lg" ? 20 : 18} />}
      {children}
    </button>
  );
}

