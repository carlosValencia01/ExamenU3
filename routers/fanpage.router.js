const router = require("express").Router();

module.exports = (wagner) => {
    const fanpageCtrl = wagner.invoke((Fanpage) => 
    require("../controllers/fanpage.controller")(Fanpage));

    router.post("/",(req,res) =>{
        fanpageCtrl.createFanpage(req,res);
    })

    router.get("/",(req,res) =>{
        fanpageCtrl.findAll(req,res);
    })

    router.put("/coments/:id",(req,res) =>{
        fanpageCtrl.coment(req,res);
    })

    router.get("/coments/:id",(req,res) =>{
        fanpageCtrl.findComents(req,res);
    })

    router.get("/calif/:id",(req,res) =>{
        fanpageCtrl.findCalif(req,res);
    })    

    return router;
}