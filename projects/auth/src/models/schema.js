var jugglingdb = require("jugglingdb");
var jugglingdbPostgress = require("jugglingdb-postgres");
var Schema = jugglingdb.Schema;
var schema = new Schema("postgres", {
    database: "TheBest",
    username: "TheBest",
    host: "localhost",
    port: 5432
});
schema.automigrate();
module.exports = ("schema", schema);