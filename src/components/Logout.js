import React, {useEffect} from "react";
import Axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Logout(){
    Axios.defaults.withCredentials = true;
    let navigate = useNavigate();
    useEffect(()=>{
       Axios.get('http://localhost:5000/Logout').then((response) =>{
           console.log(response.data.message)
           if(response.data.message === "ok")
           {
               navigate("/");
           }
       })
    }, [])
}