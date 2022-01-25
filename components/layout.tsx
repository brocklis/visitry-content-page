import { useEffect, useRef, useState } from 'react'
import Header from './header'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const ref = useRef(null)
  const [ offsetTop, setOffsetTop ] = useState(0)
  useEffect(() => {
    setOffsetTop(ref.current.offsetHeight)
  }, [])
  return (
    <>
      <Meta />
      <Header defaultColor="#fff" scrollColor="#00A38B" defaultBGColor="rgba(0,0,0,0)" scrollBGColor="#fff" forwardedRef={ref} />
      <div className="min-h-screen relative" style={{"top": `-${offsetTop}px`}}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
