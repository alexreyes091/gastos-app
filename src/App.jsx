import { useState } from 'react';
// Mis componentes
import Dashboard from "./components/Dashboard";
import { DatosPresupuesto } from './components/DatosPresupuesto';
import Sidebar from "./components/Sidebar";
import Modal from './components/Modal';
// Otros
import 'animate.css';
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [isDashboardActive, setIsDashboardActive] = useState(true);
  const [isPresupuestoActive, setIsPresupuestoActive] = useState(false);

  const [modal, setModal] = useState(false);

  const handleNuevoGasto = () => {
    setModal(!modal);
  }

  return (
    <>
      <Sidebar
        setIsDashboardActive={setIsDashboardActive}
        setIsPresupuestoActive={setIsPresupuestoActive}
      />
      <div className="content">
        {isDashboardActive && <Dashboard
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
        }
        {isPresupuestoActive && <DatosPresupuesto/>}

        {isValidPresupuesto && (
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        )}

        {modal && <Modal 
          setModal={setModal}
        />}


        </div>
    </>
  )
}

export default App
