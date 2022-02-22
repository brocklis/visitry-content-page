import { useEffect, useRef, useState } from 'react'
import Header from './header'
import Footer from './footer'
import Meta from './meta'

type Props = {
  children: React.ReactNode
  offsetMainContent?: boolean
}

const Layout = ({ children, offsetMainContent = false }: Props) => {
  const ref = useRef(null)
  const [ offsetTop, setOffsetTop ] = useState(0)
  useEffect(() => {
    if (offsetMainContent) {
      setOffsetTop(ref.current.offsetHeight)
    }
  }, [offsetMainContent])
  return (
    <>
      <Meta />
      <Header defaultColor="#fff" scrollColor="#00A38B" defaultTextColor="white" scrollTextColor="#333" defaultBGColor="rgba(0,0,0,0)" scrollBGColor="#fff" forwardedRef={ref} />
      <div className="min-h-screen relative" style={{"top": `-${offsetTop}px`}}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
