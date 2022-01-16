import { useState, useEffect } from 'react'
import { InView } from 'react-intersection-observer'
import SectionContainer from './sectionContainer'

export default function InfiniteSectionContainer(props: {className: string, slideInClassName: string, slideOutClassName: string, id: string, children: any}) {
    const [ currBenefitIndex, setBenefitIndex ] = useState( 0 )

    function loadMoreBenefits(shouldLoadMore, entry) {
        const sections = document.querySelectorAll(`#${props.id} .section`)
        if ( shouldLoadMore ) {
            if ( currBenefitIndex >= sections.length - 1 ) {
                return
            }
            const newBenefitIndex = currBenefitIndex + 1
            sections[currBenefitIndex].classList.remove(props.slideInClassName)
            sections[currBenefitIndex].classList.add(props.slideOutClassName)
            sections[newBenefitIndex].classList.add(props.slideInClassName)
            sections[newBenefitIndex].classList.remove('hidden')
            setBenefitIndex( newBenefitIndex )
            window.scrollBy(0, -200)
        }
    }
    return (
        <>
            <SectionContainer className={props.className} id={props.id || ""}>
                {props.children}
            </SectionContainer>
            <InView onChange={loadMoreBenefits} />
        </>
    )
}
