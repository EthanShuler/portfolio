import React from 'react'
import styled from 'styled-components'
import instagramIcon from './instagram.svg'
import facebookIcon from './facebook.svg'
import youtubeIcon from './youtube.svg'

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const Icon = styled.img`
  height: 1em;
`

const Socials = () => {
  return (
    <SocialMedia>
      <a href='https://www.instagram.com/ethanshuler/' target='_blank' rel='noreferrer'><Icon src={instagramIcon} alt='instagram' /></a>
      <a href='https://www.facebook.com/ethan.shuler.1/' target='_blank' rel='noreferrer'><Icon src={facebookIcon} alt='instagram' /></a>
      <a href='https://www.youtube.com/channel/UC5I4pf2EFAYsSP-TbGwatgg' target='_blank' rel='noreferrer'><Icon src={youtubeIcon} alt='instagram' /></a>
    </SocialMedia>
  )
}

export default Socials