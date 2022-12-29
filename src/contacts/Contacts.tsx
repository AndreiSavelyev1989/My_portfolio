import style from "./Contacts.module.css";
import styleContainer from "../common/style/Container.module.css";
import { Title } from "../common/components/title/Title";
import { MessageMe } from "./message-me/MessageMe";
import { ContactInfo } from "./contact-info/ContactInfo";
import { ContactInfoType } from "../App";

type PropsType = {
  contactInfos: Array<ContactInfoType>;
};
export const Contacts = ({ contactInfos }: PropsType) => {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <Title title={"Get in Touch"} />
        <div className={style.mainInfo}>
          <MessageMe />
          <ContactInfo contactInfos={contactInfos} />
        </div>
      </div>
    </div>
  );
};
