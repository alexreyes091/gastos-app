import IconoCerrar from '../img/cerrar.svg';

const Modal = ({ setModal, animarModal, setAnimarModal }) => {

    const ocultarModal = () => {
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 400);
    }
    return (
        <div className='modal'>
            <div className="modal__cerrar-modal">
                <img
                    src={IconoCerrar}
                    alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>

            <form className={`contenedor modal-formulario ${animarModal ? "modal-animar" : "modal-cerrar"}`}>
                <legend>Nuevo Gasto</legend>

                <div className="modal-formulario__campo">
                    <label
                        htmlFor='descripcion'
                    >Descripción</label>
                    <input
                        id='descripcion'
                        type="text"
                        placeholder="Detalle el nuevo gasto"/>
                </div>

                <div className="modal-formulario__campo">
                    <label
                        htmlFor='cantidad'
                    >Cantidad</label>
                    <input
                        id='cantidad'
                        type="number"
                        placeholder="Ingresa la cantidad gastada"/>
                </div>

                <div className="modal-formulario__campo">
                    <label
                        htmlFor='categoria'
                    >Cantidad</label>

                    <select
                        id="categoria"
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorros</option>
                        <option value="comida">Comida</option>
                        <option value="hogar">Hogar</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="transporte">Transporte</option>
                        <option value="gastos">Gastos Varios</option>
                    </select>

                    <input
                    className='btn-gray'
                        type="submit"
                        value='Agregar'
                    />
                </div>
            </form>
        </div>
    )
}

export default Modal