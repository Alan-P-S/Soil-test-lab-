import express from 'express';

const app = express();


app.get('/',(req,res)=>{
    res.send("Welcome to our page");
})

app.listen(3000,()=>{
    console.log("Server Started:");
})