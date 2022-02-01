import { useEffect, useState } from 'react'
import Button from './button'
import Logo from './logo'
import Image from "next/image"
import MobileDropdown from './mobileDropdown'
import Link from "next/link"

type Props = {
    defaultColor?: string
    defaultTextColor?: string
    defaultBGColor?: string
    scrollBGColor?: string
    scrollColor?: string
    scrollTextColor?: string
    forwardedRef?: any
}
export default function Header(props: Props) {
    const [color, setColor] = useState(props.defaultColor)
    const [textColor, setTextColor] = useState(props.defaultTextColor)
    const [backgroundColor, setBackgroundColor] = useState(props.defaultBGColor)
    const [additionalClasses, setAdditionalClasses] = useState("")
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setBackgroundColor(props.scrollBGColor)
            setTextColor(props.scrollTextColor)
            setColor(props.scrollColor)
            setAdditionalClasses('scrolling')
        } else {
            setBackgroundColor(props.defaultBGColor)
            setTextColor(props.defaultTextColor)
            setColor(props.defaultColor)
            setAdditionalClasses('')
        }
    }
    return (
        <div style={{ backgroundColor: backgroundColor }} className={`fixed w-full py-4 top-0 z-10 ${additionalClasses}`} id="menu-header" ref={props.forwardedRef}>
            <div className="flex max-w-7xl w-11/12 mx-auto justify-end">
                <ul className="flex text-md font-semibold text-white space-x-4 pb-6" style={{color: textColor}}>
                    <li>Agency Login</li>
                    <li>Clinician Login</li>
                </ul>
            </div>
            <div className="flex">
                <div className="hidden lg:flex w-11/12 mx-auto justify-between" style={{ maxWidth: "80rem" }}>
                    <div className="flex">
                        <Link href="/"><Logo fill={color} /></Link>
                    </div>
                    <div className="grow self-center flex font-bold justify-evenly text-xl">

                    </div>
                    <div className="flex items-center space-x-10">
                        <ul className="flex space-x-5 text-lg open font-bold" style={{ color: textColor }}>
                            <li>Agencies</li>
                            <li>Clinicians</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                            <li>Login</li>
                        </ul>
                        <Button text="Schedule a Demo" color="primary" styling="px-10" />
                    </div>
                </div>
            </div>
            <div className="flex lg:hidden items-center justify-between max-w-7xl mx-auto w-11/12">
                <Link href="/"><Logo fill={color} /></Link>
                <div className="flex justify-center">
                    <MobileDropdown color={textColor} />
                </div>
            </div>
        </div>
    )
}
