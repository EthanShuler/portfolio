import React from 'react'
import styled from 'styled-components'
import githubIcon from './github.svg'
import linkedinIcon from './linkedin.svg'

const Icon = styled.img`
  height: 2em;
`

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin: 2em 0;
  gap: 3em;
  padding: 2em 0;

  background-color: #475569;

  &:hover {
    background-color: hsl(0 0% 100% / 0.1);
    transition: background-color 0.3s ease;
  }
`

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <a href="https://github.com/EthanShuler" target="_blank" rel="noreferrer">
        <Icon src={githubIcon} alt="github" />
      </a>
      <a href='https://www.linkedin.com/in/ethan-shuler-1484341b6/' target="_blank" rel="noreferrer">
      <Icon src={linkedinIcon} alt="linkedin" />
      </a>
    </FooterContainer>

  )
}

export default Footer