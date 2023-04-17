import React from 'react'
import styled from 'styled-components'
import { device } from '../../utils/Devices'
import githubIcon from '../ProgrammerFooter/github.svg'

const ProjectsContainer = styled.div`
  padding: 6rem;
  max-width: 95.75em;
  margin: 0 auto;

  @media screen and ${device.tablet} {
    padding: 0;
    min-height: 100%;
  }
`

const Title = styled.h1`
  color: #ccd6f6;
  margin: 0 auto;
  text-align: center;
`

const Project = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #475569;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
  gap: 1rem;

  @media screen and ${device.tablet} {
    margin: 1rem 0;
    min-height: 100%;
  }

  em {
    font-size: 0.7em;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: flex-start;

  @media screen and ${device.tablet} {
    flex-direction: column;
  }
`

const Link = styled.a`
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 1em;
  font-weight: 600;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;

  width: 20%;
  display: flex;
  justify-content: center;
  gap: 2em;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }
  &:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }
  &:active {
    background-color: #F0F0F1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }

  @media screen and ${device.tablet} {
    width: 100%;
  }
`

const Icon = styled.img`
  height: 2em;
`

const projects = [
  {
    name: 'Opinionated',
    description: 'An IMDB/Letterboxd Clone',
    technologies: 'ReactJS, NextJS, TMDB API, PostgreSQL(Supabase), Typescript',
    code: 'https://github.com/EthanShuler/opinionated',
    hostedSite: 'https://opinionated-3taerbcne-ethanshuler.vercel.app/',
  },
  {
    name: 'Polar Bear Random Walk Simulator',
    description: 'A simulation of a polar bear\'s random walk through the arctic ice, with a visualization of the path taken. To simulate climate change, the ice melts over time.',
    technologies: 'Python, Matplotlib',
    code: 'https://github.com/EthanShuler/PolarBearRandomWalks'
  },
  {
    name: 'Game Engine in C++',
    description: 'A game engine written in C++ using OpenGL and SFML. This project is a work in progress, and is being completed with another individual.',
    technologies: 'C++, OpenGL, SFML, git, gTest',
  },
]

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <Title>Projects</Title>
      {projects.map(project => (
        <Project key={project.name}>
          <h2>{project.name} | <em>{project.technologies}</em></h2>
          <p>{project.description}</p>
          {project.code && 
            <Row>
              <Link href={project.code} target={'_blank'}>Code <Icon src={githubIcon} alt="github" /></Link>
              { project.hostedSite && <Link href={project.hostedSite} target={'_blank'}>Hosted Site</Link> }
            </Row>
          }
      </Project>
      ))}
      
    </ProjectsContainer>
  )
}

export default Projects