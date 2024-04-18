
import logo from './logo.svg';
import './App.css';

function App() {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission and create new appointment
  };

  return (
    <div className="App">
      <div id="root">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div class="container">
          <div class="row">
            <div class="one-half column">
              <h2>Crear mi Cita</h2>
              <form>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value="" />
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value="" />
                <label>Fecha</label>
                <input type="date" name="fecha" class="u-full-width" value="" />
                <label>Hora</label>
                <input type="time" name="hora" class="u-full-width" value="" />
                <label>Sintomas</label>
                <textarea name="sintomas" class="u-full-width"></textarea>
                <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
              </form>
            </div>
            <div className="one-half column">
              <div className="cita">
                <p>Mascota: <span>Nina</span></p>
                <p>Dueño: <span>Martin</span></p>
                <p>Fecha: <span>2021-08-05</span></p>
                <p>Hora: <span>08:20</span></p>
                <p>Sintomas: <span>Le duele la pierna</span></p>
                <button class="button elimnar u-full-width">Eliminar ×</button>
              </div>
              <div class="cita">
              <p>Mascota: <span>Sifon</span></p>
              <p>Dueño: <span>Flecha</span></p>
              <p>Fecha: <span>2023-08-05</span></p>
              <p>Hora: <span>09:24</span></p>
              <p>Sintomas: <span>Duerme mucho</span></p>
              <button class="button elimnar u-full-width">Eliminar ×</button>
            </div>
            <div class="cita">
              <p>Mascota: <span>Floki</span></p>
              <p>Dueño: <span>Ari</span></p>
              <p>Fecha: <span>2023-08-05</span></p>
              <p>Hora: <span>16:15</span></p>
              <p>Sintomas: <span>No está comiendo</span></p>
              <button class="button elimnar u-full-width">Eliminar ×</button>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
