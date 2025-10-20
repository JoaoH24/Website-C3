const TwoColumnSection = ({
  id,
  dirChildenLeft,
  dirChildrenRight,
  childrenLeft,
  childrenRight,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`flex flex-row items-center justify-center gap-20 ${className} px-10`}
    >
      <div className={`flex flex-${dirChildenLeft} gap-5`}>{childrenLeft}</div>
      <div className={`flex flex-${dirChildrenRight}`}>{childrenRight}</div>
    </section>
  );
};

export default TwoColumnSection;
