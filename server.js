require('dotenv').config();
const express = require('express');
const { dbConnection } = require('./src/infrastructure/database/config');
const app = express();
dbConnection();
app.use(express.json());
app.get('/', (req, res) => res.send('SUPERMERCADO-API-READY'));
app.use('/api/products', require('./src/presentation/routes/productRoutes'));
app.listen(process.env.PORT, () => console.log('Server running'));