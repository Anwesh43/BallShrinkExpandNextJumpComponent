import React from 'react'
import {useStyle} from './hooks'

const BallShrinkExpandNextJumpPresentational = ({w, h, n, i, onClick, scale, dir}) => {
    const {getSinifiedCircleStyle} = useStyle(i, w, h, scale, n, dir)
    return <div style = {getSinifiedCircleStyle()} onClick = {onClick}>
      </div>
 }
 export default BallShrinkExpandNextJumpPresentational