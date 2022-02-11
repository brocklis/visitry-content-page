import { useState, useEffect, useRef } from 'react'

export default function InView(props: {className?: string, id?: string, children: any}) {
    const ref = useRef(null)
    const [ hasPlayed, setHasPlayed ] = useState(false)
    const handleScroll = (evt) => {
        const rect = ref.current.getBoundingClientRect()
        if ( !hasPlayed && rect.top < window.innerHeight ) {
            console.log("Playing ", props.className)
            setHasPlayed(true)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    });
    return (
        <div className={props.className} ref={ref} id={props.id}>
            {hasPlayed && props.children}
        </div>
    )
}
