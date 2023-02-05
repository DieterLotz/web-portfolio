import { SyntheticEvent, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ABOUT_ROUTE, CONTACT_ROUTE, EXPERIENCE_ROUTE, HERO_ROUTE } from '../helpers/router-routes'
import {
  chatBubble,
  codeBracketIcon,
  codeBracketSquare,
  homeIcon,
  identificationIcon,
  menuCloseIcon,
  menuOpenIcon,
} from '../helpers/svg-helper'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  const onMenuIconClickHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
    setOpen((open) => !open)
    e.currentTarget.classList.remove('animate-fade250')
    void e.currentTarget.offsetWidth
    e.currentTarget.classList.add('animate-fade250')
  }

  const menuIcon = open ? menuOpenIcon : menuCloseIcon;

  return (
    <>
      <header>
        <div className="relative flex justify-between items-center px-10 bg-darkPrimaryAccent w-full h-20 shadow-md md:px-36">
          <Link
            className="flex gap-2 items-center w-52 h-6 text-slate-300 text-base line hover:cursor-pointer"
            to={HERO_ROUTE}
            onClick={() => setOpen(false)}
          >
            <pre>Dieter Lötz</pre>
            {codeBracketIcon}
          </Link>
          <nav className="hidden md:flex md:justify-end md:items-center md:gap-7 md:w-full">
            <Link
              className={`text-base text-slate-300 hover:text-white ${location.pathname.endsWith(HERO_ROUTE) ? "underline" : ""} underline-offset-4 hover:underline`}
              to={HERO_ROUTE}
            >
              Home
            </Link>
            <Link
              className={`text-base text-slate-300 hover:text-white ${location.pathname.endsWith(ABOUT_ROUTE) ? "underline" : ""} underline-offset-4 hover:underline`}
              to={ABOUT_ROUTE}
            >
              About me
            </Link>
            <Link
              className={`text-base text-slate-300 hover:text-white ${location.pathname.endsWith(EXPERIENCE_ROUTE)? "underline" : ""} underline-offset-4 hover:underline`}
              to={EXPERIENCE_ROUTE}
            >
              Experience
            </Link>
            <Link
              className={`text-base text-slate-300 hover:text-white ${location.pathname.endsWith(CONTACT_ROUTE) ? "underline" : ""} underline-offset-4 hover:underline`}
              to={CONTACT_ROUTE}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu */}
          <div className="flex justify-end items-center w-full hover:cursor-pointer md:hidden">
            {open && (
              <nav className="absolute -bottom-48 right-3 w-1/2 h-auto rounded-lg shadow-lg bg-darkPrimaryAccent p-6 animate-fade250">
                <div className="flex flex-col gap-3 w-full pl-3">
                  <Link
                    className="flex gap-3 items-center justify-jusify text-base text-white hover:underline focus:underline underline-offset-4"
                    to={HERO_ROUTE}
                    onClick={() => setOpen(false)}
                  >
                    {homeIcon}
                    Home
                  </Link>
                  <Link
                    className="flex gap-3 items-center justify-jusify text-base text-white hover:underline focus:underline underline-offset-4"
                    to={ABOUT_ROUTE}
                    onClick={() => setOpen(false)}
                  >
                    {identificationIcon}
                    About me
                  </Link>
                  <Link
                    className="flex gap-3 items-center justify-jusify text-base text-white hover:underline focus:underline underline-offset-4"
                    to={EXPERIENCE_ROUTE}
                    onClick={() => setOpen(false)}
                  >
                    {codeBracketSquare}
                    Experience
                  </Link>
                  <Link
                    className="flex gap-3 items-center justify-jusify text-base text-white hover:underline focus:underline underline-offset-4"
                    to={CONTACT_ROUTE}
                    onClick={() => setOpen(false)}
                  >
                    {chatBubble}
                    Contact
                  </Link>
                </div>
              </nav>
            )}
            <button type="button" onClick={onMenuIconClickHandler}>
              {menuIcon}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
