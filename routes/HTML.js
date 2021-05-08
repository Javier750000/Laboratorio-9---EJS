var path=require("path");
var mesas=require("../data/mesas.js");
var esperas=require("../data/esperas.js");

module.exports=function(app)
{
    app.get("/", function(req, res)
    {
        res.render("pages/home");
    });

    app.get("/tables", function(req, res)
    {
        res.render("pages/tables", {mesas, esperas});
    });

    app.get("/reserve", function(req, res)
    {
        res.render("pages/reserve");
    });
};