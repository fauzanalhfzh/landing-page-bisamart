import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="footer bg-base-100 p-10">
        <nav>
        <div className="flex flex-row items-center justify-center gap-1 md:gap-2">
          <Image
            src="/images/bisamart.png"
            width="23"
            height="28"
            alt="Logo"
          />
          <span className="font-bold text-xl md:text-2xl mt-1.5">BisaMart</span>
        </div>
        </nav>
        <nav className="text-base">
          <h6 className="text-primary font-bold">Tentang BisaMart</h6>
          <a className="link link-hover">Syarat dan ketentuan</a>
          <a className="link link-hover">Kebijakan Privasi</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">BisaPeople</a>
        </nav>
        <nav className="text-base">
          <h6 className="text-primary font-bold">Terhubung Dengan Kami</h6>
          <p>PT. Mahira Technologi</p>
          <p>18 Office Park, Lantai 25, Suite A 2, Jalan tb</p>
          <p>Simatupang Kav 18, Kel. Kebagusan, Kec. Pasar</p>
          <p>Minggu Jakarta Selatan, Provinsi DKI Jakarta, 12520</p>
          <div className="flex flex-row gap-4 mt-10">
          <EnvelopeIcon className="size-6 text-primary" />
          <a>support@bisamart.com</a>
          </div>
          <div className="flex flex-row gap-4">
          <PhoneIcon className="size-6 text-primary" />
          <a>+628 12345</a>
          </div>
        </nav>
        <nav className="flex flex-col space-y-1 text-base">
          <h6 className="text-primary font-bold">Unduh Bisamart</h6>
          <a href="#">
            <Image
              src="/images/playstore.png"
              width="169"
              height="64"
              alt="Download di Play Store"
            />
          </a>
          <a href="#">
            <Image
              src="/images/appstore.png"
              width="169"
              height="64"
              alt="Download di App Store"
            />
          </a>
        </nav>
      </footer>
      {/* social media */}
      <div className="flex gap-10 py-6 px-10">
        {/* Twitter */}
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="footer-title">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      {/* instagram */}
      <a>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="bi bi-instagram footer-title" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
      </svg>
      </a>
      {/* Youtube */}
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="footer-title">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      {/* Facebook */}
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="footer-title">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
      </div>
      <aside className="text-center py-6 text-slate-400 font-medium text-base">
        <p>©BisaMart {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </>
  )
}
