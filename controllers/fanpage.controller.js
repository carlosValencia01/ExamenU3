const Fanpage = require("../models/fanpage.model.js");

let _fanpage;

const createFanpage= (req, res) => {
    const fanpage = req.body;
    _fanpage.create(fanpage)
        .then((data)=> {
            res.status(200);
            res.json({msg:"Fanpage creada correctamente", data: data});
        })
        .catch((err)=> {
            res.status(400);
            res.json({msg:"Error", err:err});
        })
}
//-----------------------------------------------------------
const findAll = (req,res) =>{
    _fanpage.find()
    .then((data) =>{
        res.status(200);
        res.json({
            data:data
        })
    })
    .catch((err)=>{
        res.status(400);
        res.json({
            msg:"Error al ejecutar la consulta",
            error:err
        })
    })
}
//----------------------------------------------------------
const findCalif = (req,res)=>{
    console.log(req.params.id);
    _fanpage.findOne({_id:req.params.id})
    
    .then((data) =>{
        res.status(200);
        let calif = data.calif.reduce((prev, curr) => prev + curr) / data.calif.length;
        res.json({
            data:calif
        })
    })
    .catch((err)=>{
        res.status(400);
        res.json({
            msg:"Error al ejecutar la consulta",
            error:err
        })
    }
)
}
//---------------------------------------------------------------------
const findComents = (req,res)=>{
    _fanpage.find({_id:req.params.id})
    .then((data) =>{
        res.status(200);
        res.json({
            data:data[0].coments
        })
    })
    .catch((err)=>{
        res.status(400);
        res.json({
            msg:"Error al ejecutar la consulta",
            error:err
        })
    }
)
}
//------------------------------------------------------------------------
const coment = (req,res) =>{
    const coment = req.body;
    const id = req.params.id;
    console.log(coment.coments);
    //update = db.ciudades.update({ciudad:"Zaragoza"},{$push:{monumentos:"Basílica del Pilar"}})
    _fanpage.findByIdAndUpdate({_id:id},{$push:{coments:coment.coments}},{new:true})
    .then((data) =>{
        res.status(200);
        res.json({
            msg:"Comentario realizado",
            data:data
        })
    })
    .catch((err) =>{
        res.status(400);
        res.json({
            msg:"Error al intentar comentar",
            error:err
        })
    })
}
//------------------------------------------------------------------------


module.exports = (Fanpage) => {
    _fanpage = Fanpage;
    return({
        createFanpage,
        findAll,
        findCalif,
        findComents,
        coment
    });
}