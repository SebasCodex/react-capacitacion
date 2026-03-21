import { useState } from "react";
import Home from "./pages/Home";
import MesasPage from "./pages/MesasPage";
import NavBar from "./components/NavBar";

function App() {

  const [pagina, setPagina] = useState("carta"); // vista inicial

  return (
    <div>

      <NavBar setPagina={setPagina} />

      {pagina === "carta" && <Home />}
      {pagina === "mesas" && <MesasPage />}
      {pagina === "comandas" && <h1>Comandas (próximamente)</h1>}

    </div>
  );
}

export default App;