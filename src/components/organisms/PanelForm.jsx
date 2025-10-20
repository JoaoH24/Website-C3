import { useRef, useState } from "react";
import Panel from "../atoms/Panel";
import PrimaryButton from "../atoms/PrimaryButton";
import Field from "../molecules/Field";
import ReCAPTCHA from "react-google-recaptcha";

const PanelForm = (className = "") => {
  const formRef = useRef(null);
  const [captchaValido, setCaptchaValido] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleCaptchaChange = (value) => {
    setCaptchaValido(!!value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValido) {
      setMensaje("⚠️ Por favor resuelve el reCAPTCHA antes de enviar.");
      return;
    }

    setEnviando(true);
    setMensaje("");

    try {
      const formData = new FormData(formRef.current);
      const res = await fetch("https://formspree.io/f/xnnggwrw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setMensaje("✅ Tu mensaje fue enviado correctamente.");
        formRef.current.reset();
      } else {
        setMensaje(
          "❌ Hubo un error al enviar el mensaje. Inténtalo de nuevo."
        );
      }
    } catch (error) {
      console.error(error);
      setMensaje("❌ Error de conexión al enviar el formulario.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="flex gap-4">
      <Panel
        idForm={"contact"}
        onSubmit={handleSubmit}
        formRef={formRef}
        className={"min-w-170 max-w-220"}
      >
        <div className={`p-8 grid gap-2 min-w-110`}>
          <Field
            label={"Nombres (*)"}
            id={"nombre"}
            placeholder={">_"}
            required={true}
            formDad={"contact"}
            type={"text"}
            className={`col-start-1 col-span-3 ${className}`}
          ></Field>
          <Field
            label={"Apellidos (*)"}
            id={"apellido"}
            placeholder={">_"}
            required={true}
            formDad={"contact"}
            type={"text"}
            className={`col-span-5 ${className}`}
          ></Field>
          <Field
            label={"Correo electrónico (*)"}
            id={"correo"}
            placeholder={">_"}
            required={true}
            formDad={"contact"}
            type={"text"}
            className={`col-span-5 ${className}`}
          ></Field>
          <Field
            label={"Teléfono (*)"}
            id={"telefono"}
            placeholder={">_"}
            required={true}
            formDad={"contact"}
            type={"text"}
            className={`col-span-3 ${className}`}
          ></Field>
          <Field
            label={"Empresa/Institución (*)"}
            id={"empresa"}
            placeholder={">_"}
            required={true}
            formDad={"contact"}
            type={"text"}
            className={`col-span-8 ${className}`}
          ></Field>
          <Field
            label={"Mensaje (*)"}
            id={"mensaje"}
            placeholder={">_"}
            required={true}
            formDad={"contact"}
            type={"textarea"}
            rowsArea={4}
            className={`col-span-8 ${className}`}
          ></Field>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between px-10 pb-8">
            <ReCAPTCHA
              sitekey="6LfKHuQrAAAAAE1eQQZFzE8c6DO8b3tjVNgRqqFK"
              theme="dark"
              onChange={handleCaptchaChange}
            ></ReCAPTCHA>
            <PrimaryButton
              typeButton="submit"
              text={enviando ? "ENVIANDO..." : "ENVIAR MENSAJE"}
              className={"my-4"}
              disabled={!captchaValido || enviando}
            ></PrimaryButton>
          </div>
          <div>
            {mensaje && (
              <p className="text-center text-lg text-[var(--color-main)] pb-5">
                {mensaje}
              </p>
            )}
          </div>
        </div>
      </Panel>
    </div>
  );
};

export default PanelForm;
