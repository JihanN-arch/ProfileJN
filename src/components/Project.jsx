import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

import oneTwoCodeWeb from "../assets/oneTwoCodeWeb.png";
import oneTwoCodeBootstrap from "../assets/oneTwoCodeBootstrap.png";
import flutterApp from "../assets/flutterApp.png";

export default function Project() {
  const projects = [
    // ISI PROJECT
    {
      title: "One Two Code's Web 1",
      description:
        "One of the websites I created during a coding course using HTML and CSS. Simple, clean, and responsive.",
      image: oneTwoCodeWeb,
      link: "https://github.com/JihanN-arch/OneTwoCode-latihan2-",
    },
    {
      title: "One Two Code's Web 2",
      description:
        "A variation with different layout styles, built using Bootstrap. It's more advanced compared to the previous one.",
      image: oneTwoCodeBootstrap,
      link: "https://github.com/JihanN-arch/OneTwoCode-latihan-",
    },
    {
      title: "Simple Contact App",
      description:
        "A basic Flutter contact app where you can add, edit, or delete contacts. Still in progress.",
      image: flutterApp,
      link: "https://github.com/JihanN-arch/Flutter-contact-app-not-finished-",
    },
  ];

  return (
    <section id="project" className="py-24 px-6 md:px-16 flex-1">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl font-bold text-[#341d1d]"
        >
          My Project
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-[#555] mt-2"
        >
          Some small projects I made :D
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: false }}
            className={`border-2 border-[#341d1d] rounded-lg p-4 shadow-md flex flex-col
    max-w-[300px] w-full mx-auto bg-white
    ${
      projects.length % 2 !== 0 && idx === projects.length - 1
        ? "sm:col-span-2 lg:col-span-1"
        : ""
    }`}
          >
            <div className="h-40 sm:h-48 w-full overflow-hidden rounded">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-bold text-center mt-4 text-[#341d1d]">
              {project.title}
            </h3>
            <hr className="my-3 border-t- border-[#341d1d]/60" />
            <p className="text-sm text-center text-[#341d1d]">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mx-auto bg-[#341d1d] text-white px-5 py-2 rounded flex items-center gap-2 hover:bg-transparent hover:text-[#341d1d] hover:border hover:border-[#341d1d] transition"
            >
              <FontAwesomeIcon icon={faGithub} /> View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
