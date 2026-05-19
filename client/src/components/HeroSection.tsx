import { useState, useEffect } from "react";
import { Github, ArrowDown, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const TYPING_TEXTS = [
  "풀스택 개발자",
  "웹 개발자",
  "문제 해결사",
  "팀 플레이어",
];

const techStack = [
  { name: "React", logo: "/manus-storage/6t9ERzgejwQg_6ff8b02f.png" },
  { name: "Java", logo: "/manus-storage/NPlERtCY5afu_311f89d2.png" },
  { name: "MySQL", logo: "/manus-storage/uu1Wqm9bbidv_02c42af6.png" },
  { name: "JavaScript", logo: "/manus-storage/jIIsSTmoYIfN_c2cfd46a.png" },
  { name: "CSS3", logo: "/manus-storage/oMKMvL7RbczG_626d5eb5.png" },
  { name: "HTML5", logo: "/manus-storage/OrvdBZIop6AD_a9c52830.png" },
  { name: "Flutter", logo: "/manus-storage/ASQPMYa173Js_432db0db.png" },
  { name: "Git", logo: "/manus-storage/r7Ehko5k7cxL_f9fa101b.png" },
  { name: "GitHub", logo: "/manus-storage/FXA3YbaVfrB1_cd6df63a.jpg" },

];

function useTypingEffect(texts: string[], speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, speed, pause]);

  return displayed;
}

export default function HeroSection() {
  const typedText = useTypingEffect(TYPING_TEXTS);

  return (
    <section
      id="about"
      className="py-24 md:py-32 relative overflow-hidden pt-32"
      style={{
        background: "linear-gradient(135deg, #f5f0ff 0%, #e8f4f8 50%, #f0f8f5 100%)",
      }}
    >
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Terminal prompt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mono text-sm mb-6"
            style={{ color: "#4a7ba7" }}
          >
            <span style={{ color: "#4a7ba7" }}>visitor@portfolio</span>
            <span>:</span>
            <span style={{ color: "#4a7ba7" }}>~</span>
            <span>$ whoami</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold leading-none mb-4"
            style={{
              fontFamily: "'Pretendard', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              color: "#1a365d",
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            신창환
            <span
              style={{
                color: "#4a7ba7",
                textShadow:
                  "0 0 20px rgba(74, 123, 167, 0.3), 0 0 40px rgba(74, 123, 167, 0.1)",
              }}
            >
              .
            </span>
          </motion.h1>

          {/* Typing subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mono text-xl md:text-2xl mb-6 h-9"
            style={{ color: "#4a7ba7" }}
          >
            <span style={{ color: "#4a7ba7" }}>&gt; </span>
            {typedText}
            <span
              style={{
                color: "#4a7ba7",
                animation: "blink 1s step-end infinite",
              }}
            >
              |
            </span>
          </motion.div>

          {/* Birth Date, Location, Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mb-6 space-y-2"
          >
            <p
              className="text-sm"
              style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
            >
              📅 생년월일: 1997.12.06
            </p>
            <p
              className="text-sm"
              style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
            >
              📍 Location: 부산
            </p>
            <p
              className="text-sm"
              style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
            >
              📞 연락처: 010-5758-5141
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base md:text-lg mb-8 max-w-xl leading-relaxed"
            style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
          >
            Spring Boot, React, Flutter, Firebase를 활용한 웹/모바일 애플리케이션 개발. 팀 프로젝트를 통해 실시간 채팅, API 데이터 처리, 사용자 인증 등 다양한 기능을 구현했습니다.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="https://github.com/pty9673"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 mono text-sm font-medium transition-all duration-200 active:scale-95"
              style={{
                background: "#4a7ba7",
                color: "#ffffff",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 20px rgba(74, 123, 167, 0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <Github size={16} />
              github.com/pty9673
            </a>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 px-6 py-3 mono text-sm font-medium transition-all duration-200 active:scale-95"
              style={{
                border: "1px solid #4a7ba7",
                color: "#4a7ba7",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(74, 123, 167, 0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <ExternalLink size={16} />
              이력서 다운로드
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <p
              className="mono text-sm mb-4"
              style={{ color: "#4a7ba7" }}
            >
              // tech stack
            </p>
            <div className="flex flex-wrap gap-4">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.05 }}
                  className="flex flex-col items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-lg transition-all duration-200"
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
                      src={tech.logo}
                      alt={tech.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span
                    className="text-xs font-medium text-center"
                    style={{
                      color: "#4a5568",
                      fontFamily: "'Pretendard', sans-serif",
                    }}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "#8892a4" }}
      >
        <span className="mono text-xs" style={{ color: "#8892a4" }}>
          scroll_down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} style={{ color: "#4a7ba7" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
