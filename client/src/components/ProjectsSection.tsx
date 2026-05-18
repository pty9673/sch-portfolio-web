import { Github, FileText, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    fullName: "부산 지역 맛집 예약 사이트",
    repo: "https://github.com/pty9673/next502_prj_team",
    portfolio: "https://canva.link/suu6za8avmacp76",
  },
  {
    id: 2,
    fullName: "영화 커뮤니티 앱",
    repo: "https://github.com/pty9673/next502_android_team_project",
    portfolio: "https://canva.link/lkx74pi663ih2q7",
  },
  {
    id: 3,
    fullName: "창고이음 리뉴얼",
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
        <div className="space-y-4">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-4 rounded-lg transition-all duration-200"
              style={{
                background: "rgba(255, 255, 255, 0.5)",
                border: "1px solid rgba(74, 123, 167, 0.15)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255, 255, 255, 0.7)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(74, 123, 167, 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255, 255, 255, 0.5)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(74, 123, 167, 0.15)";
              }}
            >
              <div className="flex items-center justify-between">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#1a365d", fontFamily: "'Pretendard', sans-serif" }}
                >
                  {project.fullName}
                </h3>
                <div className="flex items-center gap-2">
                  <a
                    href={project.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded transition-all duration-200"
                    style={{
                      background: "rgba(74, 123, 167, 0.1)",
                      color: "#4a7ba7",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(74, 123, 167, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(74, 123, 167, 0.1)";
                    }}
                  >
                    <FileText size={16} />
                    <span
                      className="text-sm"
                      style={{ fontFamily: "'Pretendard', sans-serif" }}
                    >
                      Portfolio
                    </span>
                  </a>
                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded transition-all duration-200"
                      style={{
                        background: "rgba(74, 123, 167, 0.1)",
                        color: "#4a7ba7",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(74, 123, 167, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(74, 123, 167, 0.1)";
                      }}
                    >
                      <Play size={16} />
                      <span
                        className="text-sm"
                        style={{ fontFamily: "'Pretendard', sans-serif" }}
                      >
                        Video
                      </span>
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded transition-all duration-200"
                    style={{
                      background: "rgba(74, 123, 167, 0.1)",
                      color: "#4a7ba7",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(74, 123, 167, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(74, 123, 167, 0.1)";
                    }}
                  >
                    <Github size={16} />
                    <span
                      className="text-sm"
                      style={{ fontFamily: "'Pretendard', sans-serif" }}
                    >
                      Repository
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
