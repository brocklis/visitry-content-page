import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/button'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="gradient-bg py-14">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-merri font-bold text-7xl">The seamless go-between</h1>
        <Button
          text="Start Now"
          color="primary"
        />
      </div>
    </div>
  )
}

export default Home
