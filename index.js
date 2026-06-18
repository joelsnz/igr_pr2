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

app.post('/estado', (req, res) => {
    fabrica = req.body;
});