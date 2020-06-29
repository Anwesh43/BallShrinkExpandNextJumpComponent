import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import BallShrinkExpandNextJumpPresentational from './BallShrinkExpandNextJumpPresentational'
const BallShrinkExpandNextJump = ({n}) => {
    const {w, h} = useDimension()
    const {scale, i, start, dir} = useAnimatedScale(0.02, 20, 5)
    return <BallShrinkExpandNextJumpPresentational dir = {dir} w = {w} h = {h} n = {n} i = {i} scale = {scale} onClick = {start}>
      </BallShrinkExpandNextJumpPresentational>
}

export default BallShrinkExpandNextJump