import {useState, useEffect} from 'react'

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