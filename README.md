# Mi Sitio Web Personal

Este proyecto es un sitio web personal que muestra mi experiencia en marketing, growth y consultoría. Incluye un blog, un portafolio de proyectos y un formulario de contacto para servicios de consultoría.

## Tecnologías utilizadas

- Frontend: Next.js, React, TailwindCSS
- Backend: Node.js, Express, MongoDB
- Autenticación: JWT

## Configuración del proyecto

1. Clona el repositorio:
   ```
   git clone https://github.com/tu-usuario/mi-sitio-web-personal.git
   cd mi-sitio-web-personal
   ```

2. Instala las dependencias:
   ```
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. Configura las variables de entorno:
   - Copia el archivo `.env.example` a `.env` en la carpeta raíz y en la carpeta `backend`
   - Actualiza las variables con tus propios valores

4. Inicia la base de datos MongoDB

5. Inicia el servidor backend:
   ```
   cd backend
   npm run dev
   ```

6. Inicia el servidor frontend:
   ```
   cd frontend
   npm run dev
   ```

7. Abre tu navegador y visita `http://localhost:3000`

## Estructura del proyecto

- `frontend/`: Contiene el código del cliente (Next.js)
- `backend/`: Contiene el código del servidor (Node.js/Express)
  - `api/`: Rutas de la API
  - `models/`: Modelos de la base de datos
  - `services/`: Servicios para lógica de negocio
  - `config/`: Configuraciones (ej. conexión a la base de datos)

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)