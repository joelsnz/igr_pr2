const express = require('express');
const app = express();

app.use(express.json())

let estadoPuerta = "cerrada";
let ultimoAcceso = "";

let estadoPrensa = "apagada";
let ciclos = -1;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor funcionando");
});

app.get('/estadoPuerta', (req, res) => {
    res.json({
        estado: estadoPuerta,
        ultimoAcceso: ultimoAcceso
    });
});

app.post('/estadoPuerta', (req, res) => {
    estadoPuerta = req.body.estado;
    ultimoAcceso = req.body.ultimoAcceso;
});

app.get('/estadoPrensa', (req, res) => {
    res.json({
        estado: estadoPrensa,
        ciclos: ciclos
    });
});

app.post('/estadoPrensa', (req, res) => {
    estadoPrensa = req.body.estado;
    ciclos = req.body.ciclos;
});