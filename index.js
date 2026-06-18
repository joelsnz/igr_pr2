const express = require('express');
const app = express();

app.use(express.json())

let estadoPuerta = "cerrada";
let ultimoAcceso = "";

app.get('/estadoPuerta', (req, res) => {
    res.json({
        estado: estadoActual,
        ultimoAcceso: ultimoAcceso
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor funcionando");
});

app.post('/estadoPuerta', (req, res) => {
    estadoActual = req.body.estado;
    ultimoAcceso = req.body.ultimoAcceso;
});