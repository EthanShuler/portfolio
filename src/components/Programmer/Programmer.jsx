import React from 'react'
import styled from 'styled-components'
import ProgrammingExperience from '../ProgrammingExperience/ProgrammingExperience'
import Projects from '../Projects/Projects'
import Education from '../Education/Education'
import Contact from '../Contact/Contact'
import icons from './icons'
import ProgrammerNavbar from '../Navbar/ProgrammerNavbar'

//header:  Hero, Experience, Projects, Education, Contact

const ProgrammerContainer = styled.div`
padding: 3rem;
padding-top: 8rem;
background-color: #1e293b;
color: #f3f4f6;
min-height: 100vh;
`

const Icon = styled.div`
height: 4rem;
width: 4rem;
`

const Icons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`

const Programmer = () => {
  return (
    <>
      <ProgrammerNavbar />
      <ProgrammerContainer>
        <h1>Programmer</h1>
        <p>I am also a programmer with several years experience and a degree in Computer Science! This part of my website is still in development :)</p>
        <Icons>
          <Icon>{<icons.CSharpIcon />}</Icon>
          <Icon>{<icons.JSIcon />}</Icon>
          <Icon>{<icons.GitIcon />}</Icon>
          <Icon>{<icons.PythonIcon />}</Icon>
          <Icon>{<icons.ReactIcon />}</Icon>
          <Icon>{<icons.NodeJSIcon />}</Icon>
          <Icon>{<icons.HTMLIcon />}</Icon>
          <Icon>{<icons.CSSIcon />}</Icon>
          <Icon>{<icons.LinuxIcon />}</Icon>
          <Icon>{<icons.AWSIcon />}</Icon>
        </Icons>
        
        <ProgrammingExperience />
        <Projects />
        <Education />
        <Contact />
      </ProgrammerContainer>
    </>
    
  )
}

export default Programmer