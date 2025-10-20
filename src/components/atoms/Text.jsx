const Text = ({ children, type, size, weight, className = "" }) => {
  if (type == "gradient") {
    return (
      <span
        className={`font-ps text-${size} font-${weight} bg-linear-140 from-main to-complement bg-clip-text text-transparent ${className}`}
      >
        {children}
      </span>
    );
  } else if (type == "green") {
    return (
      <p
        className={`font-ps font-${weight} text-${size} text-main ${className}`}
      >
        {children}
      </p>
    );
  } else if (type == "neon-green") {
    return (
      <p
        className={`font-ps font-${weight} text-${size} text-main ${className}
              transition-all duration-500 ease-in-out hover:animate-[neonPulse_1.5s_ease-in-out_infinite]`}
      >
        {children}
      </p>
    );
  } else if (type == "neon-white-green") {
    return (
      <p
        className={`font-ps font-${weight} text-${size} ${className} hover:text-main
              transition-all duration-500 ease-in-out hover:animate-[neonPulse_1.5s_ease-in-out_infinite]`}
      >
        {children}
      </p>
    );
  } else {
    return (
      <p
        className={`font-ps font-${weight} text-${size} text-white ${className}`}
      >
        {children}
      </p>
    );
  }
};

export default Text;
