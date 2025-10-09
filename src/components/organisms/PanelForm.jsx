import Panel from "../atoms/Panel";
import PrimaryButton from "../atoms/PrimaryButton";
import Field from "../molecules/Field";

const PanelForm = (className = "") => {
  return (
    <Panel className={`p-8 grid gap-2 min-w-150`}>
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
      <div className="flex flex-row">
        <PrimaryButton
          text={"ENVIAR MENSAJE"}
          className={"my-4"}
        ></PrimaryButton>
      </div>
    </Panel>
  );
};

export default PanelForm;
