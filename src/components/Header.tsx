import { List, X } from "phosphor-react"
import { useState } from "react"
import { Logo } from "./Logo"
import { Sidebar } from "./Sidebar"

export  const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className="z-[100]  w-full py-5 px-6 flex items-center justify-between  lg:justify-center bg-gray-700 border-b border-b-gray-600 gap-2">
      <div className="max-w-[200px]">
        <Logo/>
      </div>
      <div className="lg:hidden flex text-gray-100 items-center gap-2">
        <span className="text-sm text-gray-100">Aulas</span>
        {toggleMenu
          ?
          <X size={28} className="text-blue-500 cursor-pointer" onClick={() => setToggleMenu(false)} />
          :
          <List size={28} className="text-blue-500 cursor-pointer" onClick={() => setToggleMenu(true)} />
        }
      </div>
      {toggleMenu ? (
        <div className="z-[100] lg:hidden fixed top-[4.6875rem] right-0 w-full h-full bg-gray-700 translate-x-0 transition-all duration-500 ease-in-out">
          <nav id="mobileNavbar" className="flex flex-col w-full">
            <Sidebar />
          </nav>
        </div>
      ) : (
        <div className="z-[100] lg:hidden fixed top-[4.6875rem] right-0 w-full h-full bg-gray-700 translate-x-full transition-all duration-500 ease-in-out">
          <nav id="mobileNavbar" className="flex flex-col w-full">
            <Sidebar />
          </nav>
        </div>
      )
      }
    </header>
  )
}