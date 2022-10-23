import React from 'react'
import styled from 'styled-components'
import { device } from '../../utils/Devices'
import Collapsible from '../Collapsible'

const Row = styled.div`
  border-top: 1px solid #c4c4c4;
  display: flex;
  margin-bottom: 3em;
  padding-top: 3em;
  width: 100%;

  @media screen and ${device.tablet} {
    flex-direction: column;
}
`

const RowTitle = styled.div`
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

const EducationColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.degree ? '30%' : '46.667%'};

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

const Description = styled.div`
width: 66.66667%;
  text-align: right;

  @media screen and ${device.tablet} {
    text-align: left;
    width: 100%;
  }
`

const EducationContainer = styled.div`
  margin: 4em 0;
  `

const Education = () => {
  return (
    <EducationContainer id='education'>
      <h1 style={{'color': '#ccd6f6'}}>Education</h1>
      <Row>
        <RowTitle>
          <h3>University of Colorado - Boulder</h3>
          <span>2016-2020</span>
        </RowTitle>
        <EducationColumn degree>
          <strong>B.A. Computer Science (GPA: 4.0)</strong>
          <strong>B.M. Bassoon Performance</strong>
        </EducationColumn>
        <EducationColumn>
          <Collapsible label='Relevant Courses'>
            <ul>
              <li>Algorithms</li>
              <li>Software Development</li>
              <li>Database Systems</li>
              <li>Discrete Structures with Computer Applications</li>
              <li>Linear Algebra with Computer Applications</li>
              <li>Data Structures</li>
              <li>Computer Systems</li>
              <li>Principles of Programming Languages</li>
              <li>Cyber Security</li>
              <li>Dynamic Models of Biology</li>
              <li>Calculus I & II</li>
              <li>Computer Animation</li>
            </ul>
          </Collapsible>
        </EducationColumn>
      </Row>

      <Row>
        <RowTitle>
          <h3>University of Miami - Frost School of Music</h3>
          <span>2021 - Expected 2023</span>
        </RowTitle>
        <Description>
          <strong>M.M Bassoon Performance</strong>
        </Description>

      </Row>

    </EducationContainer>
  )
}

export default Education