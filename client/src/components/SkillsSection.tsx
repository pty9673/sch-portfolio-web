import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "기술 스택",
    prefix: "01",
    skills: [
      { name: "React", level: 90, years: 2 },
      { name: "Java", level: 85, years: 2 },
      { name: "MySQL", level: 80, years: 2 },
      { name: "JavaScript", level: 90, years: 3 },
      { name: "CSS3", level: 85, years: 3 },
      { name: "HTML5", level: 90, years: 3 },
      { name: "Git", level: 85, years: 2 },
      { name: "GitHub", level: 85, years: 2 },
    ],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="py-24"
      style={{
        background: "linear-gradient(135deg, #f5f0ff 0%, #e8f4f8 50%, #f0f8f5 100%)",
      }}
      ref={ref}
    >
      <div className="container">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
          >
            {/* Section header */}
            <div className="mb-16">
              <div className="flex items-baseline gap-4 mb-4">
                <span
                  className="text-5xl md:text-6xl font-bold opacity-20"
                  style={{ color: "#4a7ba7", fontFamily: "'Pretendard', sans-serif" }}
                >
                  {category.prefix}
                </span>
                <h2
                  className="text-4xl md:text-5xl font-bold"
                  style={{ color: "#1a365d", fontFamily: "'Pretendard', sans-serif" }}
                >
                  Skills
                </h2>
              </div>
              <p
                className="text-lg"
                style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
              >
                {category.category}
              </p>
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 + idx * 0.05 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className="text-base font-semibold"
                      style={{
                        color: "#1a365d",
                        fontFamily: "'Pretendard', sans-serif",
                      }}
                    >
                      {skill.name}
                    </h3>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#4a7ba7" }}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div
                    className="w-full h-2 rounded-full overflow-hidden"
                    style={{ background: "rgba(74, 123, 167, 0.1)" }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: catIdx * 0.1 + idx * 0.05 + 0.2,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full"
                      style={{ background: "#4a7ba7" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
