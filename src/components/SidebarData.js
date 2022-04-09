import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Register from '@mui/icons-material/AppRegistration';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupIcon from '@mui/icons-material/Group';

    export const SidebarData = [
        {
            name: "Strona Główna",
            img: <HomeIcon/>,
            link: "/"
        },
        {
            name: "Sterowanie oświetleniem",
            img: <LightbulbIcon/>,
            link: "/Oswietlenie",
        },
        {
            name: "Wyloguj się",
            img: <LogoutIcon/>,
            link: "/Logout",
        }
    ];
    export const SidebarDataAdmin = [
        {
            name: "Strona Główna",
            img: <HomeIcon/>,
            link: "/"
        },
        {
            name: "Sterowanie oświetleniem",
            img: <LightbulbIcon/>,
            link: "/Oswietlenie",
        },
        {
            name: "Rejestracja",
            img: <Register/>,
            link: "/Register"
        },
        {
            name: "Uzytkownicy",
            img: <GroupIcon/>,
            link: "/Users"
        },
        {
            name: "Wyloguj się",
            img: <LogoutIcon/>,
            link: "/Logout",
        }
    ];