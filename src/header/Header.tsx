import React, {useState} from "react";
import {Nav} from "./nav/Nav";
import style from "./Header.module.css";
import styleContainer from "./../common/style/Container.module.css"


export const Header = () => {

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        window.scrollY > 90
            ? setNavbar(true)
            : setNavbar(false)
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <div className={navbar
            ? `${style.headerBlock} ${style.scrolled}`
            : style.headerBlock}>
            <div className={styleContainer.container}>
                <div className={style.header}>
                    <Nav/>
                </div>
            </div>
        </div>

    )
}