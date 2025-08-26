import { motion } from "framer-motion";

function AboutMe() {
  return (
    <section
      id="AboutMe"
      className="flex flex-col items-center justify-center bg-white px-6 py-16 gap-6"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-[#341d1d] mb-4"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[#111] leading-relaxed text-center max-w-3xl"
      >
        Hi! I'm Jihan Nabiilah Permata Sukma, a Computer Science student at
        Universitas Indonesia. I enjoy exploring coding, design, and how
        technology can solve real-life problems, while still figuring out which
        area I’m most passionate about. Outside of tech, I love drawing, reading
        novels, and playing games, which help me stay creative and balanced.
        Through both my studies and hobbies, I aim to keep learning, growing,
        and eventually finding the field where I can truly thrive.
      </motion.p>
    </section>
  );
}

export default AboutMe;
