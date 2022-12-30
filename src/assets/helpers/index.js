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
import socialNetwork from "../images/socialNetwork.jpg";
import todolist from "../images/todolist.jpg";

export const skills = [
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

export const projects = [
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

export const socialLinks = [
  {
    id: 1,
    icon: <AiOutlineFacebook />,
    url: "https://www.facebook.com/andrei.savelev.5",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/andrei_savelyev_s/",
  },
  {
    id: 3,
    icon: <AiOutlineLinkedin />,
    url: "https://www.linkedin.com/in/andrei-savelyev-22671b1ba/",
  },
  {
    id: 4,
    icon: <AiOutlineGithub />,
    url: "https://github.com/AndreiSavelyev1989",
  },
];

export const contactInfos = [
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
