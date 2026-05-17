import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/pty9673",
    label: "github.com/pty9673",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:sssc5141@naver.com",
    label: "sssc5141@naver.com",
  },
  {
    name: "Location",
    icon: MapPin,
    url: "#",
    label: "대한민국",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("모든 필드를 입력해주세요.");
      return;
    }

    // Create mailto link
    const mailtoLink = `mailto:sssc5141@naver.com?subject=${encodeURIComponent(
      `[${formData.name}] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `이름: ${formData.name}\n이메일: ${formData.email}\n\n메시지:\n${formData.message}`
    )}`;

    // Open default email client
    window.location.href = mailtoLink;
    toast.success("이메일 클라이언트가 열렸습니다.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
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
            Contact
          </h2>
          <p
            className="text-lg"
            style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
          >
            연락 주세요
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#1a365d", fontFamily: "'Pretendard', sans-serif" }}
              >
                이름
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-2 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(255, 255, 255, 0.6)",
                  border:
                    focusedField === "name"
                      ? "2px solid #4a7ba7"
                      : "1px solid rgba(74, 123, 167, 0.2)",
                  color: "#1a365d",
                }}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#1a365d", fontFamily: "'Pretendard', sans-serif" }}
              >
                이메일
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-2 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(255, 255, 255, 0.6)",
                  border:
                    focusedField === "email"
                      ? "2px solid #4a7ba7"
                      : "1px solid rgba(74, 123, 167, 0.2)",
                  color: "#1a365d",
                }}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#1a365d", fontFamily: "'Pretendard', sans-serif" }}
              >
                제목
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-2 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(255, 255, 255, 0.6)",
                  border:
                    focusedField === "subject"
                      ? "2px solid #4a7ba7"
                      : "1px solid rgba(74, 123, 167, 0.2)",
                  color: "#1a365d",
                }}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#1a365d", fontFamily: "'Pretendard', sans-serif" }}
              >
                메시지
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                rows={5}
                className="w-full px-4 py-2 rounded-lg transition-all duration-200 resize-none"
                style={{
                  background: "rgba(255, 255, 255, 0.6)",
                  border:
                    focusedField === "message"
                      ? "2px solid #4a7ba7"
                      : "1px solid rgba(74, 123, 167, 0.2)",
                  color: "#1a365d",
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 active:scale-95"
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
              메시지 전송
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: "#1a365d", fontFamily: "'Pretendard', sans-serif" }}
              >
                연락처
              </h3>
            </div>

            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.name !== "Location" ? "_blank" : undefined}
                  rel={link.name !== "Location" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg transition-all duration-200"
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
                  <Icon size={24} style={{ color: "#4a7ba7" }} />
                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#4a7ba7", fontFamily: "'Pretendard', sans-serif" }}
                    >
                      {link.name}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "#4a5568", fontFamily: "'Pretendard', sans-serif" }}
                    >
                      {link.label}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
