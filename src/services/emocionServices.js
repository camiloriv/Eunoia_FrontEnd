import axios from 'axios';

const rutaBase = "http://localhost:8081/emociones";

const getAllEmocion = async() => {
    const respuesta = await axios.get(rutaBase + "/lista");
    console.log(respuesta.data);
    return respuesta.data;
}
export {getAllEmocion}