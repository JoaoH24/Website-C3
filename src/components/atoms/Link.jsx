const Link = ({ children, url, type, className = "" }) => {
  if (type == "title")
    return (
      <a
        className={`text-white font-hs font-bold ${className}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  else if (type == "normal") {
    return (
      <a
        className={`text-white font-ps ${className}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
};

export default Link;
