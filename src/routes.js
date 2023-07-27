import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Sobremim' element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
