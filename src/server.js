const express = require ('express');
const app = express();
const port = 8082;
app.get('/syaHello',(req, res)=>{
    res.header("Access-Control-Allow-Origin", "*"); 
    res.send("hello express");
})
app.listen(port, ()=> console.log('App is listen to http://localhost:8082/'))
