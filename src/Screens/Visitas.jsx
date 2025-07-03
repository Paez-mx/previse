import React, { useState, useRef } from "react";

const Visitas = () => {
  const links = [
    { name: "Home", url: "/home" },
    { name: "Formatos", url: "/formatos" },
    { name: "Justificantes", url: "/justificantes" },
    { name: "Reportes", url: "/reportes" },
    { name: "Visitas", url: "/visitas" },
    { name: "Historial", url: "/historial" },
  ];

  const [fechas, setFechas] = useState([""]);
  const [archivoNombre, setArchivoNombre] = useState(null);
  const inputFileRef = useRef(null);

  const handleFechaChange = (index, value) => {
    const nuevasFechas = [...fechas];
    nuevasFechas[index] = value;
    setFechas(nuevasFechas);
  };

  const agregarFecha = () => {
    setFechas([...fechas, ""]);
  };

  const manejarArchivo = (event) => {
    if (event.target.files.length > 0) {
      setArchivoNombre(event.target.files[0].name);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        {links.map((link) => (
          <a key={link.name} href={link.url} style={styles.link}>
            {link.name}
          </a>
        ))}
      </div>
      <div style={styles.content}>
        <h2 style={styles.title}>Visitas</h2>
        <form style={styles.form}>
          <label style={styles.label}>Nombre del visitante</label>
          <input type="text" style={styles.input} />

          <label style={styles.label}>Visita a</label>
          <input type="text" style={styles.input} />

          <label style={styles.label}>Motivo</label>
          <textarea style={styles.textarea} rows={8} cols={100}></textarea>

          <label style={styles.label}>Fecha</label>
          {fechas.map((fecha, index) => (
            <input
              key={index}
              type="date"
              value={fecha}
              onChange={(e) => handleFechaChange(index, e.target.value)}
              style={{ ...styles.input, marginBottom: "10px" }}
            />
          ))}

          <button type="submit" style={styles.submitButton}>
            Crear cita
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "red",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "200px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    backgroundColor: "#b22222",
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginBottom: "15px",
    fontSize: "18px",
    cursor: "pointer",
  },
  content: {
    flex: 1,
    padding: "40px",
    backgroundColor: "#f5f5f5",
    color: "#333",
  },
  title: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
  },
  label: {
    marginTop: "10px",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },
  addButton: {
    backgroundColor: "#1976d2",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  attachButton: {
    backgroundColor: "#5a5aff",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "5px",
    marginBottom: "15px",
  },
  archivoNombre: {
    marginBottom: "15px",
    fontStyle: "italic",
    fontSize: "14px",
  },
  submitButton: {
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Visitas;
