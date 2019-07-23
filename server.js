const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const wagner = require("wagner-core");

let app = express();

require("./models/models")(wagner);

app.use(morgan("dev"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-Width, Content-Type, Accept, Authorization");
    next();
})

const urlBase = "/examen/";

const fanpage = require("./routers/fanpage.router")(wagner);

app.use(urlBase+"fanpage",fanpage);

module.exports  = app;