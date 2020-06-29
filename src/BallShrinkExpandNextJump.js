import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import BallShrinkExpandNextJumpPresentational from './BallShrinkExpandNextJumpPresentational'
const BallShrinkExpandNextJump = ({n}) => {
    const {w, h} = useDimension()
    const {scale, i} = useAnimatedScale(0.02, 20, 5)
    return <BallShrinkExpandNextJumpPresentational w = {w} h = {h} n = {n} i = {i} scale = {scale}>
      </BallShrinkExpandNextJumpPresentational>
}

export default BallShrinkExpandNextJump