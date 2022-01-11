import { useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout'
import Button from '../components/button'
import SectionContainer from '../components/sectionContainer'
import PopUpVideo from '../components/popupVideo'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <PopUpVideo showModal={showModal} setShowModal={setShowModal}/>
      <Layout>
      <SectionContainer className="text-white mt-20 pt-20 bg-green-p">
        <div className="flex flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto">
          <div>
            <h2 className="text-3xl uppercase font-bold text-center lg:text-left">Heading one</h2>
            <p className="max-w-xl py-6 text-center lg:text-left">
              I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
            </p>
            <Button text="Button" color="primary" className="mr-2" />
            <Button text="Button" color="" />
          </div>
          <div className="flex justify-center shadow-standard mt-10 lg:mt-0">
            <Image
              className="cursor-pointer"
              onClick={ () => setShowModal(true) }
              src="/images/homepage-video-ss.jpg"
              width={677}
              height={400}
              alt="Video Screenshot with Play Button"
            />
          </div>
        </div>
      </SectionContainer>
      </Layout>
      </>
  )
}

export default Home
