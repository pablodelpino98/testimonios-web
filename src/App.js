import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Testimonios de usuarios</h1>
        <Testimonio 
          nombre='Pablo del Pino Cabrera'
          pais='España'
          imagen='img1'
          alt='Foto de Pablo'
          cargo='Desarrollo de Aplicaciones Web'
          centro='IES Ana Luisa Benítez'
          testimonio='He aprendido Java, JavaScript, PHP y... ¡Ahora estoy aprendiendo React!'
        />
        <Testimonio 
          nombre='Tayri Santana González'
          pais='Australia'
          imagen='img2'
          alt='Foto de Tayri'
          cargo='Desarrollo de Aplicaciones Multiplataforma'
          centro='IES El Rincón'
          testimonio='¡He aprendido multitud de lenguajes de programación pero sin duda me quedo con React!'
        />
                <Testimonio 
          nombre='Mario Moreno García'
          pais='EEUU'
          imagen='img3'
          alt='Foto de Mario'
          cargo='Administración de Sistemas Informáticos en Red'
          centro='IES 7 Palmas'
          testimonio='¡Yo solo sé de Routers, Swicths y cables RJ-45 pero React se ve interesante!'
        />
      </div>
    </div>
  );
}

export default App;