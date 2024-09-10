export default function Navbar() {
  return (
    <div className="navbar bg-base-100 z-10 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 font-semibold rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Promo</a></li>
            <li><a>Bantuan</a></li>
            <li><a>Hubungi Kami</a></li>
          </ul>
        </div>
        <a className="text-xl mx-2 font-bold">BisaMart</a>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 font-semibold hidden lg:flex">
            <li><a>Promo</a></li>
            <li><a>Bantuan</a></li>
            <li><a>Hubungi Kami</a></li>
        </ul>
        <a className="btn bg-primary text-white font-semibold">Download Sekarang</a>
      </div>
    </div>
  )
}
