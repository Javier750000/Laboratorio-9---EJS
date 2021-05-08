var mesas=require("../data/mesas.js");
var esperas=require("../data/esperas.js");

module.exports=function(app)
{
  app.get("/api/tables", function(req, res)
  {
    res.json(mesas);
  });

  app.get("/api/waitlist", function(req, res)
  {
    res.json(esperas);
  });

  app.post("/api/tables", function(req, res)
  {
    if (mesas.length>=5)
    {
      esperas.push(req.body);
      res.json(false);
    }
    else
    {
      mesas.push(req.body);
      res.json(true);
    }
  });

  app.post("/api/clear", function(req, res)
  {
    mesas.length=0;
    esperas.length=0;
    res.json({OK: true});
  });
};