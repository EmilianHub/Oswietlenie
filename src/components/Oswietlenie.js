import React from "react";
import "./Oswietl.css"

export default function Oswietlenie({onChange}){

    return(
        <label className="Position">
            <input className="InputBox" type="checkbox" onChange={onChange}/>
            <span className="SwitchBox"/>
        </label>
    )
}