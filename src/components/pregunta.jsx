import React from 'react';
import '../styles/sass/styles.scss';
import ModalNewEmotionComponent from './modal_agregarEmocion';
import Emociones from './emociones';
import { Link } from 'react-router-dom';


const Pregunta = () => {

  function seleccionar(emo) {
    let emo1 = document.getElementById("emo1")
    let emo2 = document.getElementById("emo2")
    let emo3 = document.getElementById("emo3")
    let emo4 = document.getElementById("emo4")
    let emo5 = document.getElementById("emo5")
    let emo6 = document.getElementById("emo6")
    let emoSelected = document.getElementById(emo)

    let emoArr = [emo1,emo2,emo3,emo4,emo5,emo6]
    for (let emo of emoArr){
      if(emo != null && emo !== undefined){
        emo.classList.remove("selected")
      }
    }
    if(emoSelected != null && emoSelected !== undefined){
      emoSelected.classList.add("selected")
    }
    console.log(emo);
  };

  return (
    <div className="container-fluid div__pregunta">
      <div>
        <h1 className="titulo">¿Cómo te sientes hoy?</h1>
      </div>

        <div className="div__pregunta__emociones">
        
      </div>
      <br/>
    <Emociones/>
        
      <div className="_btn">
        <Link to="/muro"><button type="button" className="btn2-pregunta">Enviar</button></Link>
        <ModalNewEmotionComponent/>
      </div>
      
    </div>
  );

}

export default Pregunta;