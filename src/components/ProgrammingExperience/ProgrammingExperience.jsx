import React, { useState } from 'react'
import styled from 'styled-components'
import { device } from '../../utils/Devices'
import experience from './experienceData'

const ExperienceContainer = styled.div`
  display: flex;
  padding: 6rem;
  max-width: 95.75em;
  margin: 0 auto;

  @media screen and ${device.tablet} {
    flex-direction: column;
    padding: 0;
    min-height: 100%;
  }
`

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 20rem;

  @media screen and ${device.tablet} {
    flex-direction: row;
    overflow-x: auto;
    height: auto;
  }
`

const ExperienceSelector = styled.div`
  width: 12rem;
  height: 100%;
  border-radius: 0.5rem;
  padding: 1rem;

  &:hover {
    background-color: #475569;
    cursor: pointer;
  }

  background-color: ${props => props.selected ? '#475569' : 'transparent'};
  transition: background-color 0.1s ease-in-out;
`

const ExperienceDescription = ({ experience, className }) =>  (
    <div className={className}>
      <h2>{experience.position}</h2>
      <h2 className='company'>&nbsp;@{experience.company}</h2>
      <span>{experience.date}</span>
      <ul>
        {experience.description.map((desc) => <li key={desc}>{desc}</li>)}
      </ul>
    </div>
  )

const ExperienceDetail = styled(ExperienceDescription)`
  height: 100%;
  border-radius: 0.5rem;
  width: 100%;
  background-color: #475569;
  margin-left: 1rem;
  padding: 2rem;

  h2 {
    display: inline-block;
  }

  .company {
    color: #a0aec0;
  }
  
  ul {
    display: block;
    list-style: disc;
  }

  li {
    margin: 1em 0;
  }

  span {
    display: block;
    font-size: 0.8em;
    color: #94a3b8;
  }

  @media screen and ${device.tablet} {
    height: 100%;
  }
`

const Title = styled.h1`
  color: #ccd6f6;
  margin: 0 auto;
  text-align: center;
`

const Experience = styled.div`
  margin: 4em 0;
`

const ProgrammingExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experience[0])

  return (
    <Experience id='experience'>
      <Title>Professional Experience</Title>
      <ExperienceContainer>
        <ExperienceList>
          {experience.map((job) => {
            return (
              <ExperienceSelector selected={job.id === selectedExperience.id} key={job.id} onClick={() => setSelectedExperience(job)}>
                {job.company}
              </ExperienceSelector>
            )
          })}
        </ExperienceList>
        <ExperienceDetail experience={selectedExperience} />
      </ExperienceContainer>
    </Experience>
  )
}

export default ProgrammingExperience