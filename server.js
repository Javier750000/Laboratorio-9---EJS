const config=require("./config/config.json");
var express=require("express");
var path=require("path");
var app=express();
var PORT=process.env.PORT||config.node_port||3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set(express.static('/public'));

require("./routes/API")(app);
require("./routes/HTML")(app);

app.listen(PORT, function()
{
  console.log("App listening on PORT: "+PORT);
});