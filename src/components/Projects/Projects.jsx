import React from 'react'
import styled from 'styled-components'
import { device } from '../../utils/Devices'
import Button from '../Button'

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
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
`

const Link = styled.a`
lign-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 1em;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: 100%;

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
  &:active {
    background-color: #F0F0F1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
`

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <Title>Projects</Title>
      <Project>
        <h2>Opinionated (in progress)</h2>
        <p>An IMDB/Letterboxd Clone</p>
        <p>Technologies: ReactJS, NextJS, TMDB API, Supabase, Typescript</p>
        <Row>
          <Link href='https://github.com/EthanShuler/opinionated' target={'_blank'}>Code</Link>
          <Link href='https://opinionated-git-main-ethanshuler.vercel.app/' target={'_blank'}>Hosted Site</Link>
        </Row>
        
      </Project>
    </ProjectsContainer>
  )
}

export default Projects