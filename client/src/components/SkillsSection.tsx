import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SkillCategory {
  name: string;
  skills: Array<{
    name: string;
    logo: string;
  }>;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", logo: "/manus-storage/6t9ERzgejwQg_6ff8b02f.png" },
      { name: "JavaScript", logo: "/manus-storage/jIIsSTmoYIfN_c2cfd46a.png" },
      { name: "CSS3", logo: "/manus-storage/oMKMvL7RbczG_626d5eb5.png" },
      { name: "HTML5", logo: "/manus-storage/OrvdBZIop6AD_a9c52830.png" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Java", logo: "/manus-storage/NPlERtCY5afu_311f89d2.png" },
      { name: "Spring Boot", logo: "/manus-storage/spring-boot-logo.png" },
      { name: "Spring Framework", logo: "/manus-storage/spring-framework-logo.png" },
      { name: "MyBatis", logo: "/manus-storage/mybatis-logo.png" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", logo: "/manus-storage/uu1Wqm9bbidv_02c42af6.png" },
      { name: "Oracle", logo: "/manus-storage/oracle-logo.png" },
      { name: "SQLite", logo: "/manus-storage/sqlite-logo.png" },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "Flutter", logo: "/manus-storage/ASQPMYa173Js_432db0db.png" },
    ],
  },
  {
    name: "Build Tools",
    skills: [
      { name: "Gradle", logo: "/manus-storage/gradle-logo.png" },
      { name: "Maven", logo: "/manus-storage/maven-logo.png" },
    ],
  },
  {
    name: "Version Control",
    skills: [
      { name: "Git", logo: "/manus-storage/r7Ehko5k7cxL_f9fa101b.png" },
      { name: "GitHub", logo: "/manus-storage/FXA3YbaVfrB1_cd6df63a.jpg" },
    ],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

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
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#1a365d", fontFamily: "'Pretendard', sans-serif" }}
          >
            Skills
          </h2>
          <p
            className="text-lg"
            style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
          >
            기술 스택
          </p>
        </motion.div>

        {/* Skills by category */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-12"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={itemVariants}>
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ color: "#1a365d", fontFamily: "'Pretendard', sans-serif" }}
              >
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-8">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col items-center gap-3 cursor-pointer"
                  >
                    <div
                      className="w-20 h-20 flex items-center justify-center rounded-lg transition-all duration-200"
                      style={{
                        background: "rgba(255, 255, 255, 0.6)",
                        border: "1px solid rgba(74, 123, 167, 0.15)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(255, 255, 255, 0.8)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "rgba(74, 123, 167, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(255, 255, 255, 0.6)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "rgba(74, 123, 167, 0.15)";
                      }}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <span
                      className="text-sm font-medium text-center"
                      style={{ color: "#1a365d", fontFamily: "'Pretendard', sans-serif" }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
