const mongoose  = require("mongoose");

var blogSchema = new mongoose.Schema({
    title           :{type:String,required:'Cannot be empty'},
    comSentence     :{type:String,required:'Cannot be empty'},
    comImage        :{type:String,required:'Cannot be empty'},
    blog            :{type:String,required:'Cannot be empty'},
    Date            :{type:Date,  default :Date.now}
});

module.exports  = mongoose.model("Blog",blogSchema);