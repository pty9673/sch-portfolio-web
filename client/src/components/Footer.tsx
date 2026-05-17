import { Github, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "blog", href: "#blog" },
  { label: "contact", href: "#contact" },
];

const systemInfo = [
  "부산IT교육센터 수료",
  "Spring Boot / React / Flutter",
  "개발 중",
  "대한민국",
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="py-12 border-t"
      style={{
        background: "linear-gradient(135deg, #f5f0ff 0%, #e8f4f8 50%, #f0f8f5 100%)",
        borderColor: "rgba(74, 123, 167, 0.1)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & About */}
          <div>
            <h3
              className="text-lg font-bold mb-3"
              style={{ color: "#1a365d", fontFamily: "'Pretendard', sans-serif" }}
            >
              신창환
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
            >
              Spring Boot, React, Flutter를 활용한 풀스택 개발자입니다. 팀 프로젝트를 통해 실무 경험을 쌓고 있습니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold mb-4"
              style={{ color: "#1a365d", fontFamily: "'Pretendard', sans-serif" }}
            >
              빠른 링크
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-sm transition-all duration-200"
                  style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#4a7ba7";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#4a5568";
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* System Info */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 mono"
              style={{ color: "#4a7ba7" }}
            >
              // 시스템 정보
            </h4>
            <div className="space-y-1">
              {systemInfo.map((info, idx) => (
                <p
                  key={idx}
                  className="text-xs mono"
                  style={{ color: "#4a5568" }}
                >
                  {info}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-8 flex flex-col md:flex-row items-center justify-between"
          style={{ borderColor: "rgba(74, 123, 167, 0.1)" }}
        >
          <p
            className="text-sm"
            style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
          >
            © 2026 신창환. All rights reserved.
          </p>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="https://github.com/pty9673"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200"
              style={{ color: "#4a5568" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#4a7ba7";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#4a5568";
              }}
            >
              <Github size={20} />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="transition-all duration-200"
              style={{ color: "#4a5568" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#4a7ba7";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#4a5568";
              }}
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
