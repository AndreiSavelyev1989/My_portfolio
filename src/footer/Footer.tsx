import style from "./Footer.module.css";
import styleContainer from "../common/style/Container.module.css";
import { SocialLinkType } from "../App";

type PropsType = {
  socialLink: Array<SocialLinkType>;
};

export const Footer = (props: PropsType) => {
  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <div className={style.copyright}>
          © Andrei Saveluey 2021, All Rights Reserved.
        </div>
        <div className={style.linkContainer}>
          {props.socialLink.map((link) => (
            <div className={style.link} key={link.id}>
              <a href="https://youtube.com">{link.icon}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
