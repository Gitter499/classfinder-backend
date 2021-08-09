const StormDB = require("stormdb");

// start db with "./db.stormdb" storage location
const engine = new StormDB.localFileEngine("./db/db.stormdb");
const db = new StormDB(engine);

module.exports = db;
