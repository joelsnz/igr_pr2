const express = require('express');
const app = express();

app.use(express.json())

let fabrica = {
    modoFabrica: "normal",
    alarma: false,
    nivelEnergia: 100,
    puerta: {
        estado: "cerrada",
        ultimoAcceso: ""
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

app.post('/estadoPuerta', (req, res) => {
    fabrica.puerta.estado = req.body.puerta.estado;
    fabrica.puerta.ultimoAcceso = req.body.puerta.ultimoAcceso;
});

app.post('/estadoPrensa', (req, res) => {
    fabrica.prensa.estado = req.body.prensa.estado;
    fabrica.prensa.ciclos = req.body.prensa.ciclos;
});