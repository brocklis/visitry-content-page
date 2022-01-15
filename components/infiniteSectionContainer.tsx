import { useState, useEffect } from 'react'
import { InView } from 'react-intersection-observer'
import SectionContainer from './sectionContainer'

export default function InfiniteSectionContainer(props) {
    const [ currBenefitIndex, setBenefitIndex ] = useState( 0 )

    function loadMoreBenefits(shouldLoadMore, entry) {
        const sections = document.querySelectorAll(`#${props.id} .section`)
        if ( shouldLoadMore ) {
            if ( currBenefitIndex >= sections.length - 1 ) {
                return
            }
            const newBenefitIndex = currBenefitIndex + 1
            setBenefitIndex( newBenefitIndex )
            sections.forEach(section => section.classList.add('hidden'))
            sections[newBenefitIndex].classList.remove('hidden')
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
