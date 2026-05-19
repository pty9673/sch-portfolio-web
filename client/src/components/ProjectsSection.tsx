"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    fullName: "부산 지역 맛집 예약 사이트",
    description: "부산 지역의 맛집 정보를 한눈에 파악할 수 있도록 제공하고, 사용자 간 정보 공유 및 예약이 가능한 지역 특화 통합 웹 사이트. 사용자 인증(로그인/회원가입), 역할 관리(일반 고객/식당 관리자), 이메일 및 전화번호 인증 기능 포함.",
    background: "부산 지역의 맛집 정보가 산재되어 있어 사용자들이 한곳에서 정보를 얻기 어려운 문제를 해결하기 위해 기획. 예약 시스템을 통해 식당과 사용자 간의 상호작용을 원활하게 하는 것을 목표로 함.",
    role: "로그인, 회원가입 기능 구현",
    period: "2026.02.02 ~ 2026.02.13",
    teamSize: 7,
    images: ["/manus-storage/pasted_file_4lntVG_image_2258d741.png", "/manus-storage/pasted_file_vHyt3H_image_4f7d274a.png"],
    technologies: ["Spring Boot", "Java", "HTML5", "CSS3", "Bootstrap", "MySQL"],
    techIcons: [
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    repo: "https://github.com/pty9673/next502_prj_team",
    portfolio: "https://canva.link/suu6za8avmacp76",
    video: "https://youtu.be/Tv3nelXY2oI",
  },
  {
    id: 2,
    fullName: "영화 커뮤니티 앱",
    description: "사용자들이 영화 관련 상세 정보와 실시간 리뷰를 한곳에서 편리하게 확인하고 의견을 나눌 수 있는 커뮤니티 공간. 영화 정보 조회, 별점 평가 시스템, 리뷰 작성/수정/삭제 기능, 배우 정보 표시 등의 기능 포함.",
    background: "영화 팬들이 다양한 플랫폼에서 영화 정보와 리뷰를 찾아야 하는 불편함을 해결하기 위해 기획. 한 앱에서 영화 정보, 배우 정보, 사용자 리뷰를 통합적으로 제공하여 영화 커뮤니티를 활성화하는 것을 목표로 함.",
    role: "상세페이지, 리뷰페이지 구현",
    period: "2026.03.12 ~ 2026.03.25",
    teamSize: 4,
    images: ["/manus-storage/pasted_file_dHwwOe_image_cda71e15.png", "/manus-storage/pasted_file_cKC9aP_image_035860f6.png"],
    technologies: ["MySQL", "Flutter", "Firebase", "Spring Boot"],
    techIcons: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
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
    background: "기존 창고이음 서비스가 웹에만 제한되어 있어 모바일 사용자들의 접근성이 낮은 문제를 해결하기 위해 기획. 모바일 앱 개발과 UI/UX 개선을 통해 사용자 경험을 향상시키는 것을 목표로 함.",
    role: "실시간 채팅, 모바일 앱 구현",
    period: "2026.04.22 ~ 2026.05.13",
    teamSize: 3,
    images: [],
    technologies: ["React", "MySQL", "Flutter", "Firebase", "Spring Boot", "Java", "HTML", "CSS", "JavaScript"],
    techIcons: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
    repo: "https://github.com/pty9673/next502_react_team_project",
    portfolio: "https://canva.link/9kk85cy75zacivl",
    video: "https://youtu.be/aOozQSnwe_U",
  },
];

function ProjectCard({ project, inView }: { project: typeof projects[0]; inView: boolean }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [];
  const hasImages = images.length > 0;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-lg transition-all duration-200"
      style={{
        background: "rgba(255, 255, 255, 0.6)",
        border: "1px solid rgba(74, 123, 167, 0.2)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.8)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(74, 123, 167, 0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.6)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(74, 123, 167, 0.2)";
      }}
    >
      {/* Project Title */}
      <h3
        className="text-xl font-bold mb-4"
        style={{ color: "#1a365d", fontFamily: "'Pretendard', sans-serif" }}
      >
        {project.fullName}
      </h3>

      {/* Image Carousel */}
      {hasImages && (
        <div className="mb-4 relative rounded-lg overflow-hidden bg-gray-100" style={{ maxHeight: "400px" }}>
          <img
            src={images[currentImageIndex]}
            alt={`${project.fullName} - Screenshot ${currentImageIndex + 1}`}
            className="w-full h-full object-contain"
          />

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-200 z-10"
                style={{
                  background: "rgba(74, 123, 167, 0.7)",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(74, 123, 167, 0.9)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(74, 123, 167, 0.7)";
                }}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-200 z-10"
                style={{
                  background: "rgba(74, 123, 167, 0.7)",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(74, 123, 167, 0.9)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(74, 123, 167, 0.7)";
                }}
              >
                <ChevronRight size={20} />
              </button>

              {/* Indicator Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className="w-2 h-2 rounded-full transition-all duration-200"
                    style={{
                      background: idx === currentImageIndex ? "#4a7ba7" : "rgba(255, 255, 255, 0.5)",
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Project Description */}
      <p
        className="text-sm mb-4"
        style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
      >
        {project.description}
      </p>

      {/* Background Section */}
      <div className="mb-4 p-3 rounded-lg" style={{ background: "rgba(74, 123, 167, 0.05)" }}>
        <h4
          className="text-xs font-semibold mb-2"
          style={{ color: "#4a7ba7", fontFamily: "'Pretendard', sans-serif" }}
        >
          📌 기획배경
        </h4>
        <p
          className="text-xs"
          style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif", lineHeight: "1.5" }}
        >
          {project.background}
        </p>
      </div>

      {/* Role Section */}
      <div className="mb-4 p-3 rounded-lg" style={{ background: "rgba(74, 123, 167, 0.05)" }}>
        <h4
          className="text-xs font-semibold mb-2"
          style={{ color: "#4a7ba7", fontFamily: "'Pretendard', sans-serif" }}
        >
          👤 담당역할
        </h4>
        <p
          className="text-xs"
          style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif", lineHeight: "1.5" }}
        >
          {project.role}
        </p>
      </div>

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
  );
}

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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
