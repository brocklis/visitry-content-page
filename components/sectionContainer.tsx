import { useInView } from 'react-intersection-observer';

export default function SectionContainer(props) {
    return (
        <section className={props.className || ""} id={props.id || ""}>
            <div className="px-7">
                {props.children}
            </div>
        </section>
    )
}
