import React, {useEffect, useState} from 'react';
import "./rej.css"
import Axios from "axios";
import {useForm} from "react-hook-form";

const formStyle = {
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#4E4C4C',
    color:'#FFCCFF',
    width: '50vh',
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    padding: '5px',
    boxSizing: 'border-box',
    width: '100%'
};

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#F2AD40',
    width: '100%',
    fontSize: '15px',
    color: '#2F2D6B',
    display: 'block'
};

export default function Form() {
    Axios.defaults.withCredentials = true;
    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [Login, setLogin] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfPassword, setConfirmPassword] = useState("")
    const [EMail, setEMail] = useState("")


    const Import = () =>{
        Axios.post('http://localhost:5000/Rejestracja', {Firstname: firstName, Lastname: lastName, Login: Login, Email:EMail, Password: Password})
            .then((response) => console.log(response))
    }



    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="card">
            <form  style={formStyle} onSubmit={handleSubmit(onSubmit)}>
                <div >Rejestracja </div> <br/>
                <div >
                    <label style={labelStyle}>Imię:</label><br/>
                    <input style={inputStyle} {...register("firstName")} onChange={(e) =>
                    {setFirstName(e.target.value);} }/><br/>
                </div>
                <div >
                    <label style={labelStyle}> Nazwisko:</label><br/>
                    <input style={inputStyle}{...register("lastName")} onChange={(e)=>{setlastName(e.target.value)}} /><br/>
                </div>
                <div >
                    <label style={labelStyle} >Email:</label><br/>
                    <input style={inputStyle} {...register("email")} onChange={(e)=>{setEMail(e.target.value)}} />
                </div>
                <div>

                    <label style={labelStyle}>Login:</label><br/>
                    <input style={inputStyle} {...register("Login")} onChange={(e)=>{setLogin(e.target.value)}} /><br/>
                </div>

                <div >
                    <label style={labelStyle}>Hasło:</label><br/>
                    <input type="password" style={inputStyle} {...register("Password")} onChange={(e)=>{setPassword(e.target.value)}}/><br/>

                </div>
                <div >
                    <label style={labelStyle}>Potwierdź hasło:</label><br/>
                    <input type="password" style={inputStyle} {...register("confPassword")} onChange={(e)=>{setConfirmPassword(e.target.value)}}/><br/>

                </div>

                <button className="button" onClick={Import} type="submit">Zarejestruj</button>
            </form> </div>

    );
};