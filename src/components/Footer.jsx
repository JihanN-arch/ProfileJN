import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="py-6 border-t relative">
      {/* TEKS TENGAH */}
      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center text-[#341d1d]">
        <span>&copy; 2025 JN. All rights reserved.</span>
      </div>

      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 text-[#341d1d]">
        {/* TEKS KIRI */}
        <div className="font-semibold text-center md:text-left w-full md:w-auto">
          <a
            href="#banner"
            className="inline-block hover:scale-110 transition-transform duration-300 ease-in-out hover:text-[#c04848]"
          >
            What's my name?
          </a>
        </div>

        {/* MODE MOBILE (DITENGAH) */}
        <div className="block md:hidden text-center">
          <span>&copy; 2025 JN. All rights reserved.</span>
        </div>

        {/* TEKS KANAN */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:w-auto justify-center md:justify-end">
          {/* HOVER */}
          <span
            className="
    font-medium
    hover:text-brown
    transition-all duration-300 ease-in-out

    hover:translate-y-1   /* aktif di mobile */
    md:hover:translate-y-0 /* reset di desktop supaya y = 0 */

    md:hover:translate-x-1 /* aktif di desktop */
    hover:translate-x-0    /* reset di mobile supaya x = 0 */
  "
          >
            Get in touch
          </span>

          <div className="flex gap-3 text-xl">
            {[faInstagram, faDiscord, faLinkedin].map((icon, idx) => (
              <a
                key={idx}
                href={
                  icon === faInstagram
                    ? "https://www.instagram.com/jeeeeeeeeeenn?igsh=MXFteG9wZ3NtaGMzeg=="
                    : icon === faDiscord
                    ? "https://discordapp.com/users/670596500090519572"
                    : "https://www.linkedin.com/in/jihan-nabiilah-permata-sukma-593305378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brown transition-all duration-300 transform hover:scale-125 hover:-rotate-6 hover:drop-shadow-[0_0_10px_#d4a373]"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
