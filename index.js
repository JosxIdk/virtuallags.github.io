const express = require('express');
const path = require('node:path');
const app = express();

// Servir archivos estáticos desde el directorio 'public'
app.use("/public",express.static("public"))

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port =80;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
