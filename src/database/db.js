const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./src/database/database.db');

module.exports = db;

// db.serialize(()=>{

//     // 1 criar tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             city TEXT,
//             state TEXT,
//             items TEXT
//         );
//     `);
    
//     // 2 inserir dados na tabela        
//     const query = `
//         INSERT INTO places(
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `

//     const values = [
//         "https://images.unsplash.com/photo-1528999233297-820207be1efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos eletrônicos, Lâmpadas"    
//     ];

//     function afterInsertData(err){
//         if(err) console.log(err);
//         else{
//             console.log("local cadastrado com sucesso");
//             console.log(this);
//         } 
//     }

//     db.run(query,values, afterInsertData)

    // 3 consultar na tabela

    // db.all(`SELECT * FROM places`, (err,rows) =>{
    //     if(err) console.log(err);
    //     else{
    //         console.log("aqui estão seus registros");
    //         console.log(rows);
    //     } 
    // });

    // db.run(`DELETE FROM places WHERE id = ?`, 6, err => {
    //     if(err) console.log(err);
    //     else{
    //         console.log("registro apagado com sucesso");
    //     }
    // });

// });