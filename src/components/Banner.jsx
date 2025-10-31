import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import myProfile from "../assets/profile2.jpg";

export default function Banner() {
  return (
    <section
      id="banner"
      className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-20 gap-16"
    >
      {/* TEXT SECTION */}
      <div className="text-center md:text-left md:pr-12">
        {/* THE NAME IS */}
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold text-[#341d1d] mb-2"
        >
          THE NAME IS
        </motion.h3>

        {/* NAME ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-auto w-full md:w-[400px] flex items-center justify-center md:justify-start"
        >
          <TypeAnimation
            sequence={["JIHAN NABIILAH!", 1500, "JIHAN!", 1500, "JN!", 1500]}
            wrapper="span"
            speed={40}
            deletionSpeed={30}
            repeat={Infinity}
            className="text-5xl md:text-6xl font-bold text-[#341d1d] block whitespace-normal md:whitespace-nowrap break-words text-center md:text-left leading-tight"
          />
        </motion.div>

        {/* CV BUTTON */}
        <motion.a
          href="https://drive.google.com/file/d/1gJlXJTtpQllujog_SI4Cbw1sfK3RpUwa/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative overflow-hidden inline-flex items-center justify-center bg-[#341d1d] text-white px-6 py-2 rounded mt-6 hover:bg-[#5a2f2f] transition-colors duration-300 ease-in-out group"
        >
          MY CV
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
        </motion.a>
      </div>

      {/* PROFILE PICTURE */}
      <motion.div
        className="flex justify-center flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }} // muncul lagi kalau discroll
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-[280px] md:w-[320px] max-w-[320px]">
          <img
            src={myProfile}
            alt="My Profile"
            className="rounded-[100px_100px_20px_20px] shadow-[10px_10px_0px_#bda88d] relative z-10 w-full"
          />
          <div className="absolute top-[-6px] left-[-6px] w-full h-full border-[1.5px] border-[#341d1d] rounded-[100px_100px_20px_20px] pointer-events-none z-20"></div>
        </div>
      </motion.div>
    </section>
  );
}
