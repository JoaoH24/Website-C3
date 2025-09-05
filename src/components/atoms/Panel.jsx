const Panel = ({ children, className }) => {
  return <div className={`rounded-4xl  bg-bgd ${className}`}>{children}</div>;
};

export default Panel;
