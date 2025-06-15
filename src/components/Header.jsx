import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <header className="bg-royal/85 shadow-md sticky top-0 z-50 font-poppins">
      <div className="container mx-auto md:flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-gold flex pointer">
          <Bars3CenterLeftIcon
            onClick={handleMenu}
            className="text-white size-[2rem] md:hidden cursor-pointer"
          />
          <img className="rounded-full" src="/nrt logo.svg" alt="brand logo" />
          <a href="#">NRT</a>
        </div>

        <nav
          className={`space-x-4 mx-5 gap-4 text-white transition-all duration-300 ease-in-out ${
            showMenu ? "flex flex-col" : "hidden"
          } md:flex`}
        >
          <a href="#" className="hover:text-gold">
            Home
          </a>
          <a href="#" className="hover:text-gold">
            Pricing
          </a>
          <a href="#" className="hover:text-gold">
            About
          </a>
          <div className="relative group">
            <button className="hover:text-gold">More</button>
            <div className="absolute hidden group-hover:block bg-gold text-royal shadow-lg p-2 mt-2 rounded">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gold hover:text-white"
              >
                Team
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-royal hover:text-white"
              >
                Careers
              </a>
            </div>
          </div>
          <a href="#" className="hover:text-gold">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
