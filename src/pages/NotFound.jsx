import React from 'react'
import '@styles/NotFound.scss'

import notFoundGif from '@gifs/2db0b280898527.5cee93b96b7f6.gif';

const NotFound = () => {
  return (
    <div>
        <img src={notFoundGif} alt="gif" className="logo-not-found" />
    </div>
  )
}

export default NotFound