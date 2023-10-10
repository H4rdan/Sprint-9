const task = require("../data/task");
const knex = require("../knexfile");

const taskAll = (req, res) => {
    res.json(task);
};

const taskAllBd = async (req, res) => {
    try {

        const tareas = await knex("tareas").select("*");

        res.json(tareas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener las tareas" });
    }
}

const taskAdd = async (req, res) => {
    try {

        const { titulo, prioridad_id, usuarios_id, completado } = req.body;

        await knex("tareas").insert({
            titulo,
            prioridad_id,
            usuarios_id,
            completado,
        });

        res.status(201).json({ message: "Tarea creada exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear la tarea" });
    }
}

const taskUpdate = (req, res) => {
    const tareas_id = Number(req.params.id);
    const {
        titulo,
        prioridad_id,
        usuarios_id,
        completado,
    } = req.body;
    knex("tareas")
        .where("tareas_id", tareas_id)
        .update({
            titulo,
            prioridad_id,
            usuarios_id,
            completado,
        })
        .then(() => {
            res.status(200).json({ message: "Tarea actualizada con éxito" });
        })
        .catch((error) => {
            console.error("Error al actualizar tarea:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        });
};

module.exports = { taskAll, taskAllBd, taskAdd, taskUpdate }