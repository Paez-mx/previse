import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Formatos from "./Screens/Formatos";
import Historial from "./Screens/Historial";
import Justificantes from "./Screens/Justificantes";
import Reportes from "./Screens/Reportes";
import Visitas from "./Screens/Visitas";
import logo from "./img/Logo 22.jpg";
import Sidebar from "./Components/Sidebar";
import Login from "./Screens/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          alt="School Logo"
          style={{ width: "150px", height: "150px" }}
        />
      </header>

      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/formatos" element={<Formatos />} />
          <Route path="/justificantes" element={<Justificantes />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/visitas" element={<Visitas />} />
          <Route path="/historial" element={<Historial />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
