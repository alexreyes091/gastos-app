import IconoCerrar from '../img/cerrar.svg';

const Modal = ({ setModal }) => {

    const ocultarModal = () => {
        setModal(false);
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
        </div>
    )
}

export default Modal