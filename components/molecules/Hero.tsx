import Image from "next/image";
import NumberTicker from "../magicui/number-ticker";

export default function Hero() {
  return (
    <div className="hero bg-base-100 pt-4 pb-10 lg:px-2 h-full  z-0">
      <div className="flex w-full justify-center lg:justify-between mt-10 flex-col lg:flex-row">
      <div className="text-center mt-4 lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-semibold">Belanja Mudah,</h1>
          <h1 className="text-4xl lg:text-6xl font-semibold">dan Hemat hanya</h1>
          <h1 className="text-4xl lg:text-6xl font-semibold">di <span className="font-extrabold text-primary">BisaMart</span></h1>
          <p className="md:py-6 text-2xl px-1 md:px-0">
            Solusi belanja sehari-hari tanpa ribet!
          </p>
          <div className="flex justify-center lg:justify-start lg:items-center space-x-8 py-8">
          <div className="border-l border-gray-300 h-12"></div>
            <div className="">
              <h2 className="text-3xl font-bold text-primary">
                <NumberTicker value={50} className="text-primary" />
                k+
              </h2>
              <p className="text-gray-500">Customer</p>
            </div>

            <div className="border-l border-gray-300 h-12"></div>

            <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">
                <NumberTicker value={10} className="text-primary" />
                k+
              </h2>
              <p className="text-gray-500">Merchants</p>
            </div>
          </div>
        </div>
        <Image
          src="/images/hero.png"
          alt="Hero Images"
          width="504"
          height="360"
          className="mx-auto lg:mx-0 rounded-lg -mt-16 md:mt-0" />
      </div>
    </div>
  )
}
