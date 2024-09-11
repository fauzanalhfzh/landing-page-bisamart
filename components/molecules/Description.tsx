import { BuildingStorefrontIcon, ClockIcon, ShoppingBagIcon, TruckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Description() {
  return (
    <div className="hero bg-base-100 px-4 lg:px-2 lg:mt-10  z-0">
      <div className="flex w-full justify-center lg:justify-between mt-10 flex-col lg:flex-row">
      <div className="mt-4 text-left">
        <h1 className="text-4xl mb-4 lg:text-6xl font-semibold">Kenapa Belanja</h1>
          <h1 className="text-4xl lg:text-6xl font-semibold">di <span className="font-extrabold text-primary">BisaMart</span></h1>
        <div className="flex gap-8 flex-col mt-10">
          <div className="flex flex-row gap-10">
            <ClockIcon className="size-10 text-primary"/>
            <div className="flex flex-col">
              <h1 className="font-semibold text-2xl">Belanja Cepat dan Mudah</h1>
              <p>Proses belanja jadi lebih cepat dan mudah dengan bisamart,</p>
              <p>tidak perlu ribet, semua di ujung jari.</p>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <TruckIcon className="size-10 text-primary"/>
            <div className="flex flex-col">
              <h1 className="font-semibold text-2xl">Gratis Ongkir Tiap Hari</h1>
              <p>Nikmati kemudahan belanja dengan gratis ongkir tiap hari,</p>
              <p>lebih hemat dan praktis.</p>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <ShoppingBagIcon className="size-10 text-primary"/>
            <div className="flex flex-col">
              <h1 className="font-semibold text-2xl">Produk Lengkap</h1>
              <p>Pilih lebih dari 900.000 produk dari 2000 Merchant,</p>
              <p>semua bisa kamu dapatkan tanpa perlu keluar rumah.</p>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <BuildingStorefrontIcon className="size-10 text-primary"/>
            <div className="flex flex-col">
              <h1 className="font-semibold text-2xl">Self Pick-up Tanpa Antri</h1>
              <p>Bisa ambil sendiri tanpa antri, buat belanja jauh lebih fleksibel,</p>
              <p>dan cepat.</p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/mobile.png"
        width="619"
        height="793"
        alt="Mobile Screens"
      />
      </div>
    </div>
  )
}
