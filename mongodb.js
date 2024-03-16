const mongoose = require("mongoose");
let compass_url='mongodb://localhost:27017/sample';
let mongodb_url ='mongodb+srv://swetha:swetha@swe.h2oj0ve.mongodb.net/sommu?retryWrites=true&w=majority&appName=swe'

mongoose.connect( mongodb_url).then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
});