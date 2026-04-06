"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram, FaMailBulk } from "react-icons/fa";

// Shadcn-style UI primitives (inline, no extra install needed)
function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-[#0f2035] mb-1.5"
    >
      {children}
    </label>
  );
}

function Input({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 bg-[#f8f6f2] border border-gray-200 rounded-sm text-[#0f2035] placeholder-[#a0aec0] text-sm focus:outline-none focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] transition-colors"
    />
  );
}

function Textarea({
  id,
  placeholder,
  value,
  onChange,
  rows = 4,
  required,
}: {
  id: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  required?: boolean;
}) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      required={required}
      className="w-full px-4 py-3 bg-[#f8f6f2] border border-gray-200 rounded-sm text-[#0f2035] placeholder-[#a0aec0] text-sm focus:outline-none focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] transition-colors resize-none"
    />
  );
}

const socials = [
  {
    label: "Email",
    value: "islombek@email.com", // TO'LDIRING
    href: "mailto:islombekkamoliddinov1@email.com",
    icon: FaMailBulk,
  },
  {
    label: "GitHub",
    value: "github.com/islome", // TO'LDIRING
    href: "https://github.com/islome",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/islombek", // TO'LDIRING
    href: "https://www.linkedin.com/in/islombek-k-819a56380/",
    icon: FaLinkedin,
  },
  {
    label: "Telegram",
    value: "@justislombek", // TO'LDIRING
    href: "https://t.me/justislombek",
    icon: FaTelegram,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const token = process.env.NEXT_PUBLIC_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_CHAT_ID;


    const text = `
    📩 Yangi xabar:
    👤 Kimdan: ${form.name}
    📧 Email: ${form.email}
    💬 Xabar: ${form.message}
  `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
          }),
        },
      );
      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Xabar yuborilmadi!");
      }


      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-8 h-px bg-[#c9a84c]" />
          <span className="text-xs font-mono text-[#c9a84c] tracking-widest uppercase">
            Contact
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0f2035] mb-4">
              Let&apos;s work
              <br />
              <span className="text-[#c9a84c] italic">together.</span>
            </h2>
            <p className="text-[#4a6080] mb-10 leading-relaxed">
              Got a project in mind? Want to collaborate? Or just want to say
              hello? Send me a message — I&apos;ll get back to you via Telegram.
            </p>

            {/* Social links */}
            <div className="space-y-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-[#f8f6f2] border border-gray-100 rounded-sm group-hover:bg-[#1e3a5f] group-hover:border-[#1e3a5f] transition-all duration-200">
                    <social.icon
                      size={16}
                      className="text-[#4a6080] group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-[#4a6080] font-mono">
                      {social.label}
                    </div>
                    <div className="text-sm font-medium text-[#0f2035] group-hover:text-[#c9a84c] transition-colors">
                      {social.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#1e3a5f] text-white font-medium text-sm rounded-sm hover:bg-[#0f2035] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-sm text-green-700 text-sm font-medium"
                >
                  ✓ Message sent! I&apos;ll reply soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-sm text-red-700 text-sm font-medium"
                >
                  ✗ Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
