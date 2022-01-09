const mongoose = require('mongoose')

function time(){
    let date = new Date();
    let day = date.getDay()+2;
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    return `${day}.${month}.${year} - ${hour}:${minute}`;
}

const schemaExercise = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        minLength: 2,
        trim: true,
    },
    description:{
        type: String,
        required: true,
        minLength: 2,
        trim: true,
    },
    icon: {
        type: String,
    }, 
    status: {
        type: String,
       enum:['draft','publish','deleted'],
       default: 'draft',

    },
    creator:{
        type: mongoose.SchemaTypes.ObjectId,
        // required: true
    },
    createDate:{
        type:Date,
        default:Date.now(),
        visible:false,
    },
    createDateShow:{
        type:String,
        default:time()
    },
    exerciseType:{
        type: String,
       enum:['short','rolling','tutorial'],
    },
    difficulty:{
        type: String,
       enum:['easy','medium','hard'],
       required: true,
    },
    tags: [String]
        ,
    programLanguage:{
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    developingTime:{
        type: String,
    },
    content:{
       content:{
           type: String,
           required: true
       },
       sources:[{
           name:String,
           url:String,  
           }]
    },
    solution:{
        type: String,
        // required: true,
    },
})

module.exports = mongoose.model('exercise', schemaExercise)