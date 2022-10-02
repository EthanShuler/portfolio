import React, { useState } from 'react'
import styled from 'styled-components'

const ImageCard = styled.img`
  transition: all .2s ease-in-out;
  width: 24rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  border-radius: 0.625em;
  margin: 1em 0;
  object-fit: cover;

  &:hover {
    transform: scale(1.2);
  }
`

const ImageModal = styled.div`
  display: ${({ showImage }) => showImage ? 'block' : 'none'};
  z-index: 9999;
  position: fixed;
  padding-top: 6.25em;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgba(0,0,0,0.9);

  img {
    margin: auto;
  display: block;
  width: 80%;
  max-width: 43.75em;
  }

  p {
    margin: auto;
    width: 80%;
    max-width: 43.75em;
    text-align: center;
    color: #ccc;
    padding: 0.625em 0;
    height: 0.625em;
  }

  span {
    position: absolute;
    top: 1em;
    right: 2.1875em;
    color: #f1f1f1;
    font-size: 2.5em;
    font-weight: bold;
    transition: 0.3s;
    
    &:hover, &:focus {
      color: #bbb;
      text-decoration: none;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 700px){
    img {
      width: 100%;
      height: auto;
    }
  }
`

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
`

const PhotoGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0])
  const [showImage, setShowImage] = useState(false)

  const openImage = (src) => {
    setCurrentImage(src)
    setShowImage(true)
  }

  return (
    <>
      <ImageModal src={currentImage} showImage={showImage}>
        <span onClick={() => setShowImage(false)}>&times;</span>
        <img src={currentImage.src} alt={currentImage.alt} />
        <p>{currentImage.description}</p>
      </ImageModal>
      <Gallery>
        {images.map((image) => (
          <ImageCard
            key={image.alt}
            src={image.src}
            alt={image.alt}
            onClick={() => openImage(image)}
          />
        ))}
      </Gallery>
    </>
  )
}



export default PhotoGallery