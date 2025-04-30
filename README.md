# 📝 React Notes App

Esta aplicación fue creada con el propósito de **poner en práctica conocimientos fundamentales de React y su ecosistema** moderno. Permite gestionar una lista de notas, agregarlas, editarlas y marcarlas como completadas.
## LINK https://santiagoperezkay.github.io/notes-app/

## 🚀 ¿Qué hace la app?

- ✅ Permite agregar notas con título y estado de completado.
- ✅ Se pueden editar las notas en tiempo real.
- ✅ Las notas se mantienen en memoria (sin backend).
- ✅ Posee navegación entre páginas (Home y Notes).
- ✅ Usa estilos responsivos con Tailwind CSS.

---

## 🧠 Tecnologías y conceptos puestos en práctica

### React Core
- Uso de **JSX** para crear componentes.
- Componentes funcionales y reutilizables.
- Manejo de estado con `useState`.
- Compartir estado global mediante `useContext` (Context API).
- Manejo de formularios controlados.
- Eventos como `onChange` y `onSubmit`.
- Renderizado dinámico de listas con `.map()` y uso de `key`.

### React Router
- Configuración de rutas con `BrowserRouter`, `Routes` y `Route`.
- Navegación entre páginas con `Link`.

### Arquitectura y organización
- Separación del código en:
  - `components/`: Componentes reutilizables.
  - `pages/`: Vistas principales.
  - `contexts/`: Lógica global compartida.
- Un único punto de entrada (`App.jsx`) donde se orquestan rutas y estructura.

### Estilos
- Uso de **Tailwind CSS** para estilizado rápido y flexible.
- Diseño responsivo y modo oscuro (`dark mode`).
- Clases utilitarias para espaciado, colores, sombras y más.

### Buenas prácticas
- Evitar duplicados al agregar nuevas notas.
- Validación simple de formularios.
- Separación clara de responsabilidades por componente.

---

## 📁 Estructura del proyecto
