import React, { Component } from 'react';
import Pregunta from './pregunta';


class MostrarEmociones extends Component {

  


    render(){
        return(
            <>
        {this.props.objemocion.map(emocion =>
        <div className="contenedor_emocion">
        <img src={require("../assets/" + emocion.id + ".png")} onClick={() => Pregunta.seleccionar('emo5')} className="emocion hvr-bounce-in animacion" id='emo5' alt='' />
        <p className="parrafo-pre descripcion_emocion">Sorprendido</p>
        </div>
                )}
            </>
        )
    }
}

export default MostrarEmociones;