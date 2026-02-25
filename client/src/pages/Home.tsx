/* ============================================================
   HOME PAGE — Melissa Maarschalkerweerd Web CV
   Design: Contemporary Executive Brand — Dark Teal Prestige
   Sections: Nav | Hero | Stats | About | Experience | Skills | Education | Contact
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import {
  MapPin, Mail, Linkedin, ChevronDown, Award, TrendingUp,
  Users, BarChart3, Workflow, Target, Globe, Download,
  Calendar, Building2, CheckCircle2, Menu, X
} from "lucide-react";

// ─── Image URLs (CDN) ───────────────────────────────────────────────────────
const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/bIAFgxevfOkaUZo0W1xwhT/sandbox/TXWvBiNFSxSGdwPFgbHIXv-img-1_1772004510000_na1fn_bWVsaXNzYS1oZXJvLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYklBRmd4ZXZmT2thVVpvMFcxeHdoVC9zYW5kYm94L1RYV3ZCaU5GU3hTR2R3UEZnYkhJWHYtaW1nLTFfMTc3MjAwNDUxMDAwMF9uYTFmbl9iV1ZzYVhOellTMW9aWEp2TFdKbi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Vh2jYNwNAZPKx7ZANr1vVoahGVrQinyEsVO1FPl4RVISUDonNDZP147udRbKlRRaGQiXnvGakAlTLMBlrYFL9H5abL1oZBXvIE5KSlwiY7PHHp2XZjZtlWF9eZVU~2eFbz0LBPrCyGA7kQoIdtC3MiLF-kNoyslEEc-fM1fnrj~b0klkMkB2~4wPoQbu2jVsAZchrLoNB8LL3YyicabRqyqMwlFPN3piNtIKA1Am2d9axXjxI8WVnp4n7I8MxNVEf~7pXHJfSnw4NLnjRqiV6rMb773BgfUeQ6IDrW-TVPDUpBrkNirixanQgGQUceLLguJw5KMiexiZcr2sHX10Xg__";
const STATS_BG = "https://private-us-east-1.manuscdn.com/sessionFile/bIAFgxevfOkaUZo0W1xwhT/sandbox/TXWvBiNFSxSGdwPFgbHIXv-img-2_1772004519000_na1fn_bWVsaXNzYS1zdGF0cy1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYklBRmd4ZXZmT2thVVpvMFcxeHdoVC9zYW5kYm94L1RYV3ZCaU5GU3hTR2R3UEZnYkhJWHYtaW1nLTJfMTc3MjAwNDUxOTAwMF9uYTFmbl9iV1ZzYVhOellTMXpkR0YwY3kxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UyfxYqmhBTgiAcIws4zX3w0Hfb-fWiz-zKSFffK~0iqwdtnQRl8zIm3xNDFPLutdLhjYlp4ipfBZcdlvPgZ8RmlSE~~DUcP6CDsWekochw-tDZ9Cg2P3t5YueL0WY37MlIuvelQtduYrdqPY8R-8EO4nGOdQPYir5hSNUIw3v~1S8jX9vCnXn4kIsEjD30XUTtUsn3LK2eiI8yuD6Ov9Kw5eQ~9CVzhHr4Xr8YB5~phAYjcZF0gPLBhCZB6PkARSu2fnjPdZ0PKU9jl0nNlL9Pb-QkGGpIRiVVKYAcLLey~ivWpE95dyzXBB9zWdEgQSkD-hmjteAZOqDizlxX5oWQ__";
const PROFILE_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/bIAFgxevfOkaUZo0W1xwhT/sandbox/TXWvBiNFSxSGdwPFgbHIXv-img-3_1772004504000_na1fn_bWVsaXNzYS1wcm9maWxlLWFic3RyYWN0.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYklBRmd4ZXZmT2thVVpvMFcxeHdoVC9zYW5kYm94L1RYV3ZCaU5GU3hTR2R3UEZnYkhJWHYtaW1nLTNfMTc3MjAwNDUwNDAwMF9uYTFmbl9iV1ZzYVhOellTMXdjbTltYVd4bExXRmljM1J5WVdOMC5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=op1rBk03FgDrDySHgZH3ROBwwzjhNstUfZqK5V4lfrf1c0GKRPTnRLP9H5abL1oZBXvIE5KSlwiY7PHHp2XZjZtlWF9eZVU~2eFbz0LBPrCyGA7kQoIdtC3MiLF-kNoyslEEc-fM1fnrj~b0klkMkB2~4wPoQbu2jVsAZchrLoNB8LL3YyicabRqyqMwlFPN3piNtIKA1Am2d9axXjxI8WVnp4n7I8MxNVEf~7pXHJfSnw4NLnjRqiV6rMb773BgfUeQ6IDrW-TVPDUpBrkNirixanQgGQUceLLguJw5KMiexiZcr2sHX10Xg__";
const SKILLS_BG = "https://private-us-east-1.manuscdn.com/sessionFile/bIAFgxevfOkaUZo0W1xwhT/sandbox/TXWvBiNFSxSGdwPFgbHIXv-img-4_1772004509000_na1fn_bWVsaXNzYS1za2lsbHMtYmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYklBRmd4ZXZmT2thVVpvMFcxeHdoVC9zYW5kYm94L1RYV3ZCaU5GU3hTR2R3UEZnYkhJWHYtaW1nLTRfMTc3MjAwNDUwOTAwMF9uYTFmbl9iV1ZzYVhOellTMXphMmxzYkhNdFltYy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Vx2xZ4Nk5p1G8W~3ZG2nf3FtuoqPs8yWYQyVV0l1u-BB4-GDCwOs73QoejDW22lqa0N3mfgtqm-ZN-1ePHUv2eXkd78BGV3gZJ2r~qiBfdWzceBzyG63Pu1Qxb3hvWRUpkIw2JQIOGs~hjpM0lT5iWieAoFNrW4hkgSXWqCfpeKpukve7nft2fPiB86yU14XqxHSXLsjKvu54TXshRT2Gjk0X-u-JRoUNkzzF7k7-WtRYQw3VxtPNa-12NwhvXTBnv1Xb8MRq-xOgLp6te4YXql4PCNb4oyjyHfJe6Mq1DvCsxfO7OWagiw73y3DN-02AHDm~9rX~ALJEDwS8JIYuA__";

// ─── Scroll animation hook ──────────────────────────────────────────────────
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Counter animation hook ─────────────────────────────────────────────────
function useCounter(target: number, duration: number = 1500, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ─── Stat Card ──────────────────────────────────────────────────────────────
function StatCard({ value, suffix, label, icon: Icon, started }: {
  value: number; suffix: string; label: string; icon: React.ElementType; started: boolean;
}) {
  const count = useCounter(value, 1400, started);
  return (
    <div className="text-center px-6 py-8 flex flex-col items-center gap-2">
      <Icon size={28} style={{ color: "oklch(0.72 0.12 75)" }} />
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 700, color: "white", lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.82 0.10 78)" }}>
        {label}
      </div>
    </div>
  );
}

// ─── Experience Card ────────────────────────────────────────────────────────
function ExperienceCard({ company, roles, description, engagements }: {
  company: string;
  roles: { title: string; period: string; location?: string }[];
  description: string;
  engagements?: string[];
}) {
  return (
    <div className="fade-up" style={{ background: "white", borderRadius: "0.5rem", padding: "2rem 2.5rem", boxShadow: "0 2px 24px 0 rgba(30,61,79,0.08)", borderLeft: "4px solid oklch(0.72 0.12 75)", marginBottom: "1.5rem" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
        <div style={{ background: "oklch(0.22 0.04 220)", borderRadius: "0.375rem", padding: "0.6rem", flexShrink: 0 }}>
          <Building2 size={20} style={{ color: "oklch(0.72 0.12 75)" }} />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 700, color: "oklch(0.22 0.04 220)", marginBottom: "0.25rem" }}>
            {company}
          </h3>
          {roles.map((role, i) => (
            <div key={i} style={{ marginBottom: i < roles.length - 1 ? "0.5rem" : 0 }}>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "oklch(0.35 0.06 210)" }}>
                {role.title}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.15rem" }}>
                <span style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.82rem", color: "oklch(0.52 0.02 220)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <Calendar size={12} /> {role.period}
                </span>
                {role.location && (
                  <span style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.82rem", color: "oklch(0.52 0.02 220)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <MapPin size={12} /> {role.location}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.95rem", color: "oklch(0.35 0.03 220)", lineHeight: 1.75, marginBottom: engagements ? "1rem" : 0 }}>
        {description}
      </p>
      {engagements && (
        <div style={{ marginTop: "1rem" }}>
          <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.72 0.12 75)", marginBottom: "0.6rem" }}>
            Selected Engagements
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {engagements.map((e, i) => (
              <span key={i} style={{ background: "oklch(0.94 0.005 80)", border: "1px solid oklch(0.88 0.01 220)", borderRadius: "2rem", padding: "0.25rem 0.85rem", fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.82rem", color: "oklch(0.35 0.06 210)", fontWeight: 600 }}>
                {e}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Skill Tag ──────────────────────────────────────────────────────────────
function SkillTag({ label, icon: Icon }: { label: string; icon?: React.ElementType }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "0.375rem", padding: "0.6rem 1rem", backdropFilter: "blur(4px)" }}>
      {Icon && <Icon size={15} style={{ color: "oklch(0.72 0.12 75)", flexShrink: 0 }} />}
      <span style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.88rem", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
        {label}
      </span>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function Home() {
  useScrollAnimation();
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Sticky nav on scroll
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trigger stat counters when stats section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

      {/* ── STICKY NAV ─────────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all 0.3s ease",
        background: navScrolled ? "rgba(22,45,58,0.97)" : "transparent",
        backdropFilter: navScrolled ? "blur(12px)" : "none",
        boxShadow: navScrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
        borderBottom: navScrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 700, color: "white", letterSpacing: "0.02em" }}>
            MM
          </div>
          {/* Desktop nav */}
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hidden md:flex">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollTo(link.id)} style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "oklch(0.82 0.10 78)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}>
                {link.label}
              </button>
            ))}
            <a href="mailto:melissa.maarshall@gmail.com" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.22 0.04 220)", background: "oklch(0.72 0.12 75)", padding: "0.5rem 1.25rem", borderRadius: "0.25rem", textDecoration: "none", transition: "background 0.2s" }}>
              Hire Me
            </a>
          </div>
          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: "none", border: "none", color: "white", display: "flex" }} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div style={{ background: "rgba(22,45,58,0.98)", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "1rem 2rem 1.5rem" }}>
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollTo(link.id)} style={{ display: "block", width: "100%", textAlign: "left", fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", background: "none", border: "none", padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)", cursor: "pointer" }}>
                {link.label}
              </button>
            ))}
            <a href="mailto:melissa.maarshall@gmail.com" style={{ display: "block", marginTop: "1rem", textAlign: "center", fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.22 0.04 220)", background: "oklch(0.72 0.12 75)", padding: "0.75rem", borderRadius: "0.25rem", textDecoration: "none" }}>
              Hire Me
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.55)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(22,45,58,0.85) 0%, rgba(13,37,53,0.6) 60%, rgba(22,45,58,0.4) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", paddingTop: "7rem", paddingBottom: "5rem", width: "100%" }}>
          <div style={{ maxWidth: "760px" }}>
            <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "oklch(0.82 0.10 78)", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ width: "2rem", height: "1px", background: "oklch(0.72 0.12 75)", display: "inline-block" }} />
              Senior Marketing Operations Leader
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 8vw, 5.5rem)", fontWeight: 700, color: "white", lineHeight: 1.05, marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>
              Melissa<br />Maarschalkerweerd
            </h1>
            <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "rgba(255,255,255,0.82)", lineHeight: 1.75, maxWidth: "580px", marginBottom: "2.5rem" }}>
              Systems & Workflow Architecture · Commercial Marketing Strategy · Customer Experience Performance. Bridging strategy and execution for revenue-aligned marketing teams.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
              <button onClick={() => scrollTo("contact")} style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.18 0.02 220)", background: "oklch(0.72 0.12 75)", padding: "0.85rem 2rem", borderRadius: "0.25rem", border: "none", cursor: "pointer", transition: "background 0.2s" }}>
                Get In Touch
              </button>
              <button onClick={() => scrollTo("experience")} style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "white", background: "transparent", padding: "0.85rem 2rem", borderRadius: "0.25rem", border: "1px solid rgba(255,255,255,0.35)", cursor: "pointer", transition: "border-color 0.2s" }}>
                View Experience
              </button>
            </div>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "rgba(255,255,255,0.65)", fontSize: "0.88rem" }}>
                <MapPin size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
                Johannesburg, South Africa
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "rgba(255,255,255,0.65)", fontSize: "0.88rem" }}>
                <Globe size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
                Open to Permanent · Hybrid · Freelance
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => scrollTo("stats")} style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", animation: "bounce 2s infinite" }}>
          <ChevronDown size={28} />
        </button>
        <style>{`@keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }`}</style>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────────── */}
      <section id="stats" ref={statsRef} style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${STATS_BG})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.4)" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,37,53,0.75)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <StatCard value={10} suffix="+" label="Years Experience" icon={TrendingUp} started={statsStarted} />
            <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
            <StatCard value={9} suffix="" label="Years at ADreach" icon={Building2} started={statsStarted} />
            <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
            <StatCard value={4} suffix="M+" label="Budget Managed (ZAR)" icon={BarChart3} started={statsStarted} />
            <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
            <StatCard value={5} suffix="+" label="Freelance Engagements" icon={Users} started={statsStarted} />
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────────── */}
      <section id="about" style={{ background: "oklch(0.97 0.005 80)", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            {/* Profile image */}
            <div className="fade-up" style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "-1.5rem", left: "-1.5rem", width: "100%", height: "100%", border: "2px solid oklch(0.72 0.12 75)", borderRadius: "0.5rem", zIndex: 0 }} />
              <img src={PROFILE_IMG} alt="Melissa Maarschalkerweerd" style={{ width: "100%", borderRadius: "0.5rem", position: "relative", zIndex: 1, display: "block", objectFit: "cover", maxHeight: "480px" }} />
              <div style={{ position: "absolute", bottom: "1.5rem", right: "-1.5rem", zIndex: 2, boxShadow: "0 8px 32px rgba(0,0,0,0.25)", borderRadius: "0.5rem", overflow: "hidden", width: "120px" }}>
                <img src={`${import.meta.env.BASE_URL}amasa_award.jpg`} alt="AMASA Award Winner" style={{ width: "100%", height: "auto", display: "block", borderRadius: "0.5rem" }} />
              </div>
            </div>
            {/* Text */}
            <div className="fade-up delay-200">
              <div className="section-label">About Melissa</div>
              <span className="gold-rule" />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 700, color: "oklch(0.22 0.04 220)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                Bridging Strategy & Execution at Scale
              </h2>
              <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "1rem", color: "oklch(0.35 0.03 220)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Senior Marketing Operations and Commercial Marketing leader with over a decade of experience driving revenue-aligned marketing performance in national corporate environments. Proven track record managing R3–4 million annual marketing budgets, leading cross-functional teams, and implementing KPI-driven governance frameworks.
              </p>
              <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "1rem", color: "oklch(0.35 0.03 220)", lineHeight: 1.85, marginBottom: "2rem" }}>
                Specialising in transforming fragmented marketing functions into governed, accountable, KPI-led operational systems. Background spans both corporate leadership and consulting, giving strong commercial judgment alongside hands-on systems execution capability.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
                {["Marketing Operations", "Commercial Strategy", "Client Success", "KPI Governance", "Monday.com Architecture"].map((tag) => (
                  <span key={tag} style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "oklch(0.35 0.06 210)", background: "oklch(0.93 0.01 80)", border: "1px solid oklch(0.88 0.01 220)", borderRadius: "2rem", padding: "0.3rem 0.9rem" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="mailto:melissa.maarshall@gmail.com" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "white", background: "oklch(0.22 0.04 220)", padding: "0.75rem 1.5rem", borderRadius: "0.25rem", textDecoration: "none" }}>
                  <Mail size={15} /> Email Me
                </a>
                <a href="https://linkedin.com/in/melissa-maarschalkerweerd-9b58b069" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "oklch(0.22 0.04 220)", background: "transparent", padding: "0.75rem 1.5rem", borderRadius: "0.25rem", textDecoration: "none", border: "1px solid oklch(0.88 0.01 220)" }}>
                  <Linkedin size={15} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY IMPACT HIGHLIGHTS ──────────────────────────────────────── */}
      <section style={{ background: "oklch(0.22 0.04 220)", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div className="fade-up" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ justifyContent: "center", display: "flex" }}>Impact Highlights</div>
            <span className="gold-rule" style={{ margin: "0 auto 0" }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "white", marginTop: "0.75rem" }}>
              Measurable Commercial Outcomes
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {[
              { icon: BarChart3, text: "Managed and influenced annual marketing budgets of R3–4 million within a national advertising organisation" },
              { icon: Users, text: "Led a marketing team of 3 and coordinated 6–8 revenue-support administrative staff" },
              { icon: Award, text: "Delivered AMASA award-winning national campaign and completed full award submission" },
              { icon: Workflow, text: "Designed and implemented fully customised Monday.com operational architecture improving governance and cross-team visibility" },
              { icon: Target, text: "Presented performance and commercial updates regularly to executive leadership" },
              { icon: TrendingUp, text: "Strengthened reporting discipline through KPI-led executive dashboards linking campaign performance to commercial outcomes" },
            ].map((item, i) => (
              <div key={i} className={`fade-up delay-${Math.min((i % 3 + 1) * 100, 300) as 100 | 200 | 300}`} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.5rem", padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ background: "rgba(212,168,67,0.15)", borderRadius: "0.375rem", padding: "0.6rem", flexShrink: 0 }}>
                  <item.icon size={20} style={{ color: "oklch(0.72 0.12 75)" }} />
                </div>
                <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.92rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ─────────────────────────────────────────────────── */}
      <section id="experience" style={{ background: "oklch(0.97 0.005 80)", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div className="fade-up" style={{ marginBottom: "3.5rem" }}>
            <div className="section-label">Professional Experience</div>
            <span className="gold-rule" />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "oklch(0.22 0.04 220)" }}>
              Career History
            </h2>
          </div>

          <ExperienceCard
            company="Melissa M (Pty) Ltd"
            roles={[{ title: "Founder & Senior Marketing Operations Consultant", period: "October 2022 – Present", location: "South Africa / International" }]}
            description="Providing senior-level marketing operations, systems architecture, and commercial performance consulting to local and international organisations across digital marketing, media, and financial services environments. Engaged to strengthen operational governance, improve KPI visibility, implement scalable workflow systems, and align marketing execution with measurable revenue and retention outcomes. Established performance governance frameworks linking marketing activity to ROI and retention metrics; designed and launched fully customised Monday.com operational architecture from scratch, including automation, reporting dashboards, and task governance structures; standardised reporting frameworks to improve executive oversight and decision-making clarity; led operational change initiatives requiring team training, adoption management, and cross-functional alignment."
            engagements={["Contractor Click – Marketing Operations & Client Success Lead", "Fund It – Business Consultant & Account Manager", "Firetail Marketing – Senior Operations Manager", "AddMedia NYC – Head of Operations", "ADreach Group – Digital & Systems Consulting"]}
          />

          <ExperienceCard
            company="ADreach Group"
            roles={[
              { title: "Marketing Manager", period: "March 2018 – October 2022", location: "South Africa" },
              { title: "Marketing & Sales Coordinator", period: "October 2019 – October 2022", location: "Johannesburg" },
              { title: "Marketing Coordinator", period: "July 2016 – October 2019", location: "Johannesburg Area" },
            ]}
            description="Nine years of progressive marketing leadership within a national outdoor advertising network. As Marketing Manager, oversaw national marketing operations and campaign strategy across South Africa, managing annual budgets of R3–4 million aligned to commercial objectives, leading cross-functional campaign execution across traditional and digital channels, and coordinating the launch of digital out-of-home advertising products. Led the AMASA award-winning 'Beyond the River' campaign and full award submission process. Earlier roles included directing national marketing initiatives, streamlining internal workflows during organisational transition, and developing content and promotional materials that increased brand awareness and client engagement."
          />

          <ExperienceCard
            company="Fikelela"
            roles={[{ title: "Outdoor Media Marketing Consultant", period: "April 2013 – July 2016", location: "Sandton" }]}
            description="Advised clients on outdoor advertising solutions, specialising in street-pole ads and Supalites for small- and medium-sized businesses. Educated advertisers on cost-effective strategies to maximise reach and frequency while maintaining budget constraints. Provided exceptional client service, ensuring quick turnaround times on bookings and high customer satisfaction. Fikelela is the preferred media agency for the sale of ADreach street pole ads and Supalites across South Africa."
          />

          <ExperienceCard
            company="Nashua LTD"
            roles={[
              { title: "Sales Account Executive", period: "2012 – 2013", location: "Weltevredenpark" },
              { title: "Senior Sales Executive", period: "2011", location: "Randburg" },
            ]}
            description="Managed a portfolio of business accounts, developing client relationships and driving sales performance across Nashua's product range. Built foundational commercial skills in client management, needs analysis, and solution selling that underpin subsequent marketing leadership roles."
          />
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────────────────── */}
      <section id="skills" style={{ position: "relative", padding: "6rem 0", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${SKILLS_BG})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.35)" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,31,45,0.82)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div className="fade-up" style={{ marginBottom: "3.5rem" }}>
            <div className="section-label">Core Competencies</div>
            <span className="gold-rule" />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "white" }}>
              Skills & Expertise
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
            {/* Left: skill tags */}
            <div className="fade-up">
              <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.72 0.12 75)", marginBottom: "1.25rem" }}>
                Marketing & Operations
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                {["Marketing Operations Leadership", "Commercial Marketing Strategy", "National Campaign Management", "KPI Reporting & Executive Dashboards", "Budget Oversight & Allocation", "Digital & Traditional Media Integration", "Operational Governance Frameworks"].map((s) => (
                  <SkillTag key={s} label={s} icon={CheckCircle2} />
                ))}
              </div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.72 0.12 75)", marginBottom: "1.25rem" }}>
                Leadership & People
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {["Cross-Functional Team Leadership", "Customer Experience & Retention Strategy", "Performance Optimisation", "Operational Change Management", "Executive Stakeholder Presentations"].map((s) => (
                  <SkillTag key={s} label={s} icon={Users} />
                ))}
              </div>
            </div>
            {/* Right: tools & languages */}
            <div className="fade-up delay-200">
              <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.72 0.12 75)", marginBottom: "1.25rem" }}>
                Systems & Tools
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                {["Monday.com Architecture & Automation", "Workflow System Design", "Reporting Dashboard Development", "CRM & Client Lifecycle Systems", "Performance Governance Frameworks"].map((s) => (
                  <SkillTag key={s} label={s} icon={Workflow} />
                ))}
              </div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.72 0.12 75)", marginBottom: "1.25rem" }}>
                Languages
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                {[{ lang: "English", level: "Native / Bilingual" }, { lang: "Afrikaans", level: "Native / Bilingual" }].map((l) => (
                  <div key={l.lang} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "0.375rem", padding: "0.75rem 1.25rem" }}>
                    <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, color: "white", fontSize: "0.95rem" }}>{l.lang}</div>
                    <div style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", marginTop: "0.15rem" }}>{l.level}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.72 0.12 75)", marginBottom: "1.25rem" }}>
                Availability
              </div>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                {["Permanent", "Hybrid", "On-site", "Freelance / Contract"].map((a) => (
                  <span key={a} style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)", borderRadius: "2rem", padding: "0.35rem 1rem", fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "oklch(0.82 0.10 78)" }}>
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ──────────────────────────────────────────────────── */}
      <section id="education" style={{ background: "oklch(0.97 0.005 80)", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div className="fade-up" style={{ marginBottom: "3.5rem" }}>
            <div className="section-label">Education & Certifications</div>
            <span className="gold-rule" />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "oklch(0.22 0.04 220)" }}>
              Academic Background
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {[
              { institution: "Shaw Academy", qualification: "Online Marketing", year: "2015 – 2016", type: "Certification" },
              { institution: "POPIA for Everyone", qualification: "Data Protection Compliance", year: "Completed", type: "Certification" },
              { institution: "Wildlife Campus", qualification: "Certificate, Game Lodge Management", year: "2007", type: "Certificate" },
              { institution: "Randburg Hoer", qualification: "Matric Certificate", year: "2002 – 2006", type: "High School" },
            ].map((edu, i) => (
              <div key={i} className={`fade-up delay-${Math.min((i + 1) * 100, 400) as 100 | 200 | 300 | 400}`} style={{ background: "white", borderRadius: "0.5rem", padding: "1.75rem", boxShadow: "0 2px 16px rgba(30,61,79,0.07)", borderTop: "3px solid oklch(0.72 0.12 75)" }}>
                <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.72 0.12 75)", marginBottom: "0.5rem" }}>
                  {edu.type}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 700, color: "oklch(0.22 0.04 220)", marginBottom: "0.25rem" }}>
                  {edu.institution}
                </h3>
                <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.9rem", color: "oklch(0.35 0.03 220)", marginBottom: "0.5rem" }}>
                  {edu.qualification}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "oklch(0.52 0.02 220)", fontSize: "0.82rem" }}>
                  <Calendar size={12} /> {edu.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────────── */}
      <section id="contact" style={{ background: "oklch(0.22 0.04 220)", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div className="fade-up">
              <div className="section-label">Get In Touch</div>
              <span className="gold-rule" />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                Open to New Opportunities
              </h2>
              <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.85, marginBottom: "2.5rem" }}>
                Available for senior permanent roles, hybrid engagements, and freelance consulting in Marketing Operations, Commercial Marketing, Customer Experience, or Digital Transformation leadership. Based in Johannesburg with openness to remote and international work.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <a href="mailto:melissa.maarshall@gmail.com" style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none" }}>
                  <div style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.25)", borderRadius: "0.375rem", padding: "0.75rem", flexShrink: 0 }}>
                    <Mail size={20} style={{ color: "oklch(0.72 0.12 75)" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.2rem" }}>Email</div>
                    <div style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.9)" }}>melissa.maarshall@gmail.com</div>
                  </div>
                </a>
                <a href="https://linkedin.com/in/melissa-maarschalkerweerd-9b58b069" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none" }}>
                  <div style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.25)", borderRadius: "0.375rem", padding: "0.75rem", flexShrink: 0 }}>
                    <Linkedin size={20} style={{ color: "oklch(0.72 0.12 75)" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.2rem" }}>LinkedIn</div>
                    <div style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.9)" }}>melissa-maarschalkerweerd</div>
                  </div>
                </a>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.25)", borderRadius: "0.375rem", padding: "0.75rem", flexShrink: 0 }}>
                    <MapPin size={20} style={{ color: "oklch(0.72 0.12 75)" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.2rem" }}>Location</div>
                    <div style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.9)" }}>Johannesburg, Gauteng, South Africa</div>
                  </div>
                </div>
              </div>
            </div>
            {/* CTA card */}
            <div className="fade-up delay-200" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.75rem", padding: "3rem", backdropFilter: "blur(8px)" }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.75rem", fontWeight: 700, color: "white", marginBottom: "1rem" }}>
                Let's Work Together
              </h3>
              <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "2rem" }}>
                Whether you need a senior marketing operations leader to embed within your team, a consultant to architect your governance frameworks, or a freelance commercial marketing strategist — Melissa brings the experience and systems thinking to deliver results.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a href="mailto:melissa.maarshall@gmail.com" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.18 0.02 220)", background: "oklch(0.72 0.12 75)", padding: "1rem", borderRadius: "0.375rem", textDecoration: "none", transition: "background 0.2s" }}>
                  <Mail size={16} /> Send an Email
                </a>
                <a href="https://linkedin.com/in/melissa-maarschalkerweerd-9b58b069" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "white", background: "transparent", padding: "1rem", borderRadius: "0.375rem", textDecoration: "none", border: "1px solid rgba(255,255,255,0.25)" }}>
                  <Linkedin size={16} /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer style={{ background: "oklch(0.15 0.03 220)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "2rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>
            Melissa Maarschalkerweerd
          </div>
          <div style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.35)" }}>
            Senior Marketing Operations & Commercial Marketing Leader · Johannesburg, South Africa
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="mailto:melissa.maarshall@gmail.com" style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "oklch(0.72 0.12 75)")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
              <Mail size={18} />
            </a>
            <a href="https://linkedin.com/in/melissa-maarschalkerweerd-9b58b069" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "oklch(0.72 0.12 75)")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
