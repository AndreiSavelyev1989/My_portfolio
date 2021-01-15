import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {RemoteWork} from "./remote-work/RemoteWork";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

const skills = [
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
        title: 'CSS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do' +
            ' eiusmod' +
            ' tempor incididunt ut labore et dolore magna aliqua Ut enim...'
    },
    {
        id: 5,
        title: 'HTML',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do' +
            ' eiusmod' +
            ' tempor incididunt ut labore et dolore magna aliqua Ut enim...'
    },
    {
        id: 6,
        title: 'Material UI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do' +
            ' eiusmod' +
            ' tempor incididunt ut labore et dolore magna aliqua Ut enim...'
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
        <div className="App">
            <Header/>
            <Main/>
            <Skills skills={skills}/>
            <Projects projects={projects}/>
            <RemoteWork />
            <Contacts />
            <Footer socialLink={socialLink}/>
        </div>
    );
}

export default App;
