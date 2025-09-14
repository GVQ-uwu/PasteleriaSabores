// Lista de usuarios 
const usuarios = [
  { run: "20123456K", nombre: "Ana Pérez", correo: "ana.perez@duoc.cl", rol: "Vendedor" },
  { run: "19876543J", nombre: "Carlos Soto", correo: "carlos.soto@gmail.com", rol: "Cliente" },
  { run: "19011222K", nombre: "María Torres", correo: "maria.torres@profesor.duoc.cl", rol: "Administrador" }
];

// Mostrar usuarios en la tabla
function mostrarUsuarios() {
  const tabla = document.getElementById("tablaUsuarios");
  tabla.innerHTML = ""; // limpia antes de volver a llenar

  usuarios.forEach((u, index) => {
    const fila = ` 
      <tr>
        <td>${u.run}</td>
        <td>${u.nombre}</td>
        <td>${u.correo}</td>
        <td>${u.rol}</td>
        <td>
          <button onclick="editarUsuario(${index})">✏️ Editar</button>
          <button onclick="eliminarUsuario(${index})">🗑️ Eliminar</button>
        </td>
      </tr>
    `;
    tabla.innerHTML += fila;
  });
}

// Eliminar usuario
function eliminarUsuario(i) {
  usuarios.splice(i, 1);
  mostrarUsuarios();
}

// Editar usuario 
function editarUsuario(i) {
  alert("Editar usuario: " + usuarios[i].nombre);
}

// Agregar usuario de ejemplo
document.getElementById("agregarUsuarioBtn").addEventListener("click", () => {
  usuarios.push({
    run: "NEW" + (usuarios.length + 1),
    nombre: "Nuevo Usuario",
    correo: "nuevo.usuario@gmail.com",
    rol: "Cliente"
  });
  mostrarUsuarios();
});

// Mostrar al cargar
document.addEventListener("DOMContentLoaded", mostrarUsuarios);