"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      number: 1,
      title: "Beginner Web Developer",
      description:
        "I am a beginner web developer who has completed a web development course at OneTwoCode Indonesia. I have a basic understanding of HTML, CSS, JavaScript, Bootstrap, React, and Tailwind CSS.",
      link: "https://drive.google.com/file/d/18xF1JFOUlDlUnGRWL0d-6633uiV4b6Rb/view?usp=drivesdk",
    },
    {
      number: 2,
      title: "Beginner Flutter Developer",
      description:
        "I am a beginner Flutter developer with hands-on experience from a course at OneTwoCode Indonesia. Built basic apps like a contact app and eager to keep learning.",
      link: "https://drive.google.com/file/d/1QGAqApK7TpPqDfhKPqk3n3ycZm641e7W/view?usp=drivesdk",
    },
    {
      number: 3,
      title: "Research Enthusiast",
      description:
        "I was a manuscript selection participant for OPSI 2024 and a participant in Injection 2024. Although I haven’t won any research competitions yet, I’m genuinely interested in research and enjoy taking part in research-based events.",
      link: "https://drive.google.com/drive/folders/1fj0vYHvZ2OHq_M0ABGZlmQX_hGEbxq_A",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-[60vh] md:min-h-[90vh] flex flex-col items-center justify-center gap-16 px-6 md:px-52 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-3xl font-bold text-[#341d1d]"
      >
        My Experience
      </motion.h2>

      <div className="flex flex-wrap justify-center items-stretch gap-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: false, amount: 0.4 }}
            className="relative group w-full max-w-[285px] mx-auto"
          >
            {/* Shadow box (tetap diam) */}
            <div className="absolute top-[10px] left-[10px] w-full h-full bg-[#341d1d] rounded-md z-0" />

            {/* Kartu utama (bergerak saat hover) */}
            <div className="relative z-10 bg-white border-2 border-[#341d1d] rounded-md p-7 flex flex-col justify-between transition duration-300 group-hover:translate-x-[10px] group-hover:translate-y-[10px] min-h-[380px]">
              <div className="bg-[#341d1d] text-white px-4 py-2 mb-4 w-fit rounded">
                {exp.number}
              </div>
              <h3 className="text-xl font-bold text-[#111] mb-2">
                {exp.title}
              </h3>
              <p className="text-sm text-[#444] mb-4">{exp.description}</p>
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white bg-[#341d1d] px-6 py-2 mt-auto rounded hover:bg-[#5a2f2f] transition shadow-md w-fit"
              >
                CERTIFICATE
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
