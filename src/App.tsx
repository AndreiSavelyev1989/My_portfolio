import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {RemoteWork} from "./remote-work/RemoteWork";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {FaReact, IoLogoSass, SiCss3, SiHtml5, SiMaterialUi, SiRedux, VscSettingsGear} from "react-icons/all";
import {IconContext} from 'react-icons';

const skills = [
    {
        id: 1,
        title: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...',
        icon: <FaReact/>
    },
    {
        id: 2,
        title: 'Redux',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
            ' tempor incididunt ut labore et dolore magna aliqua Ut enim...',
        icon: <SiRedux/>
    },
    {
        id: 3,
        title: 'Rest API',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do' +
            ' eiusmod' +
            ' tempor incididunt ut labore et dolore magna aliqua Ut enim...',
        icon: <VscSettingsGear/>
    },
    {
        id: 4,
        title: 'CSS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do' +
            ' eiusmod' +
            ' tempor incididunt ut labore et dolore magna aliqua Ut enim...',
        icon: <SiCss3/>
    },
    {
        id: 5,
        title: 'HTML',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do' +
            ' eiusmod' +
            ' tempor incididunt ut labore et dolore magna aliqua Ut enim...',
        icon: <SiHtml5/>
    },
    {
        id: 6,
        title: 'Material UI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do' +
            ' eiusmod' +
            ' tempor incididunt ut labore et dolore magna aliqua Ut enim...',
        icon: <SiMaterialUi />
    },
    {
        id: 7,
        title: 'Sass',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do' +
            ' eiusmod' +
            ' tempor incididunt ut labore et dolore magna aliqua Ut enim...',
        icon: <IoLogoSass />
    },
]
const projects = [
    {
        id: 1,
        title: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'
    },
    {
        id: 2,
        title: 'Redux',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
            ' tempor incididunt ut labore et dolore magna aliqua Ut enim...'
    },
    {
        id: 3,
        title: 'Rest API',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do' +
            ' eiusmod' +
            ' tempor incididunt ut labore et dolore magna aliqua Ut enim...'
    },
    {
        id: 4,
        title: 'Material UI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do' +
            ' eiusmod' +
            ' tempor incididunt ut labore et dolore magna aliqua Ut enim...'
    },
]
const socialLink = [
    {id: 1, title: "Facebook"},
    {id: 2, title: "Twitter"},
    {id: 3, title: "LinkedIn"},
    {id: 4, title: "VK"},
]

export type SkillType = {
    id: number
    title: string
    description: string
    icon: any
}

export type ProjectType = {
    id: number
    title: string
    description: string
}
export type SocialLinkType = {
    id: number
    title: string
}
const App = () => {
    return (
        <IconContext.Provider value={ { className: "reactIcons" }}>
            <div className="App">
                <Header/>
                <Main/>
                <Skills skills={skills}/>
                <Projects projects={projects}/>
                <RemoteWork/>
                <Contacts/>
                <Footer socialLink={socialLink}/>
            </div>
        </IconContext.Provider>
    );
}

export default App;
