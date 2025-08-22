import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Biar blur */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9997]"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <header className="fixed top-0 left-0 w-full z-[10000]">
        {/* Wrapper */}
        <div className={`mt-6 transition-all duration-700 ease-in-out`}>
          <nav
            className={`mx-auto flex items-center justify-center px-6 md:px-20 overflow-hidden transition-all duration-700 ease-in-out
      md:h-[60px] md:rounded-full md:border
      ${
        scrolled && !menuOpen
          ? "md:bg-white md:w-[80%] md:h-[60px] md:shadow-md md:rounded-full md:border md:py-0"
          : "md:w-fit md:border md:border-transparent md:py-6"
      }`}
          >
            {/* Toggle */}
            <button
              className="fixed right-6 top-4 text-[35px] text-[#341d1d] focus:outline-none active:text-[#341d1d] md:hidden z-[9999]"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {menuOpen ? "X" : "☰"}
            </button>

            {/* Isi nav */}
            <ul
              className={`font-medium text-[#341d1d] items-center text-base tracking-wide leading-none p-0 m-0 gap-6 md:gap-10
          ${
            menuOpen
              ? "fixed top-0 right-0 h-[100vh] w-[45vw] bg-white shadow-2xl rounded-l-2xl flex flex-col justify-center z-[9998] gap-8 transform translate-x-0 transition-transform duration-300 ease-in-out"
              : "fixed top-0 right-0 h-[100vh] w-[45vw] bg-white shadow-2xl rounded-l-2xl flex flex-col justify-center z-[9998] gap-8 transform translate-x-full transition-transform duration-300 ease-in-out md:flex md:static md:w-auto md:flex-row md:gap-12 md:transform-none md:bg-transparent md:shadow-none md:rounded-none md:h-auto md:justify-center"
          }`}
            >
              <li
                className={activeSection === "banner" ? "text-[#bda88d]" : ""}
              >
                <a
                  href="#banner"
                  onClick={closeMenu}
                  className="hover:text-[#bda88d] transition-colors duration-300 block py-1"
                >
                  About Me
                </a>
              </li>
              <li
                className={
                  activeSection === "experience" ? "text-[#bda88d]" : ""
                }
              >
                <a
                  href="#experience"
                  onClick={closeMenu}
                  className="hover:text-[#bda88d] transition-colors duration-300 block py-1"
                >
                  My Experience
                </a>
              </li>
              <li className={activeSection === "skill" ? "text-[#bda88d]" : ""}>
                <a
                  href="#skill"
                  onClick={closeMenu}
                  className="hover:text-[#bda88d] transition-colors duration-300 block py-1"
                >
                  My SKills
                </a>
              </li>
              <li
                className={activeSection === "project" ? "text-[#bda88d]" : ""}
              >
                <a
                  href="#project"
                  onClick={closeMenu}
                  className="hover:text-[#bda88d] transition-colors duration-300 block py-1"
                >
                  My Project
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Header Line */}
        <div
          className={`mx-auto w-[80%] h-px bg-[#341d1d] transition-opacity duration-300 
        ${
          scrolled || menuOpen ? "opacity-0" : "opacity-70 mt-1"
        } hidden md:block`}
        ></div>
      </header>
    </>
  );
}
