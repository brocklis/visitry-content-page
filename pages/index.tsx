import { useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout'
import Button from '../components/button'
import SectionContainer from '../components/sectionContainer'
import InfiniteSectionContainer from '../components/infiniteSectionContainer'
import PopUpVideo from '../components/popupVideo'
import styles from '../styles/Home.module.css'
import FAQ from '../components/faq'

const clinicianFAQ = [
  {
    question: "Test",
    answer: "Test",
  },
  {
    question: "Test",
    answer: "Test",
  },
  {
    question: "Test",
    answer: "Test",
  },
  {
    question: "Test",
    answer: "Test",
  },
]

const agencyFAQ = [
  {
    question: "Test",
    answer: "Test",
  },
  {
    question: "Test",
    answer: "Test",
  },
  {
    question: "Test",
    answer: "Test",
  },
  {
    question: "Test",
    answer: "Test",
  },
]

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <PopUpVideo showModal={showModal} setShowModal={setShowModal} />
      <Layout>
        <SectionContainer className="text-white mt-20 pt-20 gradient-bg">
          <div className="flex flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto py-20">
            <div className="w-full lg:w-1/2">
              <h1 className="text-6xl font-merri font-bold text-center lg:text-left">Heading one</h1>
              <p className="font-open max-w-3xl lg:max-w-7xl mx-auto lg:mx-0 text-lg py-6 text-center lg:text-left leading-relaxed">
                I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button text="Button" color="primary" className="px-20 mr-2" />
                <Button text="Button" color="" className="px-20" />
              </div>
            </div>
            <div className="flex justify-center shadow-standard mt-10 lg:mt-0 w-full lg:w-1/2">
              <Image
                className="cursor-pointer rounded-2xl"
                onClick={() => setShowModal(true)}
                src="/images/homepage-video-ss.jpg"
                width={677}
                height={400}
                alt="Video Screenshot with Play Button"
              />
            </div>
          </div>
        </SectionContainer>
        <InfiniteSectionContainer className="pt-80 gradient-bg translate-y-[10vh] pb-20 md:pb-10 lg:pb-0 mb-[-1000px] h-[5400px] md:h-[4900px] lg:h-[3600px] xl:h-[3200px]" id="how-it-works">
          <div className="flex flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto">
            <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative">
              <div className={styles['heart-svg-container']}>
                <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.heart} d="M6.7998 73.2C6.7998 73.2 60.6998 269.6 182.9 252.5C305.1 235.4 330 153.7 443 153.2C556 152.7 443 299.8 443 299.8C443 299.8 322.1 454.9 301.1 441.7C280.1 428.6 88.1998 209.1 113.2 177.6C138.2 146.1 225.2 128.1 322.1 228.8" stroke="#DFE169" strokeWidth="8" strokeMiterlimit="10" />
                </svg>
              </div>
              <div className="absolute left-1/2 translate-x-[-20%]">
                <Image
                  className="cursor-pointer"
                  onClick={() => setShowModal(true)}
                  src="/images/phone.png"
                  width={212}
                  height={400}
                  alt="iPhone"
                />
              </div>
            </div>
            <div>
              <h2 className="font-merri text-5xl font-bold text-center lg:text-left">Clinician</h2>
              <p className="max-w-xl py-6 text-lg leading-relaxed text-center lg:text-left">
                I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
              </p>
            </div>
          </div>
          <div><h1 className="text-5xl text-center">How It Works</h1></div>
          <div className="pt-10">
            <div className="section flex flex-col lg:flex-row items-center max-w-4xl space-x-0 lg:space-x-10 mx-auto justify-between w-11/12">
              <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative">
                <div>
                  <Image
                    className="cursor-pointer"
                    onClick={() => setShowModal(true)}
                    src="/images/phone.png"
                    width={212}
                    height={400}
                    alt="iPhone"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-merri text-4xl font-bold text-center lg:text-left">Title 1</h2>
                <p className="max-w-xl py-6 text-center lg:text-left text-lg">
                  I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
                </p>
              </div>
            </div>
            <div className="section flex flex-col lg:flex-row items-center max-w-4xl space-x-0 lg:space-x-10 justify-between w-11/12 mx-auto">
              <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative">
                <div>
                  <Image
                    className="cursor-pointer"
                    onClick={() => setShowModal(true)}
                    src="/images/phone.png"
                    width={212}
                    height={400}
                    alt="iPhone"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-merri text-4xl font-bold text-center lg:text-left">Title 2</h2>
                <p className="max-w-xl text-lg py-6 text-center lg:text-left">
                  I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
                </p>
              </div>
            </div>
            <div className="section flex flex-col lg:flex-row items-center max-w-4xl space-x-0 lg:space-x-10 justify-between w-11/12 mx-auto">
              <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative">
                <div>
                  <Image
                    className="cursor-pointer"
                    onClick={() => setShowModal(true)}
                    src="/images/phone.png"
                    width={212}
                    height={400}
                    alt="iPhone"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-merri text-4xl font-bold text-center lg:text-left">Title 3</h2>
                <p className="max-w-xl text-lg py-6 text-center lg:text-left">
                  I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
                </p>
              </div>
            </div>
          </div>
        </InfiniteSectionContainer>
        <div className="lg:mb-0 md:mt-[-26vh] lg:mt-0 translate-y-0 xl:translate-y-[150px]">
          <svg className="xl:pt-[10vh]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#563078" fillOpacity="1" d="M0,128L80,138.7C160,149,320,171,480,154.7C640,139,800,85,960,85.3C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
        <InfiniteSectionContainer className="bg-purple mb-[-400px] h-[3600px] md:h-[3200px] lg:h-[2500px] xl:h-[2000px]" id="how-it-works-2">
          <div className="flex flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto pt-10">
            <div>
              <h2 className="text-3xl uppercase font-bold text-center lg:text-left">Agencies</h2>
              <p className="max-w-xl py-6 text-center lg:text-left">
                I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
              </p>
            </div>
            <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative">
              <div className={styles['heart-svg-container']}>
                <svg width="500" height="500" style={{ transform: "scaleX(-1)" }} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.heart} d="M6.7998 73.2C6.7998 73.2 60.6998 269.6 182.9 252.5C305.1 235.4 330 153.7 443 153.2C556 152.7 443 299.8 443 299.8C443 299.8 322.1 454.9 301.1 441.7C280.1 428.6 88.1998 209.1 113.2 177.6C138.2 146.1 225.2 128.1 322.1 228.8" stroke="#DFE169" strokeWidth="8" strokeMiterlimit="10" />
                </svg>
              </div>
              <div className="absolute right-1/2 translate-x-[20%]">
                <Image
                  className="cursor-pointer"
                  onClick={() => setShowModal(true)}
                  src="/images/phone.png"
                  width={212}
                  height={400}
                  alt="iPhone"
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl text-center translate-y-10">How It Works</h1>
          <div className="pt-20 translate-y-10">
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
                    onClick={() => setShowModal(true)}
                    src="/images/phone.png"
                    width={212}
                    height={400}
                    alt="iPhone"
                  />
                </div>
              </div>
            </div>
            <div className="section flex flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto">
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
                    onClick={() => setShowModal(true)}
                    src="/images/phone.png"
                    width={212}
                    height={400}
                    alt="iPhone"
                  />
                </div>
              </div>
            </div>
            <div className="section flex flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto">
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
                    onClick={() => setShowModal(true)}
                    src="/images/phone.png"
                    width={212}
                    height={400}
                    alt="iPhone"
                  />
                </div>
              </div>
            </div>
          </div>
        </InfiniteSectionContainer>
        <div className="pt-0 mt-[390px] md:mt-[350px]">
          <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#563078" fillOpacity="1" d="M0,128L80,138.7C160,149,320,171,480,154.7C640,139,800,85,960,85.3C1120,85,1280,139,1360,165.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto w-11/12 py-20">
          <h2 className="font-merri text-5xl font-bold text-center mb-14">FAQ</h2>
          <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0">
            <div className="w-full lg:w-1/2">
              <h3 className="font-merri text-3xl font-bold text-center mb-3">Clinician</h3>
              {clinicianFAQ.map((item, idx) => (
                <FAQ
                  key={idx}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
            <div className="w-full lg:w-1/2">
            <h3 className="font-merri text-3xl font-bold text-center mb-3">Agency</h3>
              {agencyFAQ.map((item, idx) => (
                <FAQ
                  key={idx}
                  question={item.question}
                  answer={item.answer}
                  styling="bg-purple"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="py-20">
          <h2 className="font-merri text-5xl font-bold text-center mb-14">Contact Information</h2>
        </div>
      </Layout>
    </>
  )
}

export default Home
