import {useState, useEffect} from 'react'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [i, setI] = useState(0)
    const [dir, setDir] = useState(0)
    return {
        scale, 
        start() {
            if (!animated) {
                var currScale = scale 
                setAnimated(false)
                const interval = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(1)
                    }
                }, delay)
            }
        }
    }
}