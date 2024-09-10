import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero bg-base-100 px-4 lg:px-2 h-screen lg:-mt-24  z-0">
      <div className="flex w-full justify-center lg:justify-between mt-10 flex-col lg:flex-row">
      <div className="text-center mt-4 lg:text-left">
        <h1 className="text-5xl lg:text-7xl font-semibold">Belanja Mudah,</h1>
          <h1 className="text-5xl lg:text-7xl font-semibold">dan Hemat hanya</h1>
          <h1 className="text-5xl lg:text-7xl font-semibold">di <span className="font-extrabold text-primary">BisaMart</span></h1>
          <p className="py-6 text-2xl">
            Solusi belanja sehari-hari tanpa ribet!
          </p>
          <div className="flex justify-center lg:justify-start lg:items-center space-x-8 py-8">
          <div className="border-l border-gray-300 h-12"></div>
            <div className="">
              <h2 className="text-3xl font-bold text-blue-500">50k+</h2>
              <p className="text-gray-500">Customer</p>
            </div>

            <div className="border-l border-gray-300 h-12"></div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-500">10k+</h2>
              <p className="text-gray-500">Merchants</p>
            </div>
          </div>
        </div>
        <Image
          src="/images/hero.jpg"
          alt="Hero Images"
          width="500"
          height="500"
          className="max-w-sm mx-auto lg:mx-0 rounded-lg shadow-2xl" />
      </div>
    </div>
  )
}
