let express = require('express');
let app = express();
let port = 8030;
let table = require('./collection.js');
require('./conn.js');
app.use(express.json()); //json() is a built express middleware that convert request body to JSON and used with post method.

let cors = require('cors');
app.use(cors());

// Registration part 
// i.e. sending registered details to the 'http://localhost:8030/register' api

app.get("/register", async (req,res)=>{
    let data = await table.find();
    res.send(data);
    
});

app.post("/register", async (req,res)=>{
    let data = new table(req.body);
    let result = await data.save();
    //to remove password field in response
    result = result.toObject();
    delete result.password
    res.send(result)
    console.log(data);
})

//***************************************************** */

// login check

app.post("/login", async (req,res)=>{
    let user = await table.findOne(req.body).select("-password").select("-user");
    // console.log(req.body.userId);

    if(req.body.userId && req.body.password){
            
        if(user){
            res.send(user);
        }else{
            res.send( {result:"no user found"})
        }

    }else{
        res.send({result : 'fill only userid and password'})
    }

})


app.listen(port,()=>{
    console.log(`listening in ${port}`);
})


