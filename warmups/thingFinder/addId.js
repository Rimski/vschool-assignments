var id = 7;
var addId = function (req, res, next) {
    if (req.method === "POST") {
        req.body.id = id;
        id++;
    }
    next();
}
module.exports = addId;