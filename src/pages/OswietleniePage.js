import React, {useState} from "react";
import Oswietlenie from "../components/Oswietlenie";

export default function OswietleniePage(){
    const [toggled, setToggled] = useState(false)
        return(
            <div className="OswietleniePage">
                <Oswietlenie onChange={(e) => setToggled(e.target.checked)}/>
                <p>Światła są {toggled ? "włączone" : "wyłączone"}</p>
            </div>
        )
}