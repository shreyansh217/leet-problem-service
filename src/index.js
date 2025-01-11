const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/server.config');


const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.get('/ping', (req,res)=>{
    return res.json({message:`problem sevice is alive`});
})

app.listen(PORT, ()=>{
    console.log(`server is runnig ${4000} port`)
})
