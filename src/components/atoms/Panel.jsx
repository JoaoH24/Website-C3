const Panel = ({
  idForm,
  onSubmit,
  formRef,
  actionForm,
  children,
  className,
}) => {
  return (
    <form
      id={idForm}
      action={actionForm}
      onSubmit={onSubmit}
      ref={formRef}
      method="POST"
      className={`rounded-4xl  bg-bgd ${className}`}
    >
      {children}
    </form>
  );
};

export default Panel;
