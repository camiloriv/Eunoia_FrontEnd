import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Bienvenida from './components/bienvenida';
import Muro from './components/muro';
import Pregunta from './components/pregunta';
import Home from './components/home';
import Configuraciones from './components/configuraciones';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route path="/muro" element={<Muro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/configuraciones" element={<Configuraciones />} />
          <Route path="/pregunta" element={<Pregunta />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
