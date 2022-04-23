import React, {useEffect, useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { SidebarData, SidebarDataAdmin } from './SidebarData';
import CloseIcon from '@mui/icons-material/Close';
import './Sidebar.css';
import Axios from "axios";

function Sidebar() {
    Axios.defaults.withCredentials = true;
    const [sidebar, setSidebar] = useState(false);
    const [SidebarArray, setArray] = useState(SidebarData)

    const showSidebar = () => setSidebar(!sidebar);

    useEffect(()=>{
        Axios.get('http://localhost:5000/Logowanie').then((response) =>{
            if(response.data.loggedIn == true)
            {
                if(response.data.user[0].Rola === "ADMIN"){
                    setArray(SidebarDataAdmin);
                }
                else {
                    setArray(SidebarData);
                }
            }
        })
    }, [])

    return (
        <>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <MenuIcon onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <div><CloseIcon/></div>
                        </li>
                        {SidebarArray.map((val, key) => {
                            return (
                                <li key={key} className="nav-text">
                                    <Link to={val.link} className="nav-text">
                                        <div id = "icon">{val.img}</div>
                                        <div id = "name">{val.name}</div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
        </>
    );
}

export default Sidebar;