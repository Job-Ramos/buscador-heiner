import React from 'react'

const ImageCard = ({imageInfo}) => {
  return (
    <article className='container_imagenes'>
        <img src={imageInfo.webformatURL} alt="" />
    </article>
  )
}

export default ImageCard