const { Pool } = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "parola",
    database: "commbindatabase",
    host: "localhost",
    port: 5432
});

module.exports = pool;