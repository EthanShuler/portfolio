import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Button from './Button'

const Content = styled.div`
  border: 1px solid rgb(128, 123, 123);
  padding: 0.5rem;
  border-radius: 5px;
`

const ContentWrapper = styled.div`
  &.content-show {
    height: ${props => props.scrollHeight}px;
  }

  &.content-parent {
    height: 0em;
    overflow: hidden;
    transition: height 0.5s ease-in-out;
  }
`

const Collapsible = ({label, children}) => {
  const [open, setOpen] = useState(false)
  const contentRef = useRef()

  const toggle = () => setOpen(!open)

  return (
    <div>
      <Button onClick={toggle}>{label}</Button>
        <ContentWrapper ref={contentRef} scrollHeight={open ? contentRef.current.scrollHeight : 0} className={open ? "content-show" : "content-parent"}>
          <Content>
            {children}
          </Content>
        </ContentWrapper>
    </div>
  )
}

export default Collapsible