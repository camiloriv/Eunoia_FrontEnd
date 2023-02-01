/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import { getAllEmocion } from '../services/emocionServices';
import MostrarEmociones from './mostrarEmociones';

const emocionInit = [{
    id : 1,
    nombreEmocion: "",
    descripcion: "",
    tipo: "",
    subemociones: {}
}]
const EmocionComponent = () => {
    const [emociones, setEmociones] = useState(emocionInit);
    const obtenerEmociones = async () => {
        setEmociones(await getAllEmocion());
    }
useEffect(() => { obtenerEmociones()}, []);

    return(
        <MostrarEmociones objemocion = {emociones}/>
    )

}

export default EmocionComponent;