import style from "./Footer.module.css";
import styleContainer from "../common/style/Container.module.css";
import { SocialLinkType } from "../App";

type PropsType = {
  socialLinks: Array<SocialLinkType>;
};

export const Footer = ({ socialLinks }: PropsType) => {
  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <div className={style.copyright}>
          © Andrei Saveluey 2021, All Rights Reserved.
        </div>
        <div className={style.linkContainer}>
          {socialLinks.map((link) => (
            <div className={style.link} key={link.id}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
