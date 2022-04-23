const express = require('express')
const { pool }  = require('./db')
const BodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require('cors')

const app = express()
const port = 5000
app.use(BodyParser.urlencoded({extended: false}));
app.use(BodyParser.json());

app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
}))

app.use(cookieParser())
app.use(
    session({
        name: "userId",
        secret: "secret",
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            httpOnly: false,
            maxAge: 1000*60*60*24,
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

    const Insert = `INSERT INTO public."Uzytkownicy" ("Login", "Haslo") 
                            VALUES ($1,$2)`;
    pool.query(Insert, [Login, Password], (err, result) => {
        console.log(err)
    });

});

app.get("/Logowanie", (req, res)=>{
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user.rows})
        console.log(req.session.user)
    }
    else{
        res.send({loggedIn: false})
    }

})

app.post("/Logowanie", (req, res) => {
    const Login = req.body.Login;
    const Password = req.body.Password;

    const Select = `SELECT * FROM public."Uzytkownicy" WHERE "Login" = $1 AND "Haslo" = $2`;
     pool.query(Select, [Login,Password], (err, result) => {
        if(err)
        {
            console.log(err)
            res.send({err: err})
        }
        if(result.rows.length > 0){
            req.session.user = result;
            console.log(req.session.user)
            res.send(result.rows)
        } else{
            res.send({message: "Zły Login/Hasło!"});
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})