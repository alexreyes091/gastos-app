import React from 'react'

const NuevoPresupuesto = ({
        presupuesto,
        setPresupuesto,
        setMensaje,
        isValidPresupuesto,
        setIsValidPresupuesto, }) => {

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!(presupuesto) || (presupuesto) < 0){
            setMensaje('Lo siento, el valor ingresado no es valido.')
            return;
        }
        setMensaje('');
        setIsValidPresupuesto(true);

        setPresupuesto(presupuesto);

    }

    return (
        <form onSubmit={handlePresupuesto} className="form">
            <div className="campo">
                <label className="campo__title">Controla tus finanzas</label>
                <span>Define tu presupuesto inicial, y lleva un mejor control en tus finanzas.</span>
                <input
                    className="campo__input"
                    type="number"
                    placeholder="Agrega tu presupuesto"
                    value={presupuesto}
                    onChange={e => setPresupuesto(Number(e.target.value))}
                />
            </div>

            <input
                type="submit"
                value="Agregar"
                className="btn"
                onChange={handlePresupuesto}
                />
        </form>
    )
}

export default NuevoPresupuesto