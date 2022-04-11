import React from "react";
import "./Oswietl.css"
import Sidebar from "./Sidebar";

export default function Oswietlenie({onChange}){

    return(
        <div>
            <Sidebar/>
            <label className="Position">
                <input className="InputBox" type="checkbox" onChange={onChange}/>
                <span className="SwitchBox"/>
            </label>
        </div>
    )
}