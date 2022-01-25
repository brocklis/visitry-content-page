import { useState, useEffect, useRef } from 'react'

export default function InfiniteSectionContainer(props: {className?: string, id?: string, children: any}) {
    const ref = useRef(null)
    const heroRef = useRef(null)
    const headerRef = useRef(null)
    const introRef = useRef(null)
    const [ height, setHeight ] = useState(5000)
    const handleScroll = (evt) => {
        const currentScrollY = window.scrollY
        const refScrollY = ref.current.offsetTop
        const heroHeight = heroRef.current.offsetHeight
        const opacity = Math.min(1, ( currentScrollY - refScrollY ) / heroHeight)
        const yTranslation = currentScrollY - (refScrollY + heroHeight)
        if ( currentScrollY > refScrollY ) {
            heroRef.current.style.opacity = 1 - opacity
            headerRef.current.style.opacity = opacity
            introRef.current.style.opacity = opacity
            const subChild2Opacity = Math.min(1, ( ( yTranslation - introRef.current.childNodes[0].children[0].offsetHeight ) / introRef.current.childNodes[0].children[1].offsetHeight ) )
            let subChild1Opacity = Math.min(1, ( yTranslation / introRef.current.childNodes[0].children[0].offsetHeight ))
            let subChild0Opacity = 1 - subChild1Opacity
            if ( subChild2Opacity > 0 ) {
                subChild1Opacity = 1 - subChild2Opacity
                subChild0Opacity = 0
            }
            introRef.current.childNodes[0].children[0].style.opacity = subChild0Opacity
            introRef.current.childNodes[0].children[1].style.opacity = subChild1Opacity
            introRef.current.childNodes[0].children[2].style.opacity = Math.min(1, subChild2Opacity * 2)
        } else {
            heroRef.current.style.opacity = 1
            headerRef.current.style.opacity = 0
            introRef.current.style.opacity = 0
        }
        if ( opacity >= 1 ) {
            if ( introRef.current.childNodes[0].children[2].style.opacity >= 1 ) {
                headerRef.current.style.opacity = 0
            } else {
                headerRef.current.style.opacity = opacity
            }
            introRef.current.style.transform = `translateY(-${yTranslation}px)`
        } else {
            introRef.current.style.transform = ``
        }
    }
    useEffect(() => {
        setHeight(heroRef.current.offsetHeight * 2.5)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    });
    return (
        <section className={`relative ${props.className || ""}`} style={{"height": height}} id={props.id || ""} ref={ref}>
            <div className="sticky-container w-full sticky top-0" id={props.id || ""}>
                <div className="relative w-full h-screen">
                    <div className="hero-parent absolute top-0 w-full h-screen pt-20 opacity-1" ref={heroRef}>
                        {props.children[0]}
                    </div>
                    <div className="header-parent absolute top-0 w-full h-screen pt-20 opacity-0" ref={headerRef}>
                        {props.children[1]}
                    </div>
                    <div className="intro-parent absolute top-0 w-full h-screen pt-20 opacity-0" ref={introRef}>
                        {props.children[2]}
                    </div>
                </div>
            </div>
        </section>
    )
}
