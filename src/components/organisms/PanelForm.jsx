import Panel from "../atoms/Panel";
import Field from "../molecules/Field";

const PanelForm = (columns, rows, className) => {
  return (
    <Panel
      className={`m-10 p-8 grid grid-cols-${columns} grid-rows-${rows} gap-2`}
    >
      <Field
        label={"Nombres (*)"}
        placeholder={">_"}
        required={true}
        type={"text"}
        className={`col-start-1 col-span-3 ${className}`}
      ></Field>
      <Field
        label={"Apellidos (*)"}
        placeholder={">_"}
        required={true}
        type={"text"}
        className={`col-span-5 ${className}`}
      ></Field>
      <Field
        label={"Correo electrónico (*)"}
        placeholder={">_"}
        required={true}
        type={"text"}
        className={`col-span-5 ${className}`}
      ></Field>
      <Field
        label={"Teléfono (*)"}
        placeholder={">_"}
        required={true}
        type={"text"}
        className={`col-span-3 ${className}`}
      ></Field>
      <Field
        label={"Empresa/Institución (*)"}
        placeholder={">_"}
        required={true}
        type={"text"}
        className={`col-span-8 ${className}`}
      ></Field>
      <Field
        label={"Mensaje (*)"}
        placeholder={">_"}
        required={true}
        type={"textarea"}
        rowsArea={4}
        className={`col-span-8 ${className}`}
      ></Field>
    </Panel>
  );
};

export default PanelForm;
