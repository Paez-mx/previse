import React from "react";

const Historial = () => {
  const links = [
    { name: "Home", url: "/home" },
    { name: "Formatos", url: "/formatos" },
    { name: "Justificantes", url: "/justificantes" },
    { name: "Reportes", url: "/reportes" },
    { name: "Visitas", url: "/visitas" },
    { name: "Historial", url: "/historial" },
  ];

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
        {/*  */}
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
    padding: "20px",
  },
};
export default Historial;
