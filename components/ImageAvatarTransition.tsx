import React, { useState } from 'react'
import NextImage from 'next/image'

const ImageAvatarTransition = ({ src, ...props }) => {
  const [isReady, setIsReady] = useState(false)

  const onLoadCallback = () => {
    setIsReady(true)
  }

  return (
    <NextImage
      src={src}
      className={`bg-gray-300 dark:bg-gray-700 transition duration-1000 w-10 h-10 rounded-full ${
        isReady ? 'blur-0 scale-100 ' : 'blur-2xl scale-120'
      }`}
      {...props}
      onLoadingComplete={onLoadCallback}
    />
  )
}

export default ImageAvatarTransition
