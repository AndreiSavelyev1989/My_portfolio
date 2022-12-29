import style from "./Projects.module.css";
import styleContainer from "../common/style/Container.module.css";
import { ProjectType } from "../App";
import { Project } from "./project/Project";
import { Title } from "../common/components/title/Title";

type PropsType = {
  projects: Array<ProjectType>;
};

export const Projects = ({ projects }: PropsType) => {
  return (
    <div id="projects" className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <Title title={"Projects"} />
        <div className={style.projects}>
          {projects.map((project) => (
            <Project
              key={project.id}
              style={project.projectBackground}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
