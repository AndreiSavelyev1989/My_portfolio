import style from "./Contacts.module.css";
import styleContainer from "../common/style/Container.module.css";
import React from "react";
import {Title} from "../common/components/title/Title";
import {MessageMe} from "./message-me/MessageMe";
import {ContactInfo} from "./contact-info/ContactInfo";
import {ContactInfoType} from "../App";

type PropsType = {
    contactInfo: Array<ContactInfoType>
}
export const Contacts: React.FC<PropsType> = (props) => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Get in Touch'}/>
                <div className={style.mainInfo}>
                    <MessageMe />
                    <ContactInfo contactInfo={props.contactInfo}/>
                </div>
            </div>
        </div>
    )
}