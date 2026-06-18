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
    res.sendStatus(200);
});
 
app.post('/consumo', (req, res) => {
    fabrica.generador.consumo = req.body;
    res.sendStatus(200);
});
 
app.post('/estadoGenerador', (req, res) => {
    fabrica.generador.estado = req.body;
    res.sendStatus(200);
});
 
app.post('/alarma', (req, res) => {
    fabrica.alarma = req.body;
    res.sendStatus(200);
});
 
app.post('/ciclos', (req, res) => {
    fabrica.prensa.ciclos = req.body;
    res.sendStatus(200);
});
 
app.post('/estadoPrensa', (req, res) => {
    fabrica.prensa.estado = req.body;
    res.sendStatus(200);
});
 
app.post('/estadoPuerta', (req, res) => {
    fabrica.puerta.estado = req.body;
    res.sendStatus(200);
});
 
app.post('/ultimoAcceso', (req, res) => {
    fabrica.puerta.ultimoAcceso = req.body;
    res.sendStatus(200);
});