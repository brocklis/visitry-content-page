import { useEffect, useState } from 'react'
import Button from './button'
import Logo from './logo'
import Image from "next/image"
import MobileDropdown from './mobileDropdown'
import Link from "next/link"
import MeetingPopUp from './meetingPopUp'

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
                <ul className="flex text-md font-semibold text-white space-x-4 pb-6" style={{ color: textColor }}>
                    <li><Link href="https://agency.visitry.com/login">Agency Login</Link></li>
                    <li><Link href="https://user.visitry.com/login">Clinician Login</Link></li>
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
                            <li><Link href="/#how-it-works">Agencies</Link></li>
                            <li><Link href="/#how-it-works-2">Clinicians</Link></li>
                            <li><Link href="/#faq">FAQ</Link></li>
                            <li><Link href="/#contact">Contact</Link></li>
                        </ul>
                        <MeetingPopUp
                            buttonStyle="px-10 font-open border-2 font-black rounded-2xl duration-300 py-3 border-lime-p hover:border-lime-s text-black bg-lime-p hover:bg-lime-s"
                            buttonName="Schedule a Demo"
                        />
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
