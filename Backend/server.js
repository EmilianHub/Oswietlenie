const express = require('express')
const { pool }  = require('./db')
const BodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 5000
app.use(BodyParser.urlencoded({extended: false}));
app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
}))
app.use(express.json());
//get do pobierania
app.get('/', (req, res) => {
    res.json('Hello World!')
})

app.get('/Baza', async (req, res) => {
    const users = await pool.query(`SELECT * FROM public."Uzytkownicy"`);
    res.json(users.rows)


})

//post do tworzenia

app.post('/Zamowienie', (req, res) => {
    const Firstname = req.body.Firstname;
    const Lastname = req.body.Lastname;

    const Insert = `INSERT INTO public."Pracownicy" ("ID_log", "Imie", "Nazwisko") VALUES ($1,$2, $3)`;
    pool.query(Insert, [6,Firstname, Lastname], (err, result) => {
        console.log(err)
    });

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})