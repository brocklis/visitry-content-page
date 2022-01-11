import { useEffect, useState } from 'react'
import Button from './button'
import Logo from './logo'
export default function Header(props) {
    const [ color, setColor ] = useState(props.defaultColor)
    const [ backgroundColor, setBackgroundColor ] = useState(props.defaultBGColor)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        if ( window.scrollY > 50 ) {
            setBackgroundColor(props.scrollBGColor)
            setColor(props.scrollColor)
        } else {
            setBackgroundColor(props.defaultBGColor)
            setColor(props.defaultColor)
        }
    }
    return (
        <div style={{backgroundColor: backgroundColor}} className="fixed w-full text-xl font-bold flex py-4 top-0 z-10">
            <div className="px-8 flex">
                <Logo fill={color} />
            </div>
            <div className="grow self-center flex justify-evenly">
                <a href="#" style={{color}}>Button</a>
                <a href="#" style={{color}}>Button</a>
                <a href="#" style={{color}}>Button</a>
                <a href="#" style={{color}}>Button</a>
                <a href="#" style={{color}}>Button</a>
            </div>
            <div className="px-8 self-center">
                <Button text="Call to action" color="primary" />
            </div>
        </div>
    )
}
