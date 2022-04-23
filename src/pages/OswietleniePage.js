import React, {useState} from "react";
import Oswietlenie from "../components/Oswietlenie";
import Sidebar from "../components/Sidebar";

export default function OswietleniePage(){
    const [toggled, setToggled] = useState(false)
        return(
            <div className="OswietleniePage">
                <Oswietlenie onChange={(e) => setToggled(e.target.checked)}/>
                <p>Światła są {toggled ? "włączone" : "wyłączone"}</p>
            </div>
        )
}