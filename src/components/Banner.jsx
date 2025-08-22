import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import myProfile from "../assets/profile2.jpg";

export default function Banner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false, // ini bikin animasi bisa jalan lagi tiap masuk viewport
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <section
      id="banner"
      ref={bannerRef}
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 gap-12"
    >
      {/* Text Section */}
      <div
        className="max-w-2xl text-[#341d1d]"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h3 className="flex flex-wrap md:flex-nowrap items-center gap-2 text-5xl font-bold mb-5 md:mt-7">
          <span className="whitespace-nowrap">THE NAME IS</span>
          <TypeAnimation
            sequence={[" JIHAN NABIILAH!", 1000, " JIHAN!", 1000, " JN!", 1000]}
            wrapper="span"
            speed={20}
            deletionSpeed={20}
            repeat={Infinity}
            className="whitespace-nowrap"
          />
        </h3>

        <p className="text-[#111] leading-relaxed">
          Hi! I'm Jihan Nabiilah Permata Sukma, a first-year Computer Science
          student at Universitas Indonesia. I'm currently exploring various
          aspects of IT—like coding, design, and how tech solves real-life
          problems. I'm still figuring out my interests, but I enjoy learning
          and staying open to new things. Outside of tech, I love drawing,
          reading novels, and playing games. My goal is to keep growing and
          eventually find the area where I can truly thrive.
        </p>
        <a
          href="https://drive.google.com/file/d/1gJlXJTtpQllujog_SI4Cbw1sfK3RpUwa/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden inline-flex items-center justify-center bg-[#341d1d] text-white px-6 py-2 rounded mt-6
             hover:bg-[#5a2f2f] transition-colors duration-300 ease-in-out group"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          MY CV
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
                       -translate-x-full group-hover:translate-x-full
                       transition-transform duration-500 ease-in-out"
          ></span>
        </a>
      </div>

      {/* GAMBAR PROFILE */}
      <div
        className="flex justify-center flex-shrink-0"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <div className="relative w-[300px] max-w-[300px]">
          <img
            src={myProfile}
            alt="My Profile"
            className="rounded-[100px_100px_20px_20px] shadow-[10px_10px_0px_#bda88d] relative z-10 w-full"
          />
          <div className="absolute top-[-6px] left-[-6px] w-full h-full border-[1.5px] border-[#341d1d] rounded-[100px_100px_20px_20px] pointer-events-none z-20"></div>
        </div>
      </div>
    </section>
  );
}
