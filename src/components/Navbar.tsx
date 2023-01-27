import { SyntheticEvent, useState } from "react";
import { chatBubble, codeBracketIcon, codeBracketSquare, homeIcon, identificationIcon, menuCloseIcon, menuOpenIcon } from "../helpers/svg-helper";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onMenuIconClickHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
    setOpen((open) => !open);
    e.currentTarget.classList.remove("animate-fade250");
    void e.currentTarget.offsetWidth;
    e.currentTarget.classList.add("animate-fade250");
  };

  const onLinkClickHandler = (
    route: string,
    e: SyntheticEvent<HTMLButtonElement>
  ) => {
    console.log(route);
    setOpen((open) => !open);
  };

  const menuIcon = open ? menuOpenIcon : menuCloseIcon;

  return (
    <>
      <header>
        <div className="relative flex justify-between items-center px-10 bg-darkBlue w-full h-20 shadow-md md:px-24">
          <button
            className="flex gap-2 items-center w-52 h-6 text-slate-300 text-base line hover:cursor-pointer"
            onClick={(e) => onLinkClickHandler("/", e)}
          >
            <pre>Dieter Lotz</pre>
            {codeBracketIcon}
          </button>
          <nav className="hidden md:flex md:justify-end md:items-center md:gap-7 md:w-full">
            <button
              className="text-base text-slate-300 hover:text-white focus:underline hover:underline hover:underline-offset-4"
              onClick={(e) => onLinkClickHandler("/", e)}
            >
              Home
            </button>
            <button
              className="text-base text-slate-300 hover:text-white focus:underline hover:underline hover:underline-offset-4"
              onClick={(e) => onLinkClickHandler("/about", e)}
            >
              About me
            </button>
            <button
              className="text-base text-slate-300 hover:text-white focus:underline hover:underline hover:underline-offset-4"
              onClick={(e) => onLinkClickHandler("/experience", e)}
            >
              Experience
            </button>
            <button
              className="text-base text-slate-300 hover:text-white focus:underline hover:underline hover:underline-offset-4"
              onClick={(e) => onLinkClickHandler("/contact", e)}
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu */}
          <div className="flex justify-end items-center w-full hover:cursor-pointer md:hidden">
            {open && (
              <nav className="absolute -bottom-48 right-3 w-1/2 h-auto rounded-lg shadow-lg bg-darkBlue p-6 animate-fade250">
                <div className="flex flex-col gap-3 w-full pl-3">
                  <button
                    className="flex gap-3 items-center justify-jusify text-base text-white hover:underline focus:underline underline-offset-4"
                    onClick={(e) => onLinkClickHandler("/", e)}
                  >
                    {homeIcon}
                    Home
                  </button>
                  <button
                    className="flex gap-3 items-center justify-jusify text-base text-white hover:underline focus:underline underline-offset-4"
                    onClick={(e) => onLinkClickHandler("/about", e)}
                  >
                    {identificationIcon}
                    About me
                  </button>
                  <button
                    className="flex gap-3 items-center justify-jusify text-base text-white hover:underline focus:underline underline-offset-4"
                    onClick={(e) => onLinkClickHandler("/experience", e)}
                  >
                    {codeBracketSquare}
                    Experience
                  </button>
                  <button
                    className="flex gap-3 items-center justify-jusify text-base text-white hover:underline focus:underline underline-offset-4"
                    onClick={(e) => onLinkClickHandler("/contact", e)}
                  >
                    {chatBubble}
                    Contact
                  </button>
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
  );
};

export default Navbar;
