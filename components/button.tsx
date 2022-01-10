export default function Button(props) {

    const buttonType = () => {
        return `font-open border-2 font-black uppercase rounded-2xl duration-300 py-3 px-24 ${props.color === "primary" ? 'border-lime-p hover:border-lime-s text-black bg-lime-p hover:bg-lime-s' : 'border-lime-p text-lime-p hover:text-black hover:bg-lime-p'}`
    }

    return (
        <a href={props.slug}>
            <button className={buttonType()}>
                {props.text}
            </button>
        </a>
    )
}