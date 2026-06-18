const express = require('express');
const app = express();

app.use(express.json())

let fabrica = {
    modoFabrica: "normal",
    alarma: false,
    nivelEnergia: 100,
    puerta: {
        estado: "cerrada",
        ultimoAcceso: "no acceso"
    },
    prensa: {
        estado: "apagada",
        ciclos: 0
    },
    generador: {
        estado: "normal",
        consumo: 0
    }
};

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor funcionando");
});

app.get('/estado', (req, res) => {
    res.json(fabrica);
});

app.post('/nivelEnergia', (req, res) => {
    fabrica.nivelEnergia = req.body;
});

app.post('/consumo', (req, res) => {
    fabrica.generador.consumo = req.body;
});

app.post('/estadoGenerador', (req, res) => {
    fabrica.generador.estado = req.body;
});

app.post('/alarma', (req, res) => {
    fabrica.alarma = req.body;
});

app.post('/ciclos', (req, res) => {
    fabrica.prensa.ciclos = req.body;
});

app.post('/estadoPrensa', (req, res) => {
    fabrica.prensa.estado = req.body;
});

app.post('/estadoPuerta', (req, res) => {
    fabrica.puerta.estado = req.body;
});

app.post('/ultimoAcceso', (req, res) => {
    fabrica.puerta.ultimoAcceso = req.body;
});