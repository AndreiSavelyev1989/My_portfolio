import style from "./MessageMe.module.css";
import React from "react";

export const MessageMe = () => {
    return (
        <div className={style.messageMeBlock}>
            <div className={style.messageMeWrapper}>
                <h4 className={style.title}>Message Me</h4>
                <form action="" className={style.form}>
                    <input type="text" placeholder={"Name"}/>
                    <input type="text" placeholder={"E-mail"}/>
                    <textarea name="" id="" cols={30} rows={10} placeholder={"Your message"}/>
                </form>
                <button className={style.button}>SEND MESSAGE</button>
            </div>
        </div>
    )
}