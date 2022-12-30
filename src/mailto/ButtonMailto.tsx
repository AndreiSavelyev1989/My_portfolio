import { Link } from "react-router-dom";
import style from "./ButtonMailto.module.css";

type Props = {
  mailto: string;
  label: string;
};

export const ButtonMailto = ({ mailto, label }: Props) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
      className={style.link}
    >
      {label}
    </Link>
  );
};
