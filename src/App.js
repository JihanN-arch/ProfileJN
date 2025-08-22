import React from "react";
import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import Experience from "./components/experience";
import Project from "./components/Project";
import Footer from "./components/Footer";
// import TestIcon from "./components/icontest";
import AOS from "aos";

import { useEffect } from "react";
import SkillsProgress from "./components/skill";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();

    const handleScroll = () => {
      AOS.refreshHard();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white relative text-gray-800 overflow-x-hidden">
      {/* Zigzag Lightning - Light Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none w-full h-full"
        style={{
          backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
        repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.06) 30px, rgba(107, 114, 128, 0.06) 31px),
        repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55, 65, 81, 0.05) 40px, rgba(55, 65, 81, 0.05) 41px),
        repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31, 41, 55, 0.04) 35px, rgba(31, 41, 55, 0.04) 36px)
      `,
        }}
      />

      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Konten */}
        <main className="flex-1">
          <Banner />
          <Experience />
          <SkillsProgress />
          <Project />
        </main>

        {/* Footer*/}
        <Footer />
      </div>
    </div>
  );
}

export default App;
