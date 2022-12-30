import "./App.css";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Skills } from "./skills/Skills";
import { Projects } from "./projects/Projects";
import { RemoteWork } from "./remote-work/RemoteWork";
import { Contacts } from "./contacts/Contacts";
import { Footer } from "./footer/Footer";
import { IconContext } from "react-icons/lib";
import {
  skills,
  projects,
  socialLinks,
  contactInfos,
} from "./assets/helpers/index";

export type SkillType = {
  id: number;
  title: string;
  description: string;
  icon: any;
};
export type ProjectType = {
  id: number;
  title: string;
  description: string;
  projectBackground: object;
};
export type SocialLinkType = {
  id: number;
  icon: any;
  url: string;
};
export type ContactInfoType = {
  id: number;
  icon: any;
  title: string;
  content: string;
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <>
        <IconContext.Provider value={{ className: "reactIcons" }}>
          <Skills skills={skills} />
          <Projects projects={projects} />
          <RemoteWork />
          <Contacts contactInfos={contactInfos} />
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "footerIcons" }}>
          <Footer socialLinks={socialLinks} />
        </IconContext.Provider>
      </>
    </div>
  );
};

export default App;
