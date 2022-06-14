import IconoGRafica from '../img/icono_grafica.svg';
import { formatCantidad } from '../helpers/formatCantidad';

const ControlPresupuesto = ({presupuesto, setPresupuesto}) => {

    return (
        <>
            <div className='control'>
                <div className="control__presupuesto animate__animated animate__fadeIn">
                    <div className="control__presupuesto-body">
                        <p>Presupuesto: <br /> <span> {formatCantidad(presupuesto)}</span></p>
                        <p>Disponible: <br /> <span> {formatCantidad(0)}</span></p>
                        <p>Gasto: <br /> <span> {formatCantidad(0)}</span></p>
                    </div>
                    <div className="control__presupuesto-img">
                        <img src={ IconoGRafica} alt="imagen grafica" />
                    </div>

                </div>
                <div className="control__grafica">
                    <p>grafica</p>
                </div>
            </div>
            <div className="gastos">
                <p>Listado de gastos</p>
            </div>
        </>
    )
}

export default ControlPresupuesto