export default function Card({ 
  children, 
  className = "",
  padding = true,
  hover = false,
  ...props 
}) {
  const baseStyles = "bg-white rounded-xl shadow-sm border border-gray-100";
  const paddingStyles = padding ? "p-4 sm:p-6" : "";
  const hoverStyles = hover ? "hover:shadow-md transition-shadow duration-200" : "";
  
  return (
    <div 
      className={`${baseStyles} ${paddingStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

