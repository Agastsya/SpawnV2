// IMPORTING REQUIREMENTS
const express = require('express');
const app = express();

const cors = require('cors');

const port = 3333;

const {exec} = require("child_process");


// MIDDLEWARES
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Homepage of CyberForge")
});

// NMAP SCANNER
app.post("/nmap",(req,res)=>{
    const {ip} = req.body;
    exec(`nmap -Pn --top-ports 1000 --open -T4 ${ip}`,{ maxBuffer: 1024 * 1024 * 10 },(err,stdout,stderr)=>{
        if(err) return res.send(err.message)
        res.send(stdout || stderr)
    })
})

// FFUF SCANNER
app.post("/ffuf",(req,res)=>{
    const {ip} = req.body;

    exec(`ffuf -u ${ip}/FUZZ -w /root/wordlist/wordlist.txt -o /Users/agastsya/result -of json`,(err,stdout,stderr)=>{
        if(err) return res.send(err.message)

        res.sendFile("/root/result")
    })
})

// SUB FINDER TOOL
app.post("/subfinder", (req, res) => {
    console.log("body received:", req.body);
    const { ip } = req.body;
    exec(`subfinder -d ${ip} -o /Users/agastsya/result -oJ`, (err, stdout) => {
        if (err) return res.send(err.message);
        res.sendFile("/Users/agastsya/result");
    });
});

//NUCLEI TOOL
app.post("/nuclei", (req, res) => {
    const { ip } = req.body;
    if (!ip) return res.status(400).send("missing 'ip' in body");

    const fs = require("fs");
    const target = ip.startsWith("http://") || ip.startsWith("https://")
        ? ip
        : `https://${ip}`;
    const outFile = `/Users/agastsya/result-${Date.now()}.json`;

    const cmd = [
        "nuclei",
        `-u ${target}`,
        "-severity critical,high,medium,low",
        "-c 50",
        "-bulk-size 50",
        "-rate-limit 300",
        "-timeout 10",
        "-retries 1",
        "-disable-update-check",
        `-o ${outFile}`,
        "-j"
    ].join(" ");

    console.log("running:", cmd);

    exec(cmd, { maxBuffer: 1024 * 1024 * 50 }, (err, stdout, stderr) => {
        console.log("stderr:", stderr);

        if (!fs.existsSync(outFile) || fs.statSync(outFile).size === 0) {
            return res.json({
                status: "completed",
                findings: 0,
                message: "Scan finished — no vulnerabilities detected with current filters",
                target
            });
        }

        res.sendFile(outFile);
    });
});

// HTTP probe + tech detect
app.post("/httpx", (req, res) => {
    const { ip } = req.body;
    exec(`echo ${ip} | httpx -tech-detect -title -status-code -o /Users/agastsya/result -json`, (err) => {
        if (err) return res.send(err.message);
        res.sendFile("/Users/agastsya/result");
    });
});

// XSS scanner
app.post("/dalfox", (req, res) => {
    const { url } = req.body;
    exec(`dalfox url ${url} -o /Users/agastsya/result --format json`, (err) => {
        if (err) return res.send(err.message);
        res.sendFile("/Users/agastsya/result");
    });
});

// Whatweb scanner
app.post("/whatweb",(req,res)=>{
    const {ip} = req.body;
    exec(`ruby ~/root/WhatWeb/whatweb -a 3 ${ip}`,(err,stdout,stderr)=>{
        if(err) return res.send(err.message)
        res.send(stdout||stderr)
    })
})

// Sherlock Scanner
app.post("/sherlock",(req,res)=>{
    const {username} = req.body;
    exec(`sherlock ${username}`,{ maxBuffer: 1024 * 1024 * 10 },(err,stdout,stderr)=>{
        if(err) return res.send(err.message)
        res.send(stdout||stderr)
    })
})


// LISTENING TO PORT
app.listen(port,()=>{
    console.log("I am listening to you");
})
