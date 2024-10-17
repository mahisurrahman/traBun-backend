require('dotenv').config();

const {app} = require("./app");
const connectDb = require("./database/database");
const routerManager = require('./routerManager');
const port = process.env.PORT || 8000;

connectDb().then((res)=>{
    app.get('/', (req, res)=>{
        res.send("TraBun's Backend Running Smoothly");
    });

    app.listen((port), ()=>{
        console.log(`Server Running on Port ${port}`);
    });

    routerManager();
}).catch((error)=>{
    console.log("DB Connection Failed", error);
})