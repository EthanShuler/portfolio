import React from 'react'
import styled from 'styled-components'
import instagramIcon from './instagram.svg'
import facebookIcon from './facebook.svg'
import youtubeIcon from './youtube.svg'

const socials = [
  {
    name: 'instagram',
    url: 'https://www.instagram.com/ethanshuler/',
    icon: instagramIcon
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/ethan.shuler.1/',
    icon: facebookIcon
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/channel/UC5I4pf2EFAYsSP-TbGwatgg',
    icon: youtubeIcon
  },
]

const SocialMedia = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 3em;
  padding: 2em 0;
`

const Icon = styled.img`
  height: 2em;
`

const Socials = () => {
  return (
    <SocialMedia>
      {socials.map((social) => (
        <a href={social.url} target="_blank" rel="noreferrer" key={social.name}>
          <Icon src={social.icon} alt={social.name} />
        </a>
      ))}
    </SocialMedia>
  )
}

export default Socials