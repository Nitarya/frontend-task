export default function Badge({ 
  children, 
  variant = "default", 
  className = "",
  ...props 
}) {
  const baseStyles = "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium";
  
  const variants = {
    default: "bg-gray-100 text-gray-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    error: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
    review: "bg-purple-100 text-purple-700",
    purple: "bg-purple-100 text-purple-700",
    live: "bg-red-100 text-red-600 animate-pulse",
  };
  
  return (
    <span 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

