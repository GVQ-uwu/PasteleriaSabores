# 🍰 Pastelería Mil Sabores

Un sistema web completo para la gestión de una pastelería, que incluye tienda online para clientes y panel administrativo para la gestión de productos y usuarios.

## 📋 Descripción del Proyecto

**Pastelería Mil Sabores** es una aplicación web desarrollada para una pastelería que permite a los clientes navegar por el catálogo de productos, agregar items al carrito de compras, y realizar pedidos. Además, incluye un sistema administrativo para gestionar productos, usuarios y estadísticas de la tienda.

## 🚀 Características Principales

### 🛍️ Tienda Online (Cliente)
- **Catálogo de Productos**: Visualización de tortas, postres y productos especiales
- **Sistema de Filtros**: Filtrado por categorías (Tortas Cuadradas, Circulares, Postres Individuales, etc.)
- **Carrito de Compras**: Funcionalidad completa con localStorage
- **Gestión de Cantidades**: Límite de 5 unidades por producto
- **Autenticación**: Sistema de login y registro de usuarios
- **Navegación Intuitiva**: Barra lateral con acceso rápido a todas las secciones

### 🔧 Panel Administrativo
- **Acceso Restringido**: Login exclusivo para administradores (@admin)
- **Gestión de Productos**: CRUD completo de productos
- **Gestión de Usuarios**: Administración de cuentas de cliente
- **Dashboard**: Panel de control centralizado

## 📁 Estructura del Proyecto

```
Proyecto-Pasteleria-Sabores/
├── acceso-admin.html              # Página de login para administradores
├── Admin/                         # Panel administrativo
│   ├── css/
│   │   └── estilos.css           # Estilos del panel admin
│   ├── js/
│   │   ├── productos.js          # Lógica de gestión de productos
│   │   └── usuario.js            # Lógica de gestión de usuarios
│   ├── home-ad.html              # Dashboard principal del admin
│   ├── productos-ad.html         # Gestión de productos
│   └── usuarios.html             # Gestión de usuarios
├── Tienda/                       # Tienda online para clientes
│   ├── Img/                      # Imágenes de productos
│   │   ├── iconPasteleria.png    # Favicon de la tienda
│   │   ├── Torta Cuadrada de Chocolate.png
│   │   ├── Torta Cuadrada de Frutas.png
│   │   ├── Torta Circular de Vainilla.png
│   │   ├── Torta Circular de Manjar.png
│   │   ├── Mousse de Chocolate.png
│   │   ├── Tiramisu Clasico.png
│   │   ├── Brownie Sin Gluten.png
│   │   ├── Cheesecake Sin Azucar.png
│   │   ├── Empanada de Manzana.png
│   │   ├── Galletas Veganas de Avena.png
│   │   ├── Pan Sin Gluten.png
│   │   ├── Tarta de Santiago.png
│   │   ├── Torta Especial de Boda.png
│   │   ├── Torta Especial de Cumpleanos.png
│   │   ├── Torta Sin Azucar de Naranja.png
│   │   └── Torta Vegana de Chocolate.png
│   ├── css/
│   │   ├── estilos.css           # Estilos principales
│   │   ├── carrito.css           # Estilos del carrito
│   │   └── ventanas.css          # Estilos de ventanas modales
│   ├── js/
│   │   ├── productos-carrito-filtro.js  # Lógica principal de productos y carrito
│   │   ├── filtro-productos.js   # Sistema de filtros
│   │   └── ventanas.js           # Manejo de ventanas modales
│   ├── inicio.html               # Página principal de la tienda
│   ├── productos.html            # Catálogo de productos
│   ├── carrito.html              # Página del carrito de compras
│   ├── login.html                # Login y registro de clientes
│   ├── nosotros.html             # Información de la empresa
│   └── contacto.html             # Página de contacto
└── .vscode/
    └── settings.json             # Configuración del editor
```

## 🛒 Catálogo de Productos

El sistema incluye **16 productos** organizados en las siguientes categorías:

### 🧁 Tortas Cuadradas
- Torta Cuadrada de Chocolate - $45.000
- Torta Cuadrada de Frutas - $50.000

### 🎂 Tortas Circulares
- Torta Circular de Vainilla - $40.000
- Torta Circular de Manjar - $42.000

### 🍮 Postres Individuales
- Mousse de Chocolate - $5.000
- Tiramisú Clásico - $5.500

### 🚫🍬 Productos Sin Azúcar
- Torta Sin Azúcar de Naranja - $48.000
- Cheesecake Sin Azúcar - $47.000

### 🥖 Pastelería Tradicional
- Empanada de Manzana - $3.000
- Tarta de Santiago - $6.000

### 🌾 Productos Sin Gluten
- Brownie Sin Gluten - $4.000
- Pan Sin Gluten - $3.500

### 🌱 Productos Veganos
- Torta Vegana de Chocolate - $50.000
- Galletas Veganas de Avena - $4.500

### ✨ Tortas Especiales
- Torta Especial de Cumpleaños - $55.000
- Torta Especial de Boda - $60.000

## 🔐 Sistema de Autenticación

### Clientes
- Registro e inicio de sesión estándar
- Acceso a todas las funcionalidades de la tienda

### Administradores
- **URL de acceso**: `/acceso-admin.html`
- **Formato de email**: Debe terminar en `@admin`
- **Contraseña mínima**: 6 caracteres
- **Ejemplos de cuentas admin**:
  - `admin@admin` / `admin123`
  - `administrador@admin` / `admin123`
  - `superuser@admin` / `admin123`

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Almacenamiento**: LocalStorage para carrito y datos temporales
- **Fuentes**: Google Fonts (Pacifico, Lato)
- **Iconos**: Emojis y caracteres Unicode
- **Responsive Design**: Compatible con dispositivos móviles

## 🚀 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desarrollo)

### Instalación
1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/GVQ-uwu/Proyecto-Pasteleria-Sabores.git
   cd Proyecto-Pasteleria-Sabores
   ```

2. **Abrir en navegador**:
   - Opción 1: Abrir directamente `Tienda/inicio.html`
   - Opción 2: Usar un servidor local:
     ```bash
     # Con Python
     python -m http.server 8000
     
     # Con Node.js (http-server)
     npx http-server
     
     # Con PHP
     php -S localhost:8000
     ```

3. **Acceder a la aplicación**:
   - **Tienda**: `http://localhost:8000/Tienda/inicio.html`
   - **Admin**: `http://localhost:8000/acceso-admin.html`

## 📱 Funcionalidades Detalladas

### Sistema de Carrito
- **Persistencia**: Los datos se mantienen usando LocalStorage
- **Límites**: Máximo 5 unidades por producto
- **Gestión**: Botones + y - para modificar cantidades
- **Cálculo automático**: Total actualizado en tiempo real
- **Limpieza**: Opción para vaciar carrito completo

### Sistema de Filtros
- **Filtro por categoría**: Dropdown con todas las categorías
- **Filtro dinámico**: Actualización instantánea de productos
- **Opción "Todos"**: Mostrar todos los productos

### Navegación
- **Barra lateral fija**: Acceso rápido a todas las secciones
- **Breadcrumbs**: Navegación contextual
- **Enlaces internos**: Navegación fluida entre páginas

## 🎨 Diseño y UX

### Paleta de Colores
- **Principal**: Tonos rosados y pasteles
- **Acentos**: Colores cálidos para botones y enlaces
- **Texto**: Grises oscuros para legibilidad

### Tipografía
- **Títulos**: Pacifico (fuente decorativa)
- **Cuerpo**: Lato (fuente legible)

### Elementos Visuales
- **Emojis**: Uso consistente para mejorar UX
- **Imágenes**: Productos en alta calidad PNG
- **Iconos**: Integrados en la navegación

## 🔧 Configuración del Proyecto

### Variables Importantes
```javascript
// Límite de productos en carrito
const LIMITE_CANTIDAD = 5;

// Categorías disponibles
const CATEGORIAS = [
    "Tortas Cuadradas",
    "Tortas Circulares", 
    "Postres Individuales",
    "Productos Sin Azúcar",
    "Pastelería Tradicional",
    "Productos Sin Gluten",
    "Productos Vegana",
    "Tortas Especiales"
];
```

### Estructura de Datos
```javascript
// Formato de producto
{
    id: number,
    codigo: string,
    categoria: string,
    nombre: string,
    precio: number,
    img: string
}
```

## 🐛 Solución de Problemas

### Problemas Comunes

1. **Las imágenes no cargan**:
   - Verificar que las rutas en `productos-carrito-filtro.js` coincidan con los archivos en `/Tienda/Img/`
   - Asegurar que el servidor web tenga acceso a la carpeta de imágenes

2. **El carrito no persiste**:
   - Verificar que localStorage esté habilitado en el navegador
   - Comprobar que no haya errores de JavaScript en la consola

3. **No se puede acceder al panel admin**:
   - Verificar que el email termine en `@admin`
   - Asegurar que la contraseña tenga al menos 6 caracteres

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork del repositorio
2. Crear una rama para la nueva funcionalidad
3. Realizar los cambios necesarios
4. Crear un Pull Request con descripción detallada

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👥 Créditos

- **Desarrollador**: GVQ-uwu
- **Proyecto**: Sistema de Pastelería Mil Sabores
- **Año**: 2023

## 📞 Contacto

Para soporte o consultas sobre el proyecto:
- **GitHub**: [@GVQ-uwu](https://github.com/GVQ-uwu)
- **Repositorio**: [Proyecto-Pasteleria-Sabores](https://github.com/GVQ-uwu/pasteleriaSabores.git)

---

⭐ Si este proyecto te fue útil, no olvides darle una estrella en GitHub!

