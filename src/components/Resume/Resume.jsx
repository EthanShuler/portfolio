import React from 'react'
import styled from 'styled-components'
import Collapsible from '../Collapsible'
import { device } from '../../utils/Devices'
import ResumePdf from './Resume.pdf'
import Button from '../Button'

const ResumeContainer = styled.div`
  font-family: Articulat CF,system-ui,sans-serif;
  padding: 2em 5.25em;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 95.75em;

  @media screen and ${device.tablet} {
    width: 100%;
    padding: 0 1em;
  }

  h1 {
    text-align: center;
  }
`

const ResumeSection = styled.section`
  margin-bottom: 3em;

  h2 {
    margin-bottom: 1em;
    color: #0033CC
    ;
  }
`

const ResumeSectionRows = styled.div`
display: flex;
flex-direction: column;
`

const ResumeSectionRow = styled.div`
border-top: 1px solid #c4c4c4;
display: flex;
margin-bottom: 3em;
padding-top: 3em;
width: 100%;

@media screen and ${device.tablet} {
  flex-direction: column;
}
`

const ResumeSectionRowTitle = styled.div`
  width: 33.33333%;

  h3 {
    margin-bottom: 0.25em;
  }

  span {
    font-size: small;
    opacity: 50%;
  }

  @media screen and ${device.tablet} {
    width: 100%;
  }
`

const ResumeSectionRowDescription = styled.div`
  width: 66.66667%;
  text-align: right;

  @media screen and ${device.tablet} {
    text-align: left;
    width: 100%;
  }
`

const EducationColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.degree ? '20%' : '46.667%'};

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    line-height: 2;
  }

  @media screen and ${device.tablet} {
    width: 100%;
  }
`

const ResumeLink = styled.div`
  text-align: center;
  button {
    width: 10em;
    margin: 2em 0;
  }

`

const Resume = () => {
  return (
    <ResumeContainer>
      <h1>Resume</h1>

      <ResumeLink>
        <a href={ResumePdf} rel='noopener noreferrer' target='_blank' >
          <Button trailingIcon="picture_as_pdf" label="Resume">Download Resume</Button>
        </a>
      </ResumeLink>

      <ResumeSection>
        <h2>Competitions</h2>
        <ResumeSectionRows>
          <ResumeSectionRow>
            <ResumeSectionRowTitle>
              <h3>Australian Double Reed Society Bassoon Competition</h3>
              <span>2020</span>
            </ResumeSectionRowTitle>
            <ResumeSectionRowDescription>
              <p>First Prize</p>
            </ResumeSectionRowDescription>
          </ResumeSectionRow>
        </ResumeSectionRows>
      </ResumeSection>

      <ResumeSection>
        <h2>Festivals</h2>
        <ResumeSectionRows>
          <ResumeSectionRow>
            <ResumeSectionRowTitle>
              <h3>Blackburn Music Academy at Festival Napa Valley</h3>
              <span>Summer 2022</span>
            </ResumeSectionRowTitle>
            <ResumeSectionRowDescription>
              <p>Rotating Princpal Bassoon - Academy Orchestra</p>
              <p>Chamber Musician - L'Histoire Du Soldat, Stravinsky</p>
            </ResumeSectionRowDescription>
          </ResumeSectionRow>
        </ResumeSectionRows>
      </ResumeSection>

      <ResumeSection>
        <h2>Education</h2>
        <ResumeSectionRows>
          <ResumeSectionRow>
            <ResumeSectionRowTitle>
              <h3>University of Colorado - Boulder</h3>
              <span>2016-2020</span>
            </ResumeSectionRowTitle>
            <EducationColumn degree>
              <strong>B.M. Bassoon Performance</strong>
              <strong>B.A. Computer Science</strong>
            </EducationColumn>
            <EducationColumn>
              <p>Bassoon studies with Dr. Yoshiyuki Ishikawa</p>
              <Collapsible label='Performance Experience'>
              <ul>
                  <li>CU Symphony orchestra - Bassoon 1&2, Contrabasssoon</li>
                  <li>CU Wind Symphony - Bassoon 1&2, Contrabasssoon</li>
                  <li>CU Eklund Opera - Bassoon, West Side Story</li>
                  <li>CU Philharmonia Orchestra - Principal Bassoon</li>
                  <li>Chamber music</li>
                </ul>
              </Collapsible>

              <Collapsible label='Relevant Courses'>
                <ul>
                  <li>Music Theory 1-4</li>
                  <li>Aural Skills 1-4</li>
                  <li>Music History 1&2</li>
                  <li>Conducting</li>
                  <li>18th century counterpoint</li>
                  <li>Instrumentation</li>
                </ul>
              </Collapsible>
            </EducationColumn>
          </ResumeSectionRow>
          <ResumeSectionRow>
            <ResumeSectionRowTitle>
              <h3>University of Miami - Frost School of Music</h3>
              <span>2021 - Expected 2023</span>
            </ResumeSectionRowTitle>
            <EducationColumn degree>
              <strong>M.M Bassoon Performance</strong>
            </EducationColumn>
            <EducationColumn>
            <p>Bassoon studies with Gabriel Beavers</p>
            <Collapsible label='Performance Experience'>
              <ul>
                  <li>Frost Symphony Orchestra - Rotating Principal</li>
                  <li>Henry Mancini Institute - Bassoon Fellow</li>
                  <li>Frost Wind Ensemble - Rotating Principal</li>
                  <li>Chamber Music - Graduate Woodwind Quintet</li>
                </ul>
              </Collapsible>

              <Collapsible label='Relevant Courses'>
                <ul>
                  <li>Advanced Comprehensive Theory</li>
                  <li>Bassoon Repertoire and pedagogy</li>
                  <li>Experiential Musicianship and Theory Pedagogy</li>
                  <li>Music Bibliography</li>
                  <li>World of the Working Musician</li>
                  <li>Communication | Marketing | and Publicity for the Musical Artist</li>
                </ul>
              </Collapsible>
            </EducationColumn>
          </ResumeSectionRow>
        </ResumeSectionRows>
      </ResumeSection>

      <ResumeSection>
        <h2>Other Experience</h2>
        <ResumeSectionRows>
          <ResumeSectionRow>
            <ResumeSectionRowTitle>
              <h3>Palm Beach Symphony</h3>
              <span>February 2022</span>
            </ResumeSectionRowTitle>
            <ResumeSectionRowDescription>
              <p>Substitute Second Bassoon</p>
            </ResumeSectionRowDescription>
          </ResumeSectionRow>
          <ResumeSectionRow>
            <ResumeSectionRowTitle>
              <h3>Longmont Symphony Orchestra</h3>
              <span>2019</span>
            </ResumeSectionRowTitle>
            <ResumeSectionRowDescription>
              <p>Substitute Bassoon & Contrabassoon</p>
            </ResumeSectionRowDescription>
          </ResumeSectionRow>
          <ResumeSectionRow>
            <ResumeSectionRowTitle>
              <h3>International Double Reed Society</h3>
            </ResumeSectionRowTitle>
            <ResumeSectionRowDescription>
              <strong>2022 - Boulder, CO</strong>
              <p>Chamber Music Performer: Bill Douglas tribute recital</p>
              <p>Masterclass Participant with Andrea Cellacchi</p>
            </ResumeSectionRowDescription>
          </ResumeSectionRow>
        </ResumeSectionRows>
      </ResumeSection>

    </ResumeContainer>
  )
}

export default Resume