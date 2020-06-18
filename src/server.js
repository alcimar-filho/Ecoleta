const express = require('express');
const server = express();

server.use(express.static('public'));


// habilitar o uso do req.body
server.use(express.urlencoded({extended: true}));

const nunjucks = require('nunjucks');

nunjucks.configure('src/views',{
    express: server,
    noCache: true
});

const db = require('./database/db.js')

server.get("/", (req,res) => {
    return res.render("index.html", {title: "Seu marketplace de coleta de resíduos"});
});

server.get("/search-results", (req,res) => {
    const search = req.query.search;

    if(search=="") return res.render("search-results.html");

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, (err,rows) =>{
        if(err) console.log(err);
        else{
            const total = rows.length;
            return res.render("search-results.html", {places: rows, total});
        } 
    });
});

server.get("/create-point", (req,res) => {
    return res.render("create-point.html");
});

server.post("/savepoint", (req,res) => {

    // inserir dados na tabela        
    const query = `
        INSERT INTO places(
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ];

    function afterInsertData(err){
        if(err){
            console.log(err);
            return res.send("ERRO NO CADASTRO")
        } 
            
        else{
            console.log("local cadastrado com sucesso");
            return res.render("create-point.html", {saved: true});
        } 
    }

    db.run(query,values,afterInsertData)

});

server.listen(3000);