import { useEffect, useState } from 'react'
import Button from './button'
import Logo from './logo'
import Image from "next/image"
import MobileDropdown from './mobileDropdown'
export default function Header(props) {
    const [color, setColor] = useState(props.defaultColor)
    const [backgroundColor, setBackgroundColor] = useState(props.defaultBGColor)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setBackgroundColor(props.scrollBGColor)
            setColor(props.scrollColor)
        } else {
            setBackgroundColor(props.defaultBGColor)
            setColor(props.defaultColor)
        }
    }
    return (
        <div style={{ backgroundColor: backgroundColor }} className='fixed w-full flex py-4 top-0 z-10'>
            <div className="hidden lg:flex w-11/12 mx-auto justify-between" style={{ maxWidth: "80rem" }}>
                <div className="flex">
                    <Logo fill={color} />
                </div>
                <div className="grow self-center flex font-bold justify-evenly text-xl">

                </div>
                <div className="flex items-center space-x-10">
                    <ul className="flex space-x-5 text-white text-lg open font-bold">
                        <li>Button</li>
                        <li>Button</li>
                        <li>Button</li>
                        <li>Button</li>
                        <li>Button</li>
                    </ul>
                    <Button text="Call to action" color="primary" styling="px-10" />
                </div>
            </div>
            <div className="flex lg:hidden items-center justify-between max-w-7xl mx-auto w-11/12">
                <Image 
                    src="/images/logo-white.svg"
                    width={215}
                    height={47}
                    alt="Test"
                />
                <div className="flex justify-center">
                <MobileDropdown />
                </div>
            </div>
        </div>
    )
}
