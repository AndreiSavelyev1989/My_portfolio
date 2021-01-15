import React from "react";
import style from "./Main.module.css";
import styleContainer from "../common/style/Container.module.css";
import {Intro} from "./intro/Intro";

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <Intro/>
                <div className={style.photo}>My Photo</div>
            </div>
        </div>
    )
}