import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sass/styles.scss';

const Muro = () => {
  return (

    <form action="" method="Get">

      <div className="planta2">
        <img src={require("../assets/plant-hanging1.png")} alt="planta1" className="planta" />
      </div>

      <div className="Principal">
        ¿Quieres contarnos por qué?
      </div>
      <div>
        <textarea className="text" placeholder="Escribe aqui lo que quieras"></textarea>
          <img src={require("../assets/logo-manchita.png")} alt="manchamuro" className="logo_manchita_muro" />
      </div>

      <div className="muro_buttons">
        <Link to="/home"><button className="buttons1 buttons3" type="button">Omitir</button></Link>
        <Link to="/home"><button className="buttons2 buttons3" type="button">Guardar</button></Link>
      </div>
    </form>
  );
};


export default Muro;