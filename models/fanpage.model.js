const mongoose = require('mongoose');

let fanpageSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type:String
    },
    keywords:[{
        type: String,
        required: true,
    }],
    coments:[{
        type: String,
        required: true,
    }],
    calif:[{
        type: Number,
        required: true,
    }]
});

const fanpageModel = mongoose.model('Fanpage', fanpageSchema, 'fanpages');
module.exports = fanpageModel;