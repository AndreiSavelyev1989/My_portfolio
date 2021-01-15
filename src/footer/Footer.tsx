import style from "./Footer.module.css";
import styleContainer from "../common/style/Container.module.css";
import React from "react";
import {SocialLinkType} from "../App";

type PropsType = {
    socialLink: Array<SocialLinkType>
}

export const Footer = (props: PropsType) => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Andrei</h2>
                <div className={style.linkContainer}>
                    {props.socialLink.map(link => <div className={style.link} key={link.id}><a href="#">{link.title}</a></div>)}
                </div>
                <div className={style.copyright}>© 2021, All Rights Reserved.</div>
            </div>
        </div>
    )
}