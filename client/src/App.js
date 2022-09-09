import { Route, Routes } from "react-router-dom";

import { Home } from "./views/Home";
import Loggin from "./views/Loggin";

const App = () => {
  // HACER PEDIDOS AL BACK, QUE AL CAMBIAR LOS ESTADOS DEL RENDER MUESTE NUEVA INFORMACIÓN

  //Router Dom
  return (
    <>
      <Routes>
        {/* <Route path="/404"  /> */}
        <Route path="/" element={<Home />} />
        <Route path="/loggin" element={<Loggin />} />
        {/* <Route path="/me" element={< />} /> */}
      </Routes>
    </>
  );
};

//Hedear - modal
export default App;
