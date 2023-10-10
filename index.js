const express = require("express");
const listaDeTareasRoutes = require("./routes/listaDeTareasRoutes");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(bodyParser.json());


app.use("/api", listaDeTareasRoutes)

app.get("/api/*", (req, res) => {
    res.status(404).json({
        error:
            "El recurso que quiere consumir no existe, revise los datos de la url",
    });
});

app.listen(8000, () => {
    console.log("Servidor levantado y escuchando en el puerto 8000");
});