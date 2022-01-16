import { useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout'
import Button from '../components/button'
import SectionContainer from '../components/sectionContainer'
import InfiniteSectionContainer from '../components/infiniteSectionContainer'
import PopUpVideo from '../components/popupVideo'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false)
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
      <SectionContainer className="pt-20 bg-green-s">
        <div className="flex flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto">
          <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative">
            <div className={styles['heart-svg-container']}>
              <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.heart} d="M6.7998 73.2C6.7998 73.2 60.6998 269.6 182.9 252.5C305.1 235.4 330 153.7 443 153.2C556 152.7 443 299.8 443 299.8C443 299.8 322.1 454.9 301.1 441.7C280.1 428.6 88.1998 209.1 113.2 177.6C138.2 146.1 225.2 128.1 322.1 228.8" stroke="#DFE169" strokeWidth="8" strokeMiterlimit="10"/>
              </svg>
            </div>
            <div className="absolute left-1/2 translate-x-[-20%]">
              <Image
                className="cursor-pointer"
                onClick={ () => setShowModal(true) }
                src="/images/phone.png"
                width={212}
                height={400}
                alt="iPhone"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl uppercase font-bold text-center lg:text-left">Clinician</h2>
            <p className="max-w-xl py-6 text-center lg:text-left">
              I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
            </p>
          </div>
        </div>
      </SectionContainer>
      <InfiniteSectionContainer className="pt-20" id="how-it-works" slideInClassName={styles['slide-in']} slideOutClassName={styles['slide-out']}>
        <h1 className="text-2xl">How It Works</h1>
        <div className="section flex flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto">
          <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative">
            <div>
              <Image
                className="cursor-pointer"
                onClick={ () => setShowModal(true) }
                src="/images/phone.png"
                width={212}
                height={400}
                alt="iPhone"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl uppercase font-bold text-center lg:text-left">Title 1</h2>
            <p className="max-w-xl py-6 text-center lg:text-left">
              I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
            </p>
          </div>
        </div>
        <div className="section hidden flex flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto">
          <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative">
            <div>
              <Image
                className="cursor-pointer"
                onClick={ () => setShowModal(true) }
                src="/images/phone.png"
                width={212}
                height={400}
                alt="iPhone"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl uppercase font-bold text-center lg:text-left">Title 2</h2>
            <p className="max-w-xl py-6 text-center lg:text-left">
              I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
            </p>
          </div>
        </div>
        <div className="section hidden flex flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto">
          <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative">
            <div>
              <Image
                className="cursor-pointer"
                onClick={ () => setShowModal(true) }
                src="/images/phone.png"
                width={212}
                height={400}
                alt="iPhone"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl uppercase font-bold text-center lg:text-left">Title 3</h2>
            <p className="max-w-xl py-6 text-center lg:text-left">
              I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
            </p>
          </div>
        </div>
      </InfiniteSectionContainer>
      <SectionContainer className="pt-20 bg-purple">
        <div className="flex flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto">
          <div>
            <h2 className="text-3xl uppercase font-bold text-center lg:text-left">Agencies</h2>
            <p className="max-w-xl py-6 text-center lg:text-left">
              I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
            </p>
          </div>
          <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative">
            <div className={styles['heart-svg-container']}>
                <svg width="500" height="500" style={{transform: "scaleX(-1)"}} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.heart} d="M6.7998 73.2C6.7998 73.2 60.6998 269.6 182.9 252.5C305.1 235.4 330 153.7 443 153.2C556 152.7 443 299.8 443 299.8C443 299.8 322.1 454.9 301.1 441.7C280.1 428.6 88.1998 209.1 113.2 177.6C138.2 146.1 225.2 128.1 322.1 228.8" stroke="#DFE169" strokeWidth="8" strokeMiterlimit="10"/>
              </svg>
            </div>
            <div className="absolute right-1/2 translate-x-[20%]">
              <Image
                className="cursor-pointer"
                onClick={ () => setShowModal(true) }
                src="/images/phone.png"
                width={212}
                height={400}
                alt="iPhone"
              />
            </div>
          </div>
        </div>
      </SectionContainer>
      <InfiniteSectionContainer id="how-it-works-2"  slideInClassName={styles['slide-in']} slideOutClassName={styles['slide-out']}>
        <h1 className="text-2xl">How It Works</h1>
        <div className="section flex flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto">
          <div>
            <h2 className="text-3xl uppercase font-bold text-center lg:text-left">Title 1B</h2>
            <p className="max-w-xl py-6 text-center lg:text-left">
              I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
            </p>
          </div>
          <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative">
            <div>
              <Image
                className="cursor-pointer"
                onClick={ () => setShowModal(true) }
                src="/images/phone.png"
                width={212}
                height={400}
                alt="iPhone"
              />
            </div>
          </div>
        </div>
        <div className="section hidden flex flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto">
          <div>
            <h2 className="text-3xl uppercase font-bold text-center lg:text-left">Title 2B</h2>
            <p className="max-w-xl py-6 text-center lg:text-left">
              I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
            </p>
          </div>
          <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative">
            <div>
              <Image
                className="cursor-pointer"
                onClick={ () => setShowModal(true) }
                src="/images/phone.png"
                width={212}
                height={400}
                alt="iPhone"
              />
            </div>
          </div>
        </div>
        <div className="section hidden flex flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto">
          <div>
            <h2 className="text-3xl uppercase font-bold text-center lg:text-left">Title 3B</h2>
            <p className="max-w-xl py-6 text-center lg:text-left">
              I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
            </p>
          </div>
          <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative">
            <div>
              <Image
                className="cursor-pointer"
                onClick={ () => setShowModal(true) }
                src="/images/phone.png"
                width={212}
                height={400}
                alt="iPhone"
              />
            </div>
          </div>
        </div>
      </InfiniteSectionContainer>
      </Layout>
      </>
  )
}

export default Home
