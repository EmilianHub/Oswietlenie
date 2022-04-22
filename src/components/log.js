

import React, {useEffect, useState} from 'react';
import "./log.css"
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
    const [Login, setLogin] = useState("")
    const [Password, setPassword] = useState("")
    const [Loginstatus, setLoginstatus] = useState("")
    const [Rola, setrola] = useState("")


    const SELECT = () => {
        Axios.post('http://localhost:5000/Logowanie', {
            Login: Login,
            Password: Password,
        })
            .then((response) => {
                if (response.data.message){
                    setLoginstatus(response.data.message)
                } else{
                    setLoginstatus(response.data[0].Login);

                }
            });
    };
    useEffect(()=>{
        Axios.get('http://localhost:5000/Logowanie').then((response) =>{
            console.log(response);
        })
    },[])

    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);

    return (


        <div className="card">
            <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
                <div>Logowanie</div>
                <br/>
                <div>


                    <label style={labelStyle}>Login:</label><br/>
                    <input style={inputStyle} {...register("Login")} onChange={(e) => {
                        setLogin(e.target.value)
                    }}/><br/>
                </div>

                <div>
                    <label style={labelStyle}>Hasło:</label><br/>
                    <input type="password" style={inputStyle} {...register("Password")} onChange={(e) => {
                        setPassword(e.target.value)
                    }}/><br/>

                </div>
                <button className="button" onClick={SELECT} type="submit">zaloguj</button>
            </form>
            <h1>{Loginstatus}</h1>
        </div>
    );

}