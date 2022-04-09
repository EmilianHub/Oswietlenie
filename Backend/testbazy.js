const { Client } = require('pg');

const client = new Client({

    host: "localhost",
    user: "postgres",
    password: "12345",
    port: "5432",
    database: "CupOfPetrol"
})

client.connect();

client.query(`SELECT * FROM public."Pracownicy"`, (err, result) => {

    if(!err) {
        return console.log(result.rows);
    }
    client.end();
})