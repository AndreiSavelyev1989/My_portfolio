import style from "./Intro.module.css";

export const Intro = () => {
  return (
    <div className={style.intro}>
      <h1>
        <span className={style.introName}> Andrei Saveluey</span>
      </h1>
      <span className={style.cdWords}>I'm a </span>
      <p className={style.singleHeadline}>Frontend developer</p>
      <p className={style.summary}>
        I have 1 year of commercial experience in web application development.
        My main stack of technologies is React, Redux, Typescript. But I am
        interested in other frameworks such as Angular and SAP UI5 because I
        want to grow as a good specialist. I have experienced in React, Redux,
        ES6, SASS, BEM. I have implemented adaptive layout in my last
        projects. In my last project, I worked with the SCRUM methodology. I
        understand the value of Agile artifacts. I am also familiar
        with an approach such as KANBAN. I am a good team player: I have
        participated in the code review, resolved issues in development with my
        team, suggested new business features.
      </p>
    </div>
  );
};
