const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ventaRoutes = require('./routes/venta');

const app = express();
app.use(bodyParser.json());

// Conectar a la base de datos
mongoose.connect('mongodb://localhost:27017/tienda', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/ventas', ventaRoutes);

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});