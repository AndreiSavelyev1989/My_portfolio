import style from "./Title.module.css";

type PropsType = {
  title: string;
};

export const Title = ({ title }: PropsType) => {
  return (
    <div>
      <h2 className={style.title}>{title}</h2>
      <div className={style.animatedBar}> </div>
    </div>
  );
};
