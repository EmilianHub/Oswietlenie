const express = require('express')
const { pool }  = require('./db')
const BodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require('cors')
const bodyParser = require("body-parser");
const app = express()
const port = 5000
app.use(BodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
}))
app.use(cookieParser())
app.use(
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 + 60 + 24,
        },
    })
);
app.use(express.json());
//get do pobierania
app.get('/', (req, res) => {
    res.json('Hello World!')
})

app.get('/Baza', async (req, res) => {
    const users = await pool.query(`SELECT * FROM public."uzytkownicy"`);
    res.json(users.rows)


})

//post do tworzenia

app.post('/Rejestracja', (req, res) => {
    const Login = req.body.Login;
    const Password = req.body.Password;
    const Email = req.body.Email;



    const Insert = `INSERT INTO public."uzytkownicy" ("login", "haslo", "rola") 
                            VALUES ($1,$2, $3)`;
    pool.query(Insert, [Login, Password, Email], (err, result) => {
        console.log(err)
    });

});

app.get("/Logowanie", (req, res)=>{
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user })
    } else{
        res.send({loggedIn: false})
    }
})

app.post("/Logowanie", (req, res) => {
    const Login = req.body.Login;
    const Password = req.body.Password;

    const Select = `SELECT * FROM public."uzytkownicy" where "login" = $1 AND "haslo" = $2`;
    pool.query(Select, [Login,Password], (err, response) => {
        if(response.rows.length>0){
            req.session.user =response;
            console.log(req.session.user);
            res.send(response);
        } else{
            res.send({message: "zły Login/Hasło!"});
        }

    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})