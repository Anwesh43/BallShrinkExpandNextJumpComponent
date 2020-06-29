import {useState, useEffect} from 'react'
import {dividesScale, sinify} from './utils'

export const useAnimatedScale = (scGap, delay, n) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [i, setI] = useState(0)
    const [dir, setDir] = useState(0)
    return {
        scale, 
        i,
        start() {
            if (!animated) {
                var currScale = scale 
                setAnimated(false)
                const interval = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(1)
                        setAnimated(false)
                        if (i + dir < n) {
                          setI(i + dir)
                        } else {
                            setDir(dir * -1)
                        }

                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
            return () => {
                window.onresize = () => {

                }
            }
        }
    })
    return {
        w, 
        h,
    } 
}

export const useStyle = (i, w, h, scale, n) => {
    const size = w / 5 
    const background = '#3F51B5'
    const sc1 = divideScale(scale, 0, 2)
    const sc2 = divideScale(scale, 1, 2)
    const sf1 = sinify(sc1)
    const position = 'absolute'
    const width = `${size * sf1}px`
    const height = `${size * sf1}px`
    const gap = w / (n + 1)
    const top = `${h / 2 - size / 2}px`
    const left = `${i * gap + gap * sc2}px`
    const borderRadius = '50%'
    return {
        getSinifiedCircleStyle() {
            return {position, backgroud, width, height, top, left, borderRadius}
        }
    }

}