export default function Button(props) {

    const buttonType = () => {
        return `font-open border-2 font-black rounded-2xl duration-300 py-3 ${props.styling} ${props.color === "primary" ? 'border-lime-p hover:border-lime-s text-black bg-lime-p hover:bg-lime-s' : 'border-lime-p text-lime-p hover:text-black hover:bg-lime-p'}`
    }

    const completeClassList = buttonType() + " " + (props.className || "")

    return (
        <a href={props.slug}>
            <button className={completeClassList}>
                {props.text}
            </button>
        </a>
    )
}
