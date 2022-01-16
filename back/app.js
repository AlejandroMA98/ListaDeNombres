const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequileze = require('./db/conexion');
const nameView = require('./view/nameView');

const app = express();

app.use(express.json())
app.use(cors());

async function serverStart() {
    try {
        await sequileze.authenticate();
        console.log("Conexión estabilizada correctamente")
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
    }
}

serverStart();

//Inicia vista
nameView(app);

