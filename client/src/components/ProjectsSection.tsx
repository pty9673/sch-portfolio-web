"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    fullName: "부산 지역 맛집 예약 사이트",
    description: "부산 지역의 맛집 정보를 한눈에 파악할 수 있도록 제공하고, 사용자 간 정보 공유 및 예약이 가능한 지역 특화 통합 웹 사이트",
    period: "2026.02.02 ~ 2026.02.13",
    teamSize: 7,
    technologies: ["Spring Boot", "Java", "HTML5", "CSS3", "Bootstrap", "MySQL"],
    techIcons: [
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    repo: "https://github.com/pty9673/next502_prj_team",
    portfolio: "https://canva.link/suu6za8avmacp76",
    video: "https://youtu.be/Tv3nelXY2oI",
  },
  {
    id: 2,
    fullName: "영화 커뮤니티 앱",
    description: "사용자들이 영화 관련 상세 정보와 실시간 리뷰를 한곳에서 편리하게 확인하고 의견을 나눌 수 있는 커뮤니티 공간",
    period: "2026.03.12 ~ 2026.03.25",
    teamSize: 4,
    technologies: ["MySQL", "Flutter", "Firebase", "Spring Boot"],
    techIcons: [
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    ],
    repo: "https://github.com/pty9673/next502_android_team_project",
    portfolio: "https://canva.link/lkx74pi663ih2q7",
    video: "https://youtube.com/shorts/T50AZ_H2Ris?feature=share",
  },
  {
    id: 3,
    fullName: "창고이음 리뉴얼",
    description: "기존에 노후화된 웹 전용 '창고이음' 서비스를 모바일 환경으로 확장하고 UI/UX를 개선하여 사용자의 접근성과 편의성을 대폭 향상",
    period: "2026.04.22 ~ 2026.05.13",
    teamSize: 3,
    technologies: ["React", "MySQL", "Flutter", "Firebase", "Spring Boot", "Java", "HTML", "CSS", "JavaScript"],
    techIcons: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
    repo: "https://github.com/pty9673/next502_react_team_project",
    portfolio: "https://canva.link/9kk85cy75zacivl",
    video: "https://youtu.be/aOozQSnwe_U",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
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
            Projects
          </h2>
          <p
            className="text-lg"
            style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
          >
            팀 프로젝트 경험
          </p>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-lg transition-all duration-200"
              style={{
                background: "rgba(255, 255, 255, 0.6)",
                border: "1px solid rgba(74, 123, 167, 0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255, 255, 255, 0.8)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(74, 123, 167, 0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255, 255, 255, 0.6)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(74, 123, 167, 0.2)";
              }}
            >
              {/* Project Title */}
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "#1a365d", fontFamily: "'Pretendard', sans-serif" }}
              >
                {project.fullName}
              </h3>

              {/* Project Description */}
              <p
                className="text-sm mb-4"
                style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
              >
                {project.description}
              </p>

              {/* Project Meta Info */}
              <div className="flex flex-wrap gap-4 mb-4 text-sm">
                <div style={{ color: "#4a7ba7", fontFamily: "'Pretendard', sans-serif" }}>
                  <span className="font-semibold">기간:</span> {project.period}
                </div>
                <div style={{ color: "#4a7ba7", fontFamily: "'Pretendard', sans-serif" }}>
                  <span className="font-semibold">팀:</span> {project.teamSize}명
                </div>
              </div>

              {/* Technology Icons */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-semibold"
                  style={{ color: "#4a7ba7", fontFamily: "'Pretendard', sans-serif" }}
                >
                  기술:
                </span>
                <div className="flex gap-2">
                  {project.techIcons.map((tech) => (
                    <img
                      key={tech.name}
                      src={tech.icon}
                      alt={tech.name}
                      title={tech.name}
                      className="w-6 h-6 rounded"
                      style={{ objectFit: "contain" }}
                    />
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={project.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm rounded transition-colors"
                  style={{
                    background: "#4a7ba7",
                    color: "white",
                    fontFamily: "'Pretendard', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#3a5f87";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#4a7ba7";
                  }}
                >
                  Portfolio
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm rounded transition-colors"
                  style={{
                    background: "rgba(74, 123, 167, 0.1)",
                    color: "#4a7ba7",
                    border: "1px solid #4a7ba7",
                    fontFamily: "'Pretendard', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(74, 123, 167, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(74, 123, 167, 0.1)";
                  }}
                >
                  Repository
                </a>
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm rounded transition-colors"
                  style={{
                    background: "rgba(74, 123, 167, 0.1)",
                    color: "#4a7ba7",
                    border: "1px solid #4a7ba7",
                    fontFamily: "'Pretendard', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(74, 123, 167, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(74, 123, 167, 0.1)";
                  }}
                >
                  Video
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
