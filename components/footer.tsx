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
            I'm baby portland sustainable street art flannel next level four loko leggings DIY cray hoodie crucifix
            unicorn offal gluten-free. IPhone blog air plant, adaptogen narwhal waistcoat man braid prism deep v mustache
          </p>
        </div>
      </div>
      <div className="flex max-w-7xl mx-auto w-11/12 mt-10 items-center justify-between">
        <p className="text-white">
          Copyright Notice
        </p>
        <div className="flex items-center gap-x-3">
          <Image
            className="rounded-2xl"
            src="/images/facebook.svg"
            width={40}
            height={40}
            alt="Test"
          />
          <Image
            className="rounded-2xl"
            src="/images/instagram.svg"
            width={40}
            height={40}
            alt="Test"
          />
          <Image
            className="rounded-2xl"
            src="/images/twitter.svg"
            width={40}
            height={40}
            alt="Test"
          />
          <Image
            className="rounded-2xl"
            src="/images/linkedin.svg"
            width={40}
            height={40}
            alt="Test"
          />
        </div>
      </div>
    </footer>
  )
}
