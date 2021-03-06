import { useState, useEffect, useRef } from 'react'

export function getTranslate(item: HTMLElement): number | number[] | undefined {
    const transArr = []
    if (!window.getComputedStyle) {
      return
    }
    const style = window.getComputedStyle(item)
    const transform = style.transform || style.webkitTransform
    let mat = transform.match(/^matrix3d\((.+)\)$/)
    if (mat) {
      return parseFloat(mat[1].split(', ')[13])
    }
    mat = transform.match(/^matrix\((.+)\)$/)
    mat ? transArr.push(parseInt(mat[1].split(', ')[4], 10)) : transArr.push(0)
    mat ? transArr.push(parseInt(mat[1].split(', ')[5], 10)) : transArr.push(0)

    return transArr
  }

export default function InfiniteSectionContainer(props: {className?: string, id?: string, containerClassName?: string, heroClassName?: string, minScrollAmount?: number, children: any}) {
    const ref = useRef(null)
    const heroRef = useRef(null)
    const headerRef = useRef(null)
    const introRef = useRef(null)
    const minScrollAmount = isNaN(props.minScrollAmount) ? 100 : props.minScrollAmount
    const handleScroll = (evt) => {
        const refStyle = window.getComputedStyle(ref.current)
        const refPaddingTop = parseInt(refStyle.getPropertyValue('padding-top'))
        const refMarginTop = parseInt(refStyle.getPropertyValue('margin-top'))
        const refTranslateY = getTranslate(ref.current)[1]
        const currentScrollY = window.scrollY
        const refScrollY = ref.current.offsetTop + refPaddingTop + refMarginTop + refTranslateY
        const heroHeight = heroRef.current.offsetHeight
        const opacity = Math.min(1, ( currentScrollY - refScrollY ) / heroHeight)
        const yTranslation = currentScrollY - (refScrollY + heroHeight)
        if ( currentScrollY - minScrollAmount > refScrollY ) {
            heroRef.current.style.opacity = 1 - opacity
            headerRef.current.style.opacity = opacity
            introRef.current.style.opacity = opacity
            const subChild1Opacity = Math.min(1, 3 * ( ( yTranslation - minScrollAmount ) / introRef.current.childNodes[0].children[0].offsetHeight ))
            const subChild0Opacity = 1 - subChild1Opacity
            introRef.current.childNodes[0].children[0].style.opacity = Math.min(1, subChild0Opacity * 3)
            introRef.current.childNodes[0].children[1].style.opacity = Math.min(1, subChild1Opacity * 3)
            if ( yTranslation > 0 ) {
                headerRef.current.style.opacity = Math.max(0, 1 - (yTranslation / minScrollAmount))
            }
            if ( yTranslation > introRef.current.childNodes[0].children[0].offsetHeight ) {
                const subChild2Opacity = Math.min(1, ( yTranslation - introRef.current.childNodes[0].children[0].offsetHeight ) / introRef.current.childNodes[0].children[1].offsetHeight)
                const newSubChild1Opacity = Math.min(1, (1 - subChild2Opacity) / 3)
                introRef.current.childNodes[0].children[1].style.opacity = newSubChild1Opacity
                introRef.current.childNodes[0].children[2].style.opacity = Math.min(1, subChild2Opacity * 3)
            }
        } else {
            heroRef.current.style.opacity = 1
            headerRef.current.style.opacity = 0
            introRef.current.style.opacity = 0
        }
        if ( opacity >= 1 ) {
            introRef.current.style.transform = `translateY(-${yTranslation}px)`
        } else {
            introRef.current.style.transform = ``
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    });
    return (
        <>
            <section className={`relative ${props.className || ""}`} id={props.id || ""} ref={ref}>
                {props.children[0]}
                <div className={`sticky-container w-full sticky top-0 ${props.containerClassName || ""}`} id={props.id || ""}>
                    <div className="relative w-full">
                        <div className={`hero-parent absolute top-0 w-full h-screen flex items-center opacity-1 ${props.heroClassName || ""}`} ref={heroRef}>
                            {props.children[1]}
                        </div>
                        <div className="header-parent absolute top-0 w-full pt-10 md:pt-20 opacity-0 z-10" ref={headerRef}>
                            {props.children[2]}
                        </div>
                        <div className="intro-parent absolute top-0 w-full opacity-0 pt-32 md:pt-0" ref={introRef}>
                            {props.children[3]}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
