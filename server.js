require('dotenv').config();
const express = require('express');
const path = require('path');
const { dbConnection } = require('./src/infrastructure/database/config');

const app = express();

// 1. Conexión a la Base de Datos
dbConnection();

// 2. Middlewares básicos
app.use(express.json());

// 3. RUTA DE INICIO (Prioridad para Selenium)
// Esta ruta se ejecuta ANTES que el static para forzar el login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// 4. Servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// 5. Rutas de la API para el CRUD
app.use('/api/products', require('./src/presentation/routes/productRoutes'));

// 6. Configuración del Puerto
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('-------------------------------------------');
    console.log(`🚀 Servidor listo para pruebas de Selenium`);
    console.log(`📍 URL: http://localhost:${port}`);
    console.log('-------------------------------------------');
});