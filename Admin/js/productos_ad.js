// Lista de productos
const productos = [
  { codigo: "TC001", nombre: "Torta Cuadrada de Chocolate", categoria: "Tortas Cuadradas", precio: 45000 },
  { codigo: "TT001", nombre: "Torta Circular de Vainilla", categoria: "Tortas Circulares", precio: 40000 },
  { codigo: "PI001", nombre: "Mousse de Chocolate", categoria: "Postres Individuales", precio: 5000 }
];

// Función para mostrar productos en la tabla
function mostrarProductos() {
  const tabla = document.getElementById("tablaProductos");
  tabla.innerHTML = ""; // limpia antes de volver a llenar

  productos.forEach((p, index) => {
    const fila = ` 
      <tr>
        <td>${p.codigo}</td> 
        <td>${p.nombre}</td>
        <td>${p.categoria}</td>
        <td>$${p.precio.toLocaleString()}</td>
        <td>
          <button onclick="editarProducto(${index})">✏️ Editar</button>
          <button onclick="eliminarProducto(${index})">🗑️ Eliminar</button>
        </td>
      </tr>
    `;
    tabla.innerHTML += fila;
  });
}

// Función para eliminar producto
function eliminarProducto(i) {
  productos.splice(i, 1); // elimina 1 producto en posición i
  mostrarProductos(); // refresca la tabla
}

// Función para editar producto
function editarProducto(i) {
  alert("Editar producto: " + productos[i].nombre);
}

// Función para agregar producto 
document.getElementById("agregarBtn").addEventListener("click", () => {
  productos.push({
    codigo: "NEW" + (productos.length + 1),
    nombre: "Nuevo Producto",
    categoria: "Por Definir",
    precio: 0
  });
  mostrarProductos();
});
 
// Mostrar al cargar
document.addEventListener("DOMContentLoaded", mostrarProductos);