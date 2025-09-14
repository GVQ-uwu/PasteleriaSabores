// Manejo de pestañas en la página "Nosotros"
const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab");

      // Quitar active a todo
      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(tab => tab.classList.remove("active"));

      // Activar la pestaña clicada
      button.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });

// Login y Registro
// ventanas.js
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button"); // Botones de pestañas
    const tabContents = document.querySelectorAll(".tab-content"); // Contenido de pestañas
    const tabLinks = document.querySelectorAll(".tab-link"); // Links internos entre login/registro

    function showTab(tabId) {
        // Ocultar todo
        tabContents.forEach(content => content.classList.remove("active"));
        tabButtons.forEach(btn => btn.classList.remove("active"));

        // Mostrar pestaña seleccionada
        document.getElementById(tabId).classList.add("active");
        document.querySelector(`.tab-button[data-tab="${tabId}"]`).classList.add("active");
    }

    // Al hacer clic en un botón de pestaña
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            showTab(tabId);
        });
    });

    // Al hacer clic en el enlace dentro del texto
    tabLinks.forEach(link => {
        link.addEventListener("click", () => {
            const tabId = link.getAttribute("data-tab");
            showTab(tabId);
        });
    });
});

// Formulario de contacto
const formCliente = document.getElementById("formCliente");
    const mensaje = document.getElementById("mensaje");

    formCliente.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();

        if (nombre === "" || correo === "") {
            mostrarMensaje("Por favor completa todos los campos", "error");
            return;
        }

        // Validar correo con regex simple
        const regexCorreo = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!regexCorreo.test(correo)) {
            mostrarMensaje("Ingresa un correo válido", "error");
            return;
        }

        mostrarMensaje("¡Gracias " + nombre + "! Tu mensaje fue enviado con éxito.", "success");
        formCliente.reset();
    });

    function mostrarMensaje(texto, tipo) {
        mensaje.textContent = texto;
        mensaje.style.display = "block";
        mensaje.style.padding = "8px";
        mensaje.style.borderRadius = "5px";
        mensaje.style.marginTop = "10px";
        mensaje.style.fontWeight = "bold";

        if (tipo === "success") {
            mensaje.style.backgroundColor = "#d4edda";
            mensaje.style.color = "#155724";
        } else {
            mensaje.style.backgroundColor = "#f8d7da";
            mensaje.style.color = "#721c24";
        }

        // Ocultar el mensaje después de 4 segundos
        setTimeout(() => {
            mensaje.style.display = "none";
        }, 4000);
    }