const TwoColumnSection = ({
  dirChildenLeft,
  dirChildrenRight,
  childrenLeft,
  childrenRight,
  className = "",
}) => {
  return (
    <section
      className={`flex flex-row items-center justify-center gap-20 ${className}`}
    >
      <div className={`flex flex-${dirChildenLeft} gap-5`}>{childrenLeft}</div>
      <div className={`flex flex-${dirChildrenRight}`}>{childrenRight}</div>
    </section>
  );
};

export default TwoColumnSection;
