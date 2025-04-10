import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import logo from "../assets/Logo.png";
import Link from "./Link";
import { useState } from "react";
import Btn from "./Btn";

interface Props {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
  isTopOfPage: boolean;
}

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const flexBetween = "flex justify-between items-center";
  const navbarBackground = isTopOfPage ? "bg-gray-20" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 left-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <img src={logo} alt="logo" />
          <div className={`hidden md:flex justify-between items-center gap-8 text-md`}>
            <Link
              href="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              href="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              href="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              href="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <div className={`hidden md:${flexBetween} gap-8`}>
            <p>Sign In</p>
            <Btn setSelectedPage={setSelectedPage} >Become a Member</Btn>
          </div>
          <button
            className="md:hidden rounded-full bg-secondary-500 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
      <div
        className={`${
          menuOpen ? "fixed" : "hidden"
        } z-40 right-0 bottom-0 w-[300px] h-full bg-primary-100 drop-shadow-xl`}>
          <div className="flex justify-end p-10" >
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <XMarkIcon className="h-5 w-6 text-gray-500" />
            </button>
          </div>
          <div className="flex flex-col w-full items-center gap-6" >
          <Link
              href="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              href="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              href="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              href="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
         </div>

    </nav>
  );
};

export default Navbar;
