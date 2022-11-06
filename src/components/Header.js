import React, {useState} from "react";
import './header.css'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      <nav className="container p-6 mx-auto mb-3 px-2 py-3 lg:flex lg:justify-between lg:items-center bg-transparent">
        <div className="flex items-center justify-between">
          <div>
            <button>
            <img
              src= {require("../assets/mainw.png")}
              class="h-12 aspect-square"
              alt="BFTW"
            />
            </button>
          </div>
          <div class="flex lg:hidden">
            <button type="button" class="text-white focus:outline-none" onClick={() => setIsNavOpen((prev) => !prev)}>
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <ul className={isNavOpen ? "flex flex-col mt-4 space-y-2 lg:mt-0 lg:flex-row lg:-mx-6 lg:space-y-0 lg:flex lg:space-x-14" : "flex flex-col mt-4 space-y-2 lg:mt-0 lg:flex-row lg:-mx-6 lg:space-y-0 lg:flex lg:space-x-14 hidden"}>
          <li class="text-2xl text-white font-bold hover:text-primary-green transition-all mx-4">
            <a href="/">Home</a>
          </li>
          <li class="text-2xl text-white font-bold hover:text-primary-green transition-all mx-4">
            <a href="/schedule">Schedule</a>
          </li>
          <li class="text-2xl text-white font-bold hover:text-primary-green transition-all mx-4">
            <a href="/#sponsors">Sponsors</a>
          </li>
          <li class="text-2xl text-white font-bold hover:text-primary-green transition-all mx-4">
            <a href="/#faq">FAQ</a>
          </li>
        </ul>
        <ul className={isNavOpen ? "flex flex-col lg:flex-row lg:space-x-5 lg:flex" : "flex flex-col lg:flex-row lg:space-x-5 lg:flex hidden"}>
          <li class="text-2xl text-white font-bold hover:text-primary-green transition-all mx-4">
            <a href="/tickets">Get Tickets</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
