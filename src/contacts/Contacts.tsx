import style from "./Contacts.module.css";
import styleContainer from "../common/style/Container.module.css";
import React from "react";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
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