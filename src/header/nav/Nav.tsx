import style from "./Nav.module.css";

export const Nav = () => {
  const onMainNav = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const onSkillsNav = () => {
    window.location.href = "#skills";
  };

  const onProjectsNav = () => {
    window.location.href = "#projects";
  };

  const onContactsNav = () => {
    window.location.href = "#contacts";
  };

  return (
    <div className={style.nav}>
      <button onClick={onMainNav}>Main</button>
      <button onClick={onSkillsNav}>Skills</button>
      <button onClick={onProjectsNav}>Works</button>
      <button onClick={onContactsNav}>Contacts</button>
    </div>
  );
};
