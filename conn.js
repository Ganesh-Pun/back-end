let mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Major_Project").then(()=>{
    console.log("database connection successfull");
}).catch((er)=>{
    console.log("connection failed");
});
