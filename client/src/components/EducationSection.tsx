import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

interface EducationItem {
  type: "education" | "training";
  title: string;
  institution: string;
  period: string;
  description: string;
  details?: string[];
}

const educationData: EducationItem[] = [
  {
    type: "training",
    title: "[K]NEXTGENAI 풀스택개발자 과정",
    institution: "부산IT교육센터",
    period: "2025.10.28 ~ 2026.05.19",
    description: "풀스택 개발자 양성 과정 수료",
    details: [
      "Spring Boot, React, Flutter 등 현대적 웹/모바일 기술 학습",
      "팀 프로젝트를 통한 실무 경험 (3개 프로젝트 완료)",
      "API 설계, 데이터베이스 최적화, 사용자 인증 구현",
    ],
  },
  {
    type: "education",
    title: "보건과",
    institution: "부산보건고등학교",
    period: "2013.03 ~ 2016.02",
    description: "고등학교 졸업",
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="education"
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
            Education
          </h2>
          <p
            className="text-lg"
            style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
          >
            학력 및 교육
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-8"
        >
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative pl-8"
            >
              {/* Timeline dot and line */}
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full" style={{ background: "#4a7ba7" }} />
              {idx !== educationData.length - 1 && (
                <div
                  className="absolute left-1.5 top-4 w-0.5 h-24"
                  style={{ background: "rgba(74, 123, 167, 0.2)" }}
                />
              )}

              {/* Content */}
              <div
                className="p-6 rounded-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.6)",
                  border: "1px solid rgba(74, 123, 167, 0.15)",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{
                        color: "#1a365d",
                        fontFamily: "'Pretendard', sans-serif",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm mt-1"
                      style={{
                        color: "#4a5568",
                        fontFamily: "'Pretendard', sans-serif",
                      }}
                    >
                      {item.institution}
                    </p>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background:
                        item.type === "training"
                          ? "rgba(74, 123, 167, 0.15)"
                          : "rgba(100, 150, 200, 0.15)",
                      color: item.type === "training" ? "#4a7ba7" : "#5a8ab5",
                      fontFamily: "'Pretendard', sans-serif",
                    }}
                  >
                    {item.type === "training" ? "교육과정" : "학력"}
                  </span>
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} style={{ color: "#4a7ba7" }} />
                  <span
                    className="text-sm"
                    style={{
                      color: "#4a5568",
                      fontFamily: "'Pretendard', sans-serif",
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="mb-4"
                  style={{
                    color: "#4a5568",
                    fontFamily: "'Pretendard', sans-serif",
                  }}
                >
                  {item.description}
                </p>

                {/* Details */}
                {item.details && item.details.length > 0 && (
                  <ul className="space-y-2">
                    {item.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm"
                        style={{
                          color: "#4a5568",
                          fontFamily: "'Pretendard', sans-serif",
                        }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#4a7ba7" }}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
