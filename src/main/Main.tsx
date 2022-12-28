import React from "react";
import style from "./Main.module.css";
import styleContainer from "../common/style/Container.module.css";
import {Intro} from "./intro/Intro";
import myPhoto from "./../assets/images/myPhoto.png"


export const Main = () => {
    return (
        <div className={style.mainBlock} >
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <Intro/>
                <div className={style.photo}>
                    <img src={myPhoto} alt="my-photo"/>
                </div>
            </div>
        </div>
    )
}