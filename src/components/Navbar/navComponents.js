import styled from "styled-components"
import { device } from "../../utils/Devices"

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: hsl(0 0% 100% / 0.3);

  position: relative;
  height: 4.5em;
  width: 100%;
  padding: 1em 1em;
  align-items: center;
  font-size: 1.5em;
  font-weight: 700;

  z-index: 1000;

  &:hover {
    background-color: hsl(0 0% 100% / 0.8);
    transition: background-color 0.3s ease;
  }

  @media screen and ${device.tablet} {
    background-color: ${({ expanded }) => (expanded ? 'hsl(0 0% 100% / 0)' : 'hsl(0 0% 100% / 0.5)')};

    &:hover {
      background-color: ${({ expanded }) => (expanded ? 'hsl(0 0% 100% / 0)' : 'hsl(0 0% 100% / 0.5)')};
  }
`

export const Brand = styled.div`
  margin-left: 1rem;
`

export const NavigationMenu = styled.div`
  margin-left: auto;
  display: flex;
  padding: 0;
  gap: 2em;

  @media screen and ${device.tablet} {
    gap: 2em;

    position: fixed;
    inset: 0 0 0 30%;
  
    flex-direction: column;
    padding: min(30vh, 10rem) 2em;

    background: hsl(0 0% 100% / 0.1);
    backdrop-filter: blur(1rem);

    display: ${({ expanded }) => (expanded ? 'block' : 'none')};
  }
`

export const NavText = styled.p`
  display: block;
  &:hover {
    color: #c24a10;
    border-bottom: 2px solid #c24a10;
  }

  @media screen and ${device.tablet} {
    padding: 1.5rem 0;
    width: 100%;

    &:hover {
      border-bottom: 0;
      background-color: #eee;
    }
  }
`

export const Hamburger = styled.button`
  border: 0;
  height: 2.5em;
  width: 2.5em;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #c24a10;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  color: #fff;

  z-index: 2000;

  position: absolute;
  top: 50%;
  right: 1.5625em;
  transform: translateY(-50%);

  display: none;

  &:hover {
    background-color: #612508;
  }

  @media screen and ${device.tablet} {
    display: block;
  }
`

export const Logo = styled.img`
width: 75%;

@media screen and ${device.tablet} {
  width: 60%;
}
`