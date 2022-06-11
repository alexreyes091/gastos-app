// Iconos
import { VscError } from "react-icons/vsc";

const Mensaje = ({ children }) => {
    return (
        <>
            <div className='mensaje'>
                <span><VscError /></span>
                <p>{ children }</p>
            </div>
        </>
    )
}

export default Mensaje