// import "./Navbar.css";
import { useState } from "react";
import { getImageUrl, siteLinks } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id='home' className='text-white p-4 fixed top-0 left-0 w-full bg-gray-900'>
      <div className='container mx-auto flex justify-between items-center'>
        <a
          href='/'
          className='p-2 text-2xl font-semibold border-2 border-violet-500 rounded-full hover:bg-violet-500'
        >
          AT
        </a>

        <img
          className='lg:hidden cursor-pointer z-10 fixed top-5 right-10'
          src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
          alt='menu-button'
          onClick={toggleMenu}
        />

        {menuOpen && (
          <div className='lg:hidden z-0 fixed top-0 right-0 h-screen w-1/2 bg-gray-800 px-4 pt-20'>
            <ul>
              {siteLinks.map(([title, url], id) => (
                <li key={id}>
                  <a
                    href={url}
                    className='block py-2 text-center text-xl rounded-3xl text-white hover:bg-violet-500'
                    onClick={toggleMenu}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <ul className='hidden lg:flex gap-10'>
          {siteLinks.map(([title, url], id) => (
            <li key={id}>
              <a
                href={url}
                className='text-xl py-2 px-4 rounded-3xl text-center hover:bg-violet-500'
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
