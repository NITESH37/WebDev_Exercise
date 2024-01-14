import React from 'react'
import {TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'
import { icons } from '../../../constants'

const ScreenHeaderBtn = (iconUrl,dimension, handlePress) => {
  return (
    <TouchableOpacity>
      <Image 
      src={iconUrl}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn