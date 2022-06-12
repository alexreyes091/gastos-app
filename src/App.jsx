import { useState } from 'react';
// Mis componentes
import Dashboard from "./components/Dashboard";
import { DatosPresupuesto } from './components/DatosPresupuesto';
import Sidebar from "./components/Sidebar";
// Otros
import 'animate.css';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [isDashboardActive, setIsDashboardActive] = useState(true);
  const [isPresupuestoActive, setIsPresupuestoActive] = useState(false);

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
        {isPresupuestoActive && <DatosPresupuesto

                                />
        }
      </div>
    </>
  )
}

export default App
