import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const posts = [
  {
    id: 1,
    slug: "firebase-realtime-chat",
    title: "Firebase 실시간 채팅 구현하기",
    excerpt: "Firebase Realtime Database를 활용한 실시간 채팅 애플리케이션 개발 경험",
    date: new Date("2024-01-15"),
    readTime: "5 min read",
    tags: ["Firebase", "React", "Real-time"],
    featured: true,
  },
  {
    id: 2,
    slug: "tmdb-api-integration",
    title: "TMDB API 영화 데이터 통합",
    excerpt: "TMDB API를 이용한 영화 정보 조회 및 데이터 처리 방법",
    date: new Date("2024-01-10"),
    readTime: "7 min read",
    tags: ["API", "React", "데이터"],
  },
  {
    id: 3,
    slug: "spring-boot-login",
    title: "Spring Boot 사용자 인증 시스템",
    excerpt: "Spring Boot를 사용한 JWT 기반 사용자 인증 구현",
    date: new Date("2024-01-05"),
    readTime: "8 min read",
    tags: ["Spring Boot", "JWT", "인증"],
  },
  {
    id: 4,
    slug: "flutter-responsive-design",
    title: "Flutter 반응형 디자인 패턴",
    excerpt: "Flutter에서 다양한 화면 크기에 대응하는 반응형 UI 구현",
    date: new Date("2023-12-28"),
    readTime: "6 min read",
    tags: ["Flutter", "UI/UX", "반응형"],
  },
  {
    id: 5,
    slug: "mysql-optimization",
    title: "MySQL 쿼리 최적화 기법",
    excerpt: "인덱싱과 쿼리 튜닝을 통한 데이터베이스 성능 개선",
    date: new Date("2023-12-20"),
    readTime: "9 min read",
    tags: ["MySQL", "성능", "데이터베이스"],
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <section
      id="blog"
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
            Blog
          </h2>
          <p
            className="text-lg"
            style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
          >
            기술 블로그
          </p>
        </motion.div>

        {/* Featured post */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 p-6 rounded-lg"
            style={{
              background: "rgba(255, 255, 255, 0.6)",
              border: "1px solid rgba(74, 123, 167, 0.2)",
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{
                    color: "#1a365d",
                    fontFamily: "'Pretendard', sans-serif",
                  }}
                >
                  {featured.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
                >
                  {featured.date.toLocaleDateString("ko-KR")} · {featured.readTime}
                </p>
              </div>
            </div>
            <p
              className="mb-4"
              style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
            >
              {featured.excerpt}
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded text-xs"
                  style={{
                    background: "rgba(74, 123, 167, 0.1)",
                    color: "#4a7ba7",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Other posts */}
        <div className="space-y-4">
          {rest.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.05 }}
              onClick={() => {
                toast.info("기능 준비 중입니다. 블로그 링크를 기대해주세요.");
              }}
              className="p-4 rounded-lg transition-all duration-200 group cursor-pointer"
              style={{
                background: "rgba(255, 255, 255, 0.4)",
                border: "1px solid rgba(74, 123, 167, 0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255, 255, 255, 0.6)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(74, 123, 167, 0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255, 255, 255, 0.4)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(74, 123, 167, 0.1)";
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3
                    className="font-semibold mb-1"
                    style={{
                      color: "#1a365d",
                      fontFamily: "'Pretendard', sans-serif",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
                  >
                    {post.date.toLocaleDateString("ko-KR")} · {post.readTime}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="transition-all duration-200 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
                  style={{ color: "#4a7ba7" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
