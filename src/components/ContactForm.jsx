import React, { useState } from "react";

export default function ContactForm() {
  const [accepted, setAccepted] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accepted) {
      alert("Por favor aceptá la política de privacidad.");
      return;
    }
    alert("Formulario demo enviado. En la versión final se guardará en backend o se enviará por email seguro.");
  };

  const onFile = (e) => {
    const f = e.target.files[0];
    if (f) setFileName(f.name);
  };

  return (
    <form className="card contact-card" onSubmit={handleSubmit}>
      <label>
        Nombre completo
        <input name="name" required placeholder="Tu nombre" />
      </label>
      <label>
        Correo
        <input name="email" type="email" required placeholder="tu@mail.com" />
      </label>
      <label>
        Departamento de interés
        <input name="dept" placeholder="Ej: Loft Palermo" />
      </label>
      <label>
        Fechas deseadas
        <input name="dates" placeholder="Ej: 10/09 - 15/09" />
      </label>
      <label>
        Frente del DNI (imagen)
        <input type="file" accept="image/*" onChange={onFile} />
        <div className="muted">Archivo: {fileName || "ninguno"}</div>
      </label>

      <label className="checkbox-label">
        <input type="checkbox" checked={accepted} onChange={() => setAccepted(!accepted)} />
        <span className="muted">Acepto la política de privacidad.</span>
      </label>

      <div className="form-buttons">
        <button className="btn" type="submit">Enviar consulta</button>
        <button className="btn" type="button" onClick={() => alert("Simulación pago 10%")}>Pagar seña 10%</button>
      </div>
    </form>
  );
}
