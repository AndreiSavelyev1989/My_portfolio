import style from "./RemoteWork.module.css";
import styleContainer from "../common/style/Container.module.css";

export const RemoteWork = () => {
  return (
    <div id="contacts" className={style.remoteWorkBlock}>
      <div
        className={`${styleContainer.container} ${style.remoteWorkContainer}`}
      >
        <h2 className={style.title}>Considering options for remote work</h2>
        <button className={style.button}>HIRE ME</button>
      </div>
    </div>
  );
};
