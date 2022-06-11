import { useState } from 'react';
// Mis componentes
import Mensaje from './Mensaje';
import NuevoPresupuesto from './NuevoPresupuesto';
// Mis imagenes
import IconoDinero from '../img/icono_dinero.svg';

const Dashboard = ({
        presupuesto,
        setPresupuesto,
        isValidPresupuesto,
        setIsValidPresupuesto, }) => {

    const [mensaje, setMensaje] = useState('');

    return (
        <div className="dashboard contenedor">
            <h1 className="dashboard__title">Planificador de Gastos</h1>
            <hr />

            {mensaje && <Mensaje> {mensaje} </Mensaje>}
            {/* Informacion al usuario sobre el presupuesto establecido */}

            { isValidPresupuesto ? (
                <p>Presupuesto vallido: {presupuesto}</p>

            ) : (
                <div className="dashboard__content">
                    <NuevoPresupuesto
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setMensaje={setMensaje}
                        isValidPresupuesto={isValidPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                    <img className='dashboard__content-img' src={IconoDinero} alt="icono dinero" />
                </div>
            )}

        </div>
    )
}

export default Dashboard