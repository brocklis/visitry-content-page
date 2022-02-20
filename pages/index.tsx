import { useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout'
import Button from '../components/button'
import SectionContainer from '../components/sectionContainer'
import InfiniteSectionContainer from '../components/infiniteSectionContainer'
import InView from '../components/inView'
import PopUpVideo from '../components/popupVideo'
import styles from '../styles/Home.module.css'
import FAQ from '../components/faq'
import ContactForm from '../components/contactForm'

const clinicianFAQ = [
  {
    question: "How do I get paid?",
    answer: "Completed visits will be paid out bi-weekly via ACH direct deposit",
  },
  {
    question: "Why are visits gray instead of green?",
    answer: `This means you aren’t yet enrolled with that agency. This may occur if they have yet to
    provide credentials for their EMR. You can click “Enroll” in the visit card to ensure that
    the process keeps moving properly`
  },
  {
    question: "Why don’t I see any visits on the map?",
    answer: `Although we are continuously adding new referral sources, there still may be times
    when all of visits have been taken already. Make sure to turn notifications on if you
    want to know immediately when a new visit is added`,
  },
  {
    question: "Why aren’t I receiving notifications?",
    answer: `Check to see if notifications are turned on both in the Visitry app and on your device. In
    the app, go to the Account tab at the bottom right, tap “Settings” at the top, toggle push
    notifications on and tap “Update Changes”`,
  },
]

const agencyFAQ = [
  {
    question: "I accidentally posted a visit with the wrong information. What do I do?",
    answer: `No problem, just click the “Edit” button next to the visit you would like to change, edit
    your information, then click “Save”. These changes will be automatically reflected in the
    clinician app`,
  },
  {
    question: "Can I cancel a posted visit?",
    answer: `Yes, sometimes there are reasons why you need to cancel a visit you have posted.
    Maybe you found another staffing source or it has been on the app for too long without
    results. No worries, just click the “Cancel” button next to the visit you would like to
    cancel. It will now be removed from both the web portal and the clinician app`,
  },
  {
    question: "Where can I see who has accepted a visit?",
    answer: `You can find out who accepted your visit in the “Accepted” tab of the Visits section. You
    can also opt to receive an email notification which will include the name of the clinician
    who accepted the visit`,
  },
  {
    question: "Why aren’t my visits getting accepted?",
    answer: `While we are continuously adding new clinicians, there may be times when our
    clinicians have full schedules and are unable to accept additional visits. Another reason
    may be that the visit is in an area that is difficult to staff. Either way, you can reach out
    to Visitry Support to see if we can assist with more difficult to staff visits`
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
              <div className="w-full">
                <h1 className="text-center text-5xl lg:text-6xl font-merri font-bold text-center leading-relaxed">Home Health<br />Staffing <i className="text-purple">Reimagined</i></h1>
                <p className="font-open max-w-3xl mx-auto text-lg py-6 text-center leading-relaxed mb-10 ">
                  Finding additional staff has never been easier. Visitry provides real-time access to reliable and
                  qualified clinicians to help support the demand for your referrals.<br /><br />
                  For clinicians, Visitry empowers you with the ability to fill your schedule with ease.
                  Stop wondering where clients are hiding and start having calmer, more organized days.
                </p>
                <div className="flex justify-center mt-10 flex-col lg:flex-row">
                  <Button text="For Agencies" color="primary" className="px-14 flex mx-auto lg:mr-2" slug="#how-it-works" />
                  <Button text="For Clinicians" color="" className="px-14 flex mx-auto mt-7 lg:mt-0 lg:ml-6" slug="#how-it-works-2" />
                </div>
              </div>

            </div>
          </SectionContainer>
          <div className="w-full h-[15vw] overflow-y-clip">
            <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#563078" fillOpacity="1" d="M0,128L80,138.7C160,149,320,171,480,154.7C640,139,800,85,960,85.3C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>
        </div>
      <InfiniteSectionContainer className="bg-purple h-[405vh] md:h-[370vh] lg:h-[385vh] box-content mb-[-10rem] lg:mb-[-20rem] xl:mb-[-23rem] pt-10 md:pt-0 min-h-[2500px]" minScrollAmount={100} id="how-it-works">
          <div></div>
          <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl space-x-0 lg:space-x-10 mx-auto w-11/12">
            <div className="flex justify-center shadow-standard relative max-h-[30vh] lg:max-h-[unset] translate-y-[-100px] lg:translate-y-[50px] lg:w-[60%]">
              <div className={`mx-auto w-full flex justify-center ${styles['how-it-works-image-parent']}`}>
                <Image
                  className={`${styles['how-it-works-image']}`}
                  src="/images/web-app-login.png"
                  width={800}
                  height={400}
                  quality={100}
                  alt="computer"
                />
              </div>
            </div>
            <div className="text-white translate-y-[50px] lg:translate-y-0 lg:w-[40%]">
              <h2 className="font-merri text-5xl lg:text-6xl font-bold text-center lg:text-left">Agencies</h2>
              <p className="font-open max-w-xl py-6 text-md lg:text-xl leading-relaxed text-center lg:text-left">
                Qualified and skilled clinicians are just a click away. Whether your staff is
                on vacation, out sick, or you just can’t keep up with the demand for referrals, we’ve got you covered!
              </p>
            </div>
          </div>
          <div><h1 className="font-merri text-5xl text-white text-center translate-y-24 md:translate-y-15 lg:translate-y-32">How It Works</h1></div>
          <div>
            <div className="text-white section flex justify-center h-screen flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto w-11/12">
              <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative max-h-[30vh] lg:max-h-[unset] translate-y-[-100px] lg:translate-y-0 lg:w-[60%]">
                <div className={`w-full ${styles['how-it-works-image-parent']}`}>
                  <Image
                    className={`${styles['how-it-works-image']}`}
                    src="/images/web-app-create.png"
                    width={800}
                    height={400}
                    quality={100}
                    alt="computer"
                  />
                </div>
              </div>
              <div className="translate-y-[50px] lg:translate-y-0 lg:w-[40%]">
                <p className="font-open max-w-xl py-6 text-center lg:text-left text-md lg:text-xl">
                  Simply input the visit type, target date, and address, then watch as the visit gets accepted
                  almost instantly by one of our reliable clinicians.
                </p>
              </div>
            </div>
            <div className="text-white section flex justify-center h-[50vh] flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 w-11/12 mx-auto translate-y-[10vh]">
              <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative max-h-[30vh] lg:max-h-[unset] translate-y-[-100px] lg:translate-y-0 lg:w-[60%]">
                <div className={`w-full ${styles['how-it-works-image-parent']}`}>
                  <Image
                    className={`${styles['how-it-works-image']}`}
                    src="/images/web-app-open.png"
                    width={800}
                    height={400}
                    quality={100}
                    alt="computer"
                  />
                </div>
              </div>
              <div className="translate-y-[50px] lg:translate-y-0 lg:w-[40%]">
                <p className="font-open max-w-xl text-md lg:text-xl py-6 text-center lg:text-left">
                  After the visit has been accepted, simply plot the appropriate clinician in your EMR and that’s it!
                </p>
              </div>
            </div>
            <div className="text-white section flex justify-center h-screen flex-col lg:flex-row items-center max-w-7xl space-x-0 lg:space-x-10 w-11/12 mx-auto translate-y-[10vh]">
              <div className="flex justify-center shadow-standard mt-10 lg:mt-0 relative max-h-[30vh] lg:max-h-[unset] translate-y-[-100px] lg:translate-y-0 lg:w-[60%]">
                <div className={`w-full ${styles['how-it-works-image-parent']}`}>
                  <Image
                    className={`${styles['how-it-works-image']}`}
                    src="/images/web-app-accepted.png"
                    width={800}
                    height={400}
                    quality={100}
                    alt="computer"
                  />
                </div>
              </div>
              <div className="translate-y-[50px] lg:translate-y-0 lg:w-[40%]">
                <p className="max-w-xl text-md lg:text-xl py-6 text-center lg:text-left">
                  We’re here when you need us, and on standby when you don’t.
                </p>
              </div>
            </div>
          </div>
        </InfiniteSectionContainer>
        <InfiniteSectionContainer className="text-white gradient-bg h-[380vh] md:h-[370vh] content-box mb-0 min-h-[2500px]" id="how-it-works-2" heroClassName={`${styles['hero-parent']}`}>
          <div className="w-full md:absolute top-0">
            <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#563078" fillOpacity="1" d="M0,128L80,138.7C160,149,320,171,480,154.7C640,139,800,85,960,85.3C1120,85,1280,139,1360,165.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
          </div>
          <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl space-x-0 lg:space-x-10 mx-auto pt-0 md:pt-32 lg:pt-0 justify-center w-11/12 h-screen overflow-x-hidden overflow-y-hidden lg:translate-y-[5vh]">
            <div>
              <h2 className="font-merri text-5xl lg:text-6xl font-bold text-center lg:text-left">Clinicians</h2>
              <p className="font-open max-w-xl py-6 text-md lg:text-xl leading-relaxed text-center lg:text-left">
                Download and register on the app using your preferred iPhone or Android device.
              </p>
            </div>
            <div className="flex justify-center shadow-standard relative max-h-[30vh] translate-y-[-10vh] md:translate-y-0 lg:translate-y-[-50px]">
              <InView className={`w-full translate-x-[10%] lg:translate-x-0 ${styles['heart-svg-container']} ${styles['how-it-works-2-heart-svg-container']}`}>
                <svg className="w-full" width="500" height="500" style={{ transform: "scaleX(-1)" }} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.heart} d="M6.7998 73.2C6.7998 73.2 60.6998 269.6 182.9 252.5C305.1 235.4 330 153.7 443 153.2C556 152.7 443 299.8 443 299.8C443 299.8 322.1 454.9 301.1 441.7C280.1 428.6 88.1998 209.1 113.2 177.6C138.2 146.1 225.2 128.1 322.1 228.8" stroke="#DFE169" strokeWidth="8" strokeMiterlimit="10" />
                </svg>
              </InView>
              <div className={`mx-auto absolute lg:right-1/2 lg:translate-x-[20%] ${styles['how-it-works-image-parent']}`}>
                <Image
                  className={`${styles['how-it-works-2-image']}`}
                  src="/images/mobile-mockup.png"
                  width={212}
                  height={400}
                  quality={100}
                  alt="iPhone"
                />
              </div>
            </div>
          </div>
          <h1 className="font-merri text-5xl text-5xl text-center translate-y-24 md:translate-y-15 lg:translate-y-32">How It Works</h1>
          <div className="md:translate-y-[20vh] lg:translate-y-0">
            <div className="section flex justify-center h-screen flex-col lg:flex-row flex-col-reverse items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto w-11/12">
              <div className='w-full lg:w-4/12'>
                <p className="font-open max-w-xl py-6 text-center lg:text-left text-md lg:text-xl">
                  After going through a simple onboarding and vetting process, you will have access to visits in your area.
                </p>
              </div>
              <div className="w-full lg:w-6/12 flex justify-center shadow-standard relative max-h-[30vh] translate-y-[-20vh] lg:translate-y-[-50px]">
                <div className={`${styles['how-it-works-image-parent']}`}>
                  <Image
                    className={`${styles['how-it-works-2-image']}`}
                    src="/images/clinician-screenshot1.png"
                    width={212}
                    height={400}
                    quality={100}
                    alt="iPhone"
                  />
                </div>
              </div>
            </div>
            <div className="section flex justify-center h-[50vh] flex-col lg:flex-row flex-col-reverse items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto w-11/12">
              <div className='w-full lg:w-4/12'>
                <p className="font-open max-w-xl py-6 text-center lg:text-left text-md lg:text-xl">
                  Click on a visit to see details. Then either click “Accept” if you want it or just ignore it if you don’t.
                </p>
              </div>
              <div className="w-full lg:w-6/12 flex justify-center shadow-standard mt-10 lg:mt-0 relative max-h-[30vh] translate-y-[-20vh] lg:translate-y-[-50px]">
                <div className={`${styles['how-it-works-image-parent']}`}>
                  <Image
                    className={`${styles['how-it-works-2-image']}`}
                    src="/images/clinician-screenshot2.png"
                    width={212}
                    height={400}
                    quality={100}
                    alt="iPhone"
                  />
                </div>
              </div>
            </div>
            <div className="section flex justify-center h-screen flex-col lg:flex-row flex-col-reverse items-center max-w-7xl space-x-0 lg:space-x-10 mx-auto w-11/12">
              <div className='w-full lg:w-4/12'>
                <p className="max-w-xl py-6 text-center lg:text-left text-md lg:text-xl">
                  Once accepted, you’ll be able to view the visit in the Jobs tab.
                  Completed visits are paid out bi-weekly via ACH direct deposit.
                </p>
              </div>
              <div className="w-full lg:w-6/12 flex justify-center shadow-standard mt-10 lg:mt-0 relative max-h-[30vh] translate-y-[-20vh] lg:translate-y-[-50px]">
                <div className={`${styles['how-it-works-image-parent']}`}>
                  <Image
                    className={`${styles['how-it-works-2-image']}`}
                    src="/images/clinician-screenshot3.png"
                    width={212}
                    height={400}
                    quality={100}
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
        <div id="faq" className="max-w-7xl mx-auto w-11/12 py-20">
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
        <div id="contact" className="pt-20">
          <h2 className="font-merri text-5xl font-bold text-center mb-14">Get in Touch</h2>
          <ContactForm />
        </div>
      </Layout>
    </>
  )
}

export default Home
