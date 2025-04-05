import React from "react"; // Importamos React
import Empleados from "./Empleados"; // Importamos el componente Empleados

// Componente que recibe la lista de los empleados y el botón de eliminar
function DatosEmpleados({ empleados, handleDelete }) {
  return (
    // Mostramos un componente Empleado por cada empleado que tengamos
    <>
      {empleados.map(empleados => (
        // Pasamos cada empleado y su botón de eliminar
        <Empleados key={empleados.id} empleados={empleados} handleDelete={handleDelete} />
      ))}
    </>
  );
}
// Exportamos el componente para usarlo en App
export default DatosEmpleados;
