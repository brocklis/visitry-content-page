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
import ContactForm from '../components/contactForm'

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
        <div className="relative gradient-bg z-[1] md:mb-[-8vw] lg:mb-[-12vw]">
          <SectionContainer className="relative text-white mt-20 pt-32 lg:pt-40 pb-[6rem] lg:pb-[1vh]">
            <div className="pt-36 flex flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto py-20">
              <div className="w-full lg:w-1/2">
                <h1 className="text-6xl font-merri font-bold text-center lg:text-left">Heading one</h1>
                <p className="font-open max-w-3xl lg:max-w-7xl mx-auto lg:mx-0 text-lg py-6 text-center lg:text-left leading-relaxed">
                  I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Button text="For Agencies" color="primary" className="px-2 lg:px-14 mr-2" slug="#how-it-works" />
                  <Button text="For Clinicians" color="" className="px-2 lg:px-14" slug="#how-it-works-2" />
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
          <div className="w-full h-[15vw] overflow-y-clip">
            <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#563078" fillOpacity="1" d="M0,128L80,138.7C160,149,320,171,480,154.7C640,139,800,85,960,85.3C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>
        </div>
        <InfiniteSectionContainer className="bg-purple h-[335vh] md:h-[300vh] lg:h-[290vh] xl:h-[300vh] box-content mb-[-10rem] lg:mb-[-20rem] xl:mb-[-23rem] pt-10 md:pt-0" id="how-it-works">
          <div></div>
          <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl space-x-0 lg:space-x-10 mx-auto w-11/12">
            <div className="flex justify-center shadow-standard relative max-h-[30vh] translate-y-[-100px]">
              <div className={`w-full translate-x-[-10%] lg:translate-x-0 ${styles['heart-svg-container']}`}>
                <svg className="w-full" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.heart} d="M6.7998 73.2C6.7998 73.2 60.6998 269.6 182.9 252.5C305.1 235.4 330 153.7 443 153.2C556 152.7 443 299.8 443 299.8C443 299.8 322.1 454.9 301.1 441.7C280.1 428.6 88.1998 209.1 113.2 177.6C138.2 146.1 225.2 128.1 322.1 228.8" stroke="#DFE169" strokeWidth="8" strokeMiterlimit="10" />
                </svg>
              </div>
              <div className={`mx-auto absolute lg:left-[20%] lg:top-1/10 h-full w-4/5 flex justify-center ${styles['how-it-works-image-parent']}`}>
                <Image
                  className={`${styles['how-it-works-image']}`}
                  src="/images/agency-screenshot1.png"
                  width={500}
                  height={415}
                  alt="computer"
                />
              </div>
            </div>
            <div className="text-white translate-y-[50px] lg:translate-y-0">
              <h2 className="font-merri text-5xl font-bold text-center lg:text-left">Agencies</h2>
              <p className="max-w-xl py-6 text-sm lg:text-lg leading-relaxed text-center lg:text-left">
                I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
              </p>
            </div>
          </div>
          <div><h1 className="font-merri text-5xl text-white text-center translate-y-24 md:translate-y-15 lg:translate-y-32">How It Works</h1></div>
          <div>
            <div className="text-white section flex justify-center h-screen flex-col lg:flex-row items-center max-w-4xl space-x-0 lg:space-x-10 mx-auto w-11/12">
              <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative max-h-[30vh] translate-y-[-100px]">
                <div className={`${styles['how-it-works-image-parent']}`}>
                  <Image
                    className={`${styles['how-it-works-image']}`}
                    src="/images/agency-screenshot2.png"
                    width={500}
                    height={415}
                    alt="computer"
                  />
                </div>
              </div>
              <div className="translate-y-[50px] lg:translate-y-0">
                <h2 className="font-merri text-4xl font-bold text-center lg:text-left pt-4">Title 1</h2>
                <p className="max-w-xl py-6 text-center lg:text-left text-sm lg:text-lg">
                  I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
                </p>
              </div>
            </div>
            <div className="text-white section flex justify-center h-[50vh] flex-col lg:flex-row items-center max-w-4xl space-x-0 lg:space-x-10 w-11/12 mx-auto translate-y-[10vh]">
              <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative max-h-[30vh] translate-y-[-100px]">
                <div className={`${styles['how-it-works-image-parent']}`}>
                  <Image
                    className={`${styles['how-it-works-image']}`}
                    src="/images/agency-screenshot3.png"
                    width={500}
                    height={415}
                    alt="computer"
                  />
                </div>
              </div>
              <div className="translate-y-[50px] lg:translate-y-0">
                <h2 className="font-merri text-4xl font-bold text-center lg:text-left pt-4">Title 2</h2>
                <p className="max-w-xl text-sm lg:text-lg py-6 text-center lg:text-left">
                  I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
                </p>
              </div>
            </div>
          </div>
        </InfiniteSectionContainer>
        <InfiniteSectionContainer className="text-white gradient-bg h-[310vh] md:h-[290vh] lg:h-[280vh] content-box mb-0" id="how-it-works-2" heroClassName={`${styles['hero-parent']}`}>
          <div className="w-full md:absolute top-0">
            <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#563078" fillOpacity="1" d="M0,128L80,138.7C160,149,320,171,480,154.7C640,139,800,85,960,85.3C1120,85,1280,139,1360,165.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
          </div>
          <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl space-x-0 lg:space-x-10 mx-auto pt-0 md:pt-32 lg:pt-0 justify-center w-11/12 h-screen overflow-x-hidden overflow-y-hidden">
            <div>
              <h2 className="font-merri text-5xl font-bold text-center lg:text-left">Clinicians</h2>
              <p className="max-w-xl py-6 text-sm lg:text-lg leading-relaxed text-center lg:text-left">
                I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
              </p>
            </div>
            <div className="flex justify-center shadow-standard relative max-h-[30vh] translate-y-[-10vh] lg:translate-y-[-50px]">
              <div className={`w-full translate-x-[10%] lg:translate-x-0 ${styles['heart-svg-container']}`}>
                <svg className="w-full" width="500" height="500" style={{ transform: "scaleX(-1)" }} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.heart} d="M6.7998 73.2C6.7998 73.2 60.6998 269.6 182.9 252.5C305.1 235.4 330 153.7 443 153.2C556 152.7 443 299.8 443 299.8C443 299.8 322.1 454.9 301.1 441.7C280.1 428.6 88.1998 209.1 113.2 177.6C138.2 146.1 225.2 128.1 322.1 228.8" stroke="#DFE169" strokeWidth="8" strokeMiterlimit="10" />
                </svg>
              </div>
              <div className={`mx-auto absolute lg:right-1/2 lg:translate-x-[20%] ${styles['how-it-works-image-parent']}`}>
                <Image
                  className={`${styles['how-it-works-2-image']}`}
                  src="/images/clinician-screenshot1.png"
                  width={212}
                  height={400}
                  alt="iPhone"
                />
              </div>
            </div>
          </div>
          <h1 className="font-merri text-5xl text-5xl text-center translate-y-24 md:translate-y-15 lg:translate-y-32">How It Works</h1>
          <div className="translate-y-0 md:translate-y-0">
            <div className="section flex justify-center h-screen flex-col lg:flex-row flex-col-reverse items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto w-11/12">
              <div>
                <h2 className="font-merri text-4xl font-bold text-center lg:text-left pt-4">Title 1</h2>
                <p className="max-w-xl py-6 text-center lg:text-left text-sm lg:text-lg">
                  I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
                </p>
              </div>
              <div className="flex justify-center shadow-standard relative max-h-[30vh] translate-y-[-20vh] lg:translate-y-[-50px]">
                <div className={`${styles['how-it-works-image-parent']}`}>
                  <Image
                    className={`${styles['how-it-works-2-image']}`}
                    src="/images/clinician-screenshot2.png"
                    width={212}
                    height={400}
                    alt="iPhone"
                  />
                </div>
              </div>
            </div>
            <div className="section flex justify-center h-[50vh] flex-col lg:flex-row flex-col-reverse items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto w-11/12">
              <div>
                <h2 className="font-merri text-4xl font-bold text-center lg:text-left pt-4">Title 2</h2>
                <p className="max-w-xl py-6 text-center lg:text-left text-sm lg:text-lg">
                  I&apos;m baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache you probably haven&apos;t heard of them austin. Plaid neutra readymade tofu flannel. Everyday carry marfa synth whatever snackwave keffiyeh. Helvetica master cleanse yuccie, bicycle rights 90&apos;s raclette vegan tumeric pork belly bushwick brooklyn.
                </p>
              </div>
              <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative max-h-[30vh] translate-y-[-20vh] lg:translate-y-[-50px]">
                <div className={`${styles['how-it-works-image-parent']}`}>
                  <Image
                    className={`${styles['how-it-works-2-image']}`}
                    src="/images/clinician-screenshot3.png"
                    width={212}
                    height={400}
                    alt="iPhone"
                  />
                </div>
              </div>
            </div>
          </div>
        </InfiniteSectionContainer>
        <div className="scale-y-[-1] translate-y-[-100%] mb-[-20vw]">
          <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fillOpacity="1" d="M0,128L80,138.7C160,149,320,171,480,154.7C640,139,800,85,960,85.3C1120,85,1280,139,1360,165.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
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
        <div className="pt-20">
          <h2 className="font-merri text-5xl font-bold text-center mb-14">Get in Touch</h2>
          <ContactForm />
        </div>
      </Layout>
    </>
  )
}

export default Home
