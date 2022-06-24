import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Iconos
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoHogar from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

export const DatosPresupuesto = () => {
    return (
        <div className="dashboard contenedor">
            <h1 className="dashboard__title">Resumen de gastos</h1>
            <hr />
            <div className="registro">
                <div className="registro__grafica">
                    <CircularProgressbar 
                        // text={'COMIDA'}
                        value={50}
                        // styles={buildStyles({
                        //     pathColor: '#00b4cc',
                        //     trailColor: '#bebaba',
                        //     textSize: '12px',
                        // })}
                    >
                        <img style={{ width: 40, marginTop: -5 }} src={IconoComida} alt="doge" />
                        <div style={{ fontSize: 12, marginTop: -5 }}>
                            <strong>66%</strong> mate
                        </div>
                    </CircularProgressbar>
                </div>
                <div className="registro__titulo">
                    Titulo
                </div>
                <div className="registro__porcentaje">
                    00.00%
                </div>
            </div>
        </div>
    )
}
