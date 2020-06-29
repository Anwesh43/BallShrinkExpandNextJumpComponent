import {useState, useEffect} from 'react'
import {divideScale, sinify} from './utils'

export const useAnimatedScale = (scGap, delay, n) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [i, setI] = useState(0)
    const [dir, setDir] = useState(1)
    return {
        scale, 
        i,
        dir, 
        start() {
            if (!animated) {
                var currScale = scale 
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        if ((i < n && dir == 1) || (i > 0 && dir == -1)) {
                            setI(i + dir)
                            if (i + dir == n || i + dir == 0) {
                                setDir(dir * -1)
                            }
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

export const useStyle = (i, w, h, scale, n, dir) => {
    
    const background = '#3F51B5'
    const sc1 = divideScale(scale, 0, 2)
    const sc2 = divideScale(scale, 1, 2)
    const sf1 = sinify(sc1)
    const sizeFactor = 5
    const size = Math.min(w, h) / sizeFactor 
    const position = 'absolute'
    const updatedSize = size * (1 - sf1)
    const width = `${updatedSize}px`
    const height = `${updatedSize}px`
    const gap = w / (n + 1)
    const top = `${h / 2 - updatedSize / 2}px`
    const left = `${i * gap + dir * gap * sc2 + gap / 2 - updatedSize / 2}px`
    const borderRadius = '50%'
    return {
        getSinifiedCircleStyle() {
            return {position, background, width, height, top, left, borderRadius}
        }
    }

}