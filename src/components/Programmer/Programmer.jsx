import React from 'react'
import styled from 'styled-components'
import ProgrammingExperience from '../ProgrammingExperience/ProgrammingExperience'
import Projects from '../Projects/Projects'
import Education from '../Education/Education'
import icons from './icons'
import ProgrammerNavbar from '../Navbar/ProgrammerNavbar'
import Footer from '../ProgrammerFooter/Footer'

const ProgrammerContainer = styled.div`
padding: 3rem;
padding-top: 8rem;
background-color: #1e293b;
color: #f3f4f6;
min-height: 100vh;
`

const Icon = styled.div`
height: 2rem;
width: 2rem;
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
        <p>
          I am a programmer with several years experience and a degree in Computer Science! I have a passion for progressive politics and
          I am a strong believer in the power of technology to improve the lives of people around the world.
        </p>
        <p>
          I am currently looking for a full-time position as a software engineer. I am open to remote work.
        </p>
        <p>
          The technologies I am most familiar with are found below. I have used these extensively in a profession setting or in personal education and projects.
        </p>
        <Icons>
          <Icon>{<icons.CSharpIcon />}</Icon>
          <Icon>{<icons.JSIcon />}</Icon>
          <Icon>{<icons.cppIcon />}</Icon>
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
        <Footer />
      </ProgrammerContainer>
    </>
    
  )
}

export default Programmer