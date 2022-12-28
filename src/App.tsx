import React from "react";
import "./App.css";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Skills } from "./skills/Skills";
import { Projects } from "./projects/Projects";
import { RemoteWork } from "./remote-work/RemoteWork";
import { Contacts } from "./contacts/Contacts";
import { Footer } from "./footer/Footer";
import { IconContext } from "react-icons/lib";
import socialNetwork from "./assets/images/socialNetwork.jpg";
import todolist from "./assets/images/todolist.jpg";
import { FaReact, FaInstagram } from "react-icons/fa";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoLogoSass, IoIosCall } from "react-icons/io";
import { RiUserLocationFill } from "react-icons/ri";
import { SiCss3, SiHtml5, SiMinutemailer, SiRedux } from "react-icons/si";
import { VscSettingsGear } from "react-icons/vsc";

const skills = [
  {
    id: 1,
    title: "React",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...",
    icon: <FaReact />,
  },
  {
    id: 2,
    title: "Redux",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" +
      " tempor incididunt ut labore et dolore magna aliqua Ut enim...",
    icon: <SiRedux />,
  },
  {
    id: 3,
    title: "Rest API",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do" +
      " eiusmod" +
      " tempor incididunt ut labore et dolore magna aliqua Ut enim...",
    icon: <VscSettingsGear />,
  },
  {
    id: 4,
    title: "CSS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do" +
      " eiusmod" +
      " tempor incididunt ut labore et dolore magna aliqua Ut enim...",
    icon: <SiCss3 />,
  },
  {
    id: 5,
    title: "HTML",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do" +
      " eiusmod" +
      " tempor incididunt ut labore et dolore magna aliqua Ut enim...",
    icon: <SiHtml5 />,
  },
  {
    id: 7,
    title: "Sass",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do" +
      " eiusmod" +
      " tempor incididunt ut labore et dolore magna aliqua Ut enim...",
    icon: <IoLogoSass />,
  },
];
const projects = [
  {
    id: 1,
    title: "Social Network",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut" +
      " labore et dolore magna aliqua Ut enim...",
    projectBackground: {
      backgroundImage: `url(${socialNetwork})`,
    },
  },
  {
    id: 2,
    title: "Todolist",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" +
      " tempor incididunt ut labore et dolore magna aliqua Ut enim...",
    projectBackground: {
      backgroundImage: `url(${todolist})`,
    },
  },
];
const socialLink = [
  { id: 1, icon: <AiOutlineFacebook /> },
  { id: 2, icon: <FaInstagram /> },
  { id: 3, icon: <AiOutlineLinkedin /> },
  { id: 4, icon: <AiOutlineGithub /> },
];
const contactInfo = [
  {
    id: 1,
    icon: <HiOutlineUserCircle />,
    title: "Name",
    content: "Andrei Saveluey",
  },
  {
    id: 2,
    icon: <RiUserLocationFill />,
    title: "Location",
    content: "Belarus, Mogilev",
  },
  { id: 3, icon: <IoIosCall />, title: "Call Me", content: "+375292536635" },
  {
    id: 4,
    icon: <SiMinutemailer />,
    title: "Email Me",
    content: "andreisaveluev@gmail.com",
  },
];

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
          <Contacts contactInfo={contactInfo} />
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "footerIcons" }}>
          <Footer socialLink={socialLink} />
        </IconContext.Provider>
      </>
    </div>
  );
};

export default App;
