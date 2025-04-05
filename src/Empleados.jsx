import React from "react"; // Importamos React


// Componente para mostrar los datos de cada empleado
function Empleados({ empleados, handleDelete }) {
  return (
    // Creamos la estructura html para cada empleado con sus datos correspondientes que hemos pasado como props
    // Creamos un onClick en el botón eliminar para que cuando se le de elimine el id del empleado
    <article className="person">
      <img src={empleados.img} alt={empleados.name} />
      <div>
        <h4>{empleados.name}</h4>
        <p>{empleados.email}</p>
        <p>{empleados.phone}</p>
      </div>
      <button type="button" className="delete-btn" onClick={() => handleDelete(empleados.id)}>
        <img src="./src/trash.png" alt="Eliminar" />
      </button>
    </article>
  );
}
// Exportamos el componente para usarlo en DatosEmpleados
export default Empleados;
