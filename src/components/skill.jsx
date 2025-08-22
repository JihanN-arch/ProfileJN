import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiFlutter } from "react-icons/si";
import Particles from "react-tsparticles";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", percent: 65, icon: <FaHtml5 /> },
      { name: "CSS", percent: 65, icon: <FaCss3Alt /> },
      { name: "JavaScript", percent: 55, icon: <FaJs /> },
      { name: "Bootstrap", percent: 60, icon: <FaBootstrap /> },
      { name: "React JS", percent: 43, icon: <FaReact /> },
      { name: "Tailwind CSS", percent: 43, icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Mobile Development",
    skills: [{ name: "Flutter", percent: 38, icon: <SiFlutter /> }],
  },
  {
    category: "Programming Language",
    skills: [{ name: "Python", percent: 53, icon: <FaPython /> }],
  },
];

export default function SkillsProgress() {
  return (
    <section
      id="skill"
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-20 lg:px-32 py-24"
    >
      {/* Particles Background */}
      <Particles
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            move: { enable: true, speed: 0.5 },
            opacity: { value: 0.4 },
            color: { value: "#bda88d" },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Title */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#341d1d]"
        >
          My Skills
        </motion.h2>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-16 w-full max-w-5xl">
        {/* Left Column: Frontend */}
        <div>
          <h3 className="text-xl font-semibold text-[#bda88d] mb-6">
            {skillsData[0].category}
          </h3>
          {skillsData[0].skills.map((skill, index) => (
            <motion.div
              key={index}
              className="mb-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Icon & Name */}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#341b1b] text-3xl">{skill.icon}</span>
                <p className="font-medium text-gray-300">{skill.name}</p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="h-full"
                  style={{
                    background: "linear-gradient(to right, #341b1b, #bda88d)",
                  }}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.percent}%` }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: index * 0.1 + 0.3,
                  }}
                >
                  {skill.percent}%
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Mobile + Programming */}
        <div>
          {skillsData.slice(1).map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h3 className="text-xl font-semibold text-[#bda88d] mb-6">
                {category.category}
              </h3>
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="mb-5"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {/* Icon & Name */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#341b1b] text-3xl">
                      {skill.icon}
                    </span>
                    <p className="font-medium text-gray-300">{skill.name}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                    <motion.div
                      className="h-full text-xs text-white font-semibold flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(to right, #341b1b, #bda88d)",
                      }}
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${skill.percent}%` }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: index * 0.1 + 0.3,
                      }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
