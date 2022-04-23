import Register from "../components/rejestr"
import Sidebar from "../components/Sidebar";
import "../components/rej.css"
import React, {useEffect, useState} from "react";
import Axios from "axios";

function RejestrForm() {
    Axios.defaults.withCredentials = true;
    const [Rola, setRola] = useState("")
    useEffect(()=>{
        Axios.get('http://localhost:5000/Logowanie').then((response) =>{
            if(response.data.loggedIn == true)
            {
                setRola(response.data.user[0].Rola);
            }
        })
    },[])

    return(
        <div>
            <Sidebar/>
            {Rola === "ADMIN" ? <Register/> : <h1>"Error 401 Not Authorized"</h1>}
        </div>
    )
}

export default RejestrForm