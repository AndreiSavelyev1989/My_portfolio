import React from "react";
import style from "./ContactInfo.module.css";
import { ContactInfoType } from "../../App";
import { PersonalInfo } from "./personal-info/PersonalInfo";

type PropsType = {
  contactInfos: Array<ContactInfoType>;
};

export const ContactInfo = ({ contactInfos }: PropsType) => {
  return (
    <div className={style.contactInfoBlock}>
      <div className={style.contactInfo}>
        <h4 className={style.contentTitle}>Contact Info</h4>
        <p className={style.infoDescription}>
          Always available for freelance work if the right project comes along,
          Feel free to contact me!
        </p>
        {contactInfos.map((c) => (
          <PersonalInfo
            key={c.id}
            title={c.title}
            icon={c.icon}
            content={c.content}
          />
        ))}
      </div>
    </div>
  );
};
