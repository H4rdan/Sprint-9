const express = require("express");
const router = express.Router();

const {
    taskAll,
    taskAllBd,
    taskAdd,
    taskUpdate,
} = require("../controllers/listaDeTareasController");

router.get(
    "/task",
    taskAll
);

router.get(
    "/taskBd",
    taskAllBd
);

router.post(
    "/task/taskAdd",
    taskAdd
);

router.put(
    "/task/taskUpdate/:id",
    taskUpdate
);

module.exports = router;