const express = require('express');
const path = require('path');
const app = express();

app.listen(3030,()=> console.log("Escuchando al puerto 3030"));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/vistas/index.html'));
})
app.get('/babbage',(req,res)=>{
    res.sendFile(path.join(__dirname,'/vistas/babbage.html'));
})
app.get('/berners-lee',(req,res)=>{
    res.sendFile(path.join(__dirname,'/vistas/berners-lee.html'));
})
app.get('/berners-lee',(req,res)=>{
     res.sendFile(path.join(__dirname,'/vistas/berners-lee.html'));
  
});
app.get('/clarke.html.',(req,res)=>{
    res.sendFile(path.join(__dirname,'/vistas/clarke'));
 
});
app.get('/clarke.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'/vistas/clarke'));
 
});