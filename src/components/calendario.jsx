import React from 'react';
import Sidebar from '../components/sidebar';
import { Link } from 'react-router-dom';
import '../styles/sass/styles.scss';
import ModalDiaComponent from './modal_dia';

const Calendario = () => {
  return (
    <div className="container-fluid">
      <Sidebar />
      <div class="div__calendar">
        <br />
        <h1 class="page__title center-element">Calendario</h1>
        <div class="div__calendar__container">
          <div class="div__calendar__container__year">
            <h2 class="year__title" id="year">2023</h2>
          </div>

          <div class="div__calendar__container__month">
            <Link to="/calendarios"><img src={require("../assets/arrow-left.png")} class="calendar__arrow" id="calendar-prev" alt=''/></Link>
            <h3 class="month__title" id="month">Enero</h3>
            <img src={require("../assets/arrow-right.png")} class="calendar__arrow" id="calendar-next" alt=''/>
          </div>
          <div class="div__calendar__container__weeks">
            <div class="calendar__week center-element">
              <p class="week-day">Lun</p>
              <p class="week-day">Mar</p>
              <p class="week-day">Mié</p>
              <p class="week-day">Jue</p>
              <p class="week-day">Vie</p>
              <p class="week-day">Sáb</p>
              <p class="week-day">Dom</p>
              <p>1<ModalDiaComponent/></p>
              <p>2<br/><img src={require("../assets/felicidad.png")} className="emocion_semana" alt='' /></p>
              <p>3<br/><img src={require("../assets/sorpresa.png")} className="emocion_semana" alt='' /></p>
              <p>4<br/><img src={require("../assets/felicidad.png")} className="emocion_semana" alt='' /></p>
              <p>5<br/><img src={require("../assets/felicidad.png")} className="emocion_semana" alt='' /></p>
              <p>6<br/><img src={require("../assets/sorpresa.png")} className="emocion_semana" alt='' /></p>
              <p>7<br/><img src={require("../assets/tristeza.png")} className="emocion_semana" alt='' /></p>
              <p>8<br/><img src={require("../assets/felicidad.png")} className="emocion_semana" alt='' /></p>
              <p>9<br/><img src={require("../assets/sorpresa.png")} className="emocion_semana" alt='' /></p>
              <p>10<br/><img src={require("../assets/tristeza.png")} className="emocion_semana" alt='' /></p>
              <p>11<br/><img src={require("../assets/felicidad.png")} className="emocion_semana" alt='' /></p>
              <p>12<br/><img src={require("../assets/felicidad.png")} className="emocion_semana" alt='' /></p>
              <p>13<br/><img src={require("../assets/sorpresa.png")} className="emocion_semana" alt='' /></p>
              <p>14<br/><img src={require("../assets/felicidad.png")} className="emocion_semana" alt='' /></p>
              <p>15<br/><img src={require("../assets/tristeza.png")} className="emocion_semana" alt='' /></p>
              <p>16<br/><img src={require("../assets/sorpresa.png")} className="emocion_semana" alt='' /></p>
              <p>17<br/><img src={require("../assets/felicidad.png")} className="emocion_semana" alt='' /></p>
              <p>18<br/><img src={require("../assets/disgusto.png")} className="emocion_semana" alt='' /></p>
              <p>19<br/><img src={require("../assets/sorpresa.png")} className="emocion_semana" alt='' /></p>
              <p>20<br/><img src={require("../assets/felicidad.png")} className="emocion_semana" alt='' /></p>
              <p>21<br/><img src={require("../assets/sorpresa.png")} className="emocion_semana" alt='' /></p>
              <p>22<br/><img src={require("../assets/felicidad.png")} className="emocion_semana" alt='' /></p>
              <p>23<br/><img src={require("../assets/felicidad.png")} className="emocion_semana" alt='' /></p>
              <p>24<br/><img src={require("../assets/sorpresa.png")} className="emocion_semana" alt='' /></p>
              <p>25<br/><img src={require("../assets/felicidad.png")} className="emocion_semana" alt='' /></p>
              <p>26</p>
              <p>27</p>
              <p>28</p>
              <p>29</p>
              <p>30</p>
              <p>31</p>
            </div>
            <div class="calendar__dates center-element" id="dates">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendario;