import Image from "next/image"
export default function Footer() {
  return (
    <footer id="footer" className="gradient-bg py-14">
      <div className="flex max-w-7xl mx-auto w-11/12">
        <div>
          <Image
            src="/images/logo-footer.svg"
            width={140}
            height={88}
            alt="Test"
          />
          <p className="max-w-lg mt-6 text-white">
            For clinicians, Visitry empowers you with the ability to fill your schedule with ease. Stop wondering
            where clients are hiding and start having calmer, more organized days.
          </p>
        </div>
      </div>
      <div className="flex max-w-7xl mx-auto w-11/12 mt-10 items-center justify-between">
        <p className="text-white">
          Copyright Notice
        </p>
        <div className="flex items-center gap-x-3">
          <a href="">
            <Image
              className="rounded-2xl"
              src="/images/facebook.svg"
              width={40}
              height={40}
              alt="Test"
            />
          </a>
          {/* <Image
            className="rounded-2xl"
            src="/images/instagram.svg"
            width={40}
            height={40}
            alt="Test"
          /> */}
          <a href="">
            <Image
              className="rounded-2xl"
              src="/images/twitter.svg"
              width={40}
              height={40}
              alt="Test"
            />
          </a>
          <a href="">
            <Image
              className="rounded-2xl"
              src="/images/linkedin.svg"
              width={40}
              height={40}
              alt="Test"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
