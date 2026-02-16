// IMPORTING REQUIREMENTS
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3333;
const axios = require('axios');
const {exec} = require("child_process");
const { stderr } = require('process');


// MIDDLEWARES
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Homepage of CyberForge")
});

app.post("/nmap",(req,res)=>{
    const {ip} = req.body;
    exec(`nmap -Pn -p- --open -T4 ${ip}`,{ maxBuffer: 1024 * 1024 * 10 },(err,stdout,stderr)=>{
        if(err) return res.send(err.message)
        res.send(stdout || stderr)
    })
})

app.post("/ffuf",(req,res)=>{
    const {ip} = req.body;
    exec(`ffuf -u ${ip}/FUZZ -w /root/wordlist/common.txt -o /root/result -of json`,(err,stdout,stderr)=>{
        if(err) return res.send(err.message)
        res.sendFile("/root/result")
    })
})


// LISTENING TO PORT
app.listen(port,()=>{
    console.log("I am listening to you");
})
