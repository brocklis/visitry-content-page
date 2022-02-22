import Image from "next/image"
import Link from "next/link"

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
            <span className="text-lg">Home Health Staffing <i>Reimagined</i></span><br/><br/>
            Finding qualified clinicians for home health has never been easier. Visitry provides the tools necessary to connect excellent clinicians with agencies in need need needneedneedneed.
          </p>
        </div>
      </div>
      <div className="flex max-w-7xl mx-auto w-11/12 mt-10 items-center justify-between">
        <p className="text-white">
          © 2022 Lister Technologies LLC
        </p>
        <div className="flex items-center gap-x-3">
          <Link href="">
            <Image
              className="rounded-2xl"
              src="/images/facebook.svg"
              width={40}
              height={40}
              alt="Test"
            />
          </Link>
          {/* <Image
            className="rounded-2xl"
            src="/images/instagram.svg"
            width={40}
            height={40}
            alt="Test"
          /> */}
          <Link href="">
            <Image
              className="rounded-2xl"
              src="/images/twitter.svg"
              width={40}
              height={40}
              alt="Test"
            />
          </Link>
          <Link href="">
            <Image
              className="rounded-2xl"
              src="/images/linkedin.svg"
              width={40}
              height={40}
              alt="Test"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
