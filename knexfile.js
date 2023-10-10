const knex = require("knex")({
    client: "pg",
    connection: {
        host: "localhost",
        user: "postgres",
        port: 5432,
        password: "Mysql",
        database: "sprint",
    },
});

module.exports = knex;