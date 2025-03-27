const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando 🎉');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
