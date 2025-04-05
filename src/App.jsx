import React, { useState, useEffect } from "react"; // Importamos React
import DatosEmpleados from "./DatosEmpleados"; // Importamos el componente DatosEmpleados

function App() {
  const [empleados, setEmpleados] = useState([]); // Almacenamos los empleados
  const [numEmpleados, setNumEmpleados] = useState(0); // Almacenamos el número de empleados

  // Función para obtener empleados de la API
  const mostrarEmpleados = async () => {
    // Generamos un número aleatorio entre 5 y 10
    const random = Math.floor(Math.random() * (11 - 5)) + 5;
    // Creamos un array vacío para almacenar a los empleados
    const nuevosEmpleados = [];
    
    // Bucle para generar empleados según el número random sacado anteriormente
    for (let i = 0; i < random; i++) {
      // Llamamos a la API 
      const api = await fetch("https://randomuser.me/api/");
      // Obtenemos los datos de la API en formato json
      const data = await api.json();
      // Se crea un objeto para cada empleado con sus datos correspondientes según la API
      const empleado = {
        id: data.results[0].login.uuid,
        name: data.results[0].name.first + " " + data.results[0].name.last,
        email: data.results[0].email,
        phone: data.results[0].phone,
        img: data.results[0].picture.large
      };
      // Añadimos los empleados al array
      nuevosEmpleados.push(empleado);
    }
    // Actualizamos con los nuevos empleados
    setEmpleados(nuevosEmpleados);
    // Actualizamos el número de empleados generado
    setNumEmpleados(nuevosEmpleados.length);
  };

  // Función para eliminar los empleados cuando se haga click al botón
  const handleDelete = (id) => {
    // Filtramos el empleado con el id que hemos clickado
    const nuevosEmpleados = empleados.filter(empleado => empleado.id !== id);
    // Actualizamos de vuelta los campos sin el empleado
    setEmpleados(nuevosEmpleados);
    setNumEmpleados(nuevosEmpleados.length);
  };

  // Función para mostrar los empleados
  const handleMostrar = () => {
    mostrarEmpleados();
  };

  // Cargamos los empleados cuando se ejecute la página
  useEffect(() => {
    mostrarEmpleados();
  }, []);

  return (
    <main>
        <section className="container">
            <h3>Tenemos una plantilla de {numEmpleados} trabajadores</h3>
            <DatosEmpleados empleados={empleados} handleDelete={handleDelete} />
            {numEmpleados === 0 && (
                <button className="contratar" onClick={handleMostrar}>Contratar</button>
            )}
        </section>
    </main>
  );
}

// Exportamos el componente para usarlo en main
export default App;
