const express = require('express');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const sequelize = require('./config/database');
require('dotenv').config();


const PORT = process.env.PORT || 3001;


app.use(express.json());

// Montar rutas
app.use('/api', routes);


app.get('/', (req, res) => {
  res.send('API funcionando 🎉');
});

// Después de todas las rutas
app.use(errorHandler);

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa 📡');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });
