import { useEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import logoDashboard from "../assets/logo-dashboard.png";
import "./landing.css";

gsap.registerPlugin(ScrollTrigger);

/* ---------- Utils ---------- */

/** Kata sapaan loader — urutan sama seperti template Svelte (ID → daerah → dunia). */
const loaderWords = [
  "Selamat Datang.",
  "Wilujeng Sumping.",
  "Sugeng Rawuh.",
  "Welcome.",
];

function SippaLoader({ done, onDone }: { done: boolean; onDone: () => void }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    if (done) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  useEffect(() => {
    if (done) return;
    if (index < loaderWords.length - 1) {
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setIndex((i) => i + 1);
          setFade(true);
        }, 150);
      }, 300);
      return () => clearInterval(interval);
    }
    const timeout = setTimeout(() => {
      const el = loaderRef.current;
      if (el) {
        gsap.to(el, {
          scale: 0.5,
          y: -200,
          opacity: 0,
          duration: 1,
          ease: "power3.inOut",
          onComplete: () => onDoneRef.current(),
        });
      } else {
        onDoneRef.current();
      }
    }, 1200);
    return () => clearTimeout(timeout);
  }, [index, done]);

  if (done) return null;
  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99999] h-screen w-screen flex items-center justify-center bg-[#001B48] text-white text-3xl md:text-4xl font-bold px-6 text-center"
    >
      <span
        className={"transition-opacity duration-500 " + (fade ? "opacity-100" : "opacity-0")}
      >
        {loaderWords[index]}
      </span>
    </div>
  );
}

/** Kursor custom ala template (dot putih mix-blend-difference, membesar saat hover). */
function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;
    el.style.display = "block";
    gsap.set(el, { xPercent: -50, yPercent: -50 });
    let active = false;
    const xTo = gsap.quickTo(el, "x", { duration: 0.25, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.25, ease: "power3" });
    const move = (e: MouseEvent) => {
      if (!active) {
        active = true;
        gsap.to(el, { autoAlpha: 1, duration: 0.3 });
      }
      xTo(e.clientX);
      yTo(e.clientY);
    };
    const hover = () => {
      gsap.to(el, {
        scale: 3.5,
        backgroundColor: "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.5)",
        duration: 0.3,
        ease: "expo.out",
      });
    };
    const leave = () => {
      gsap.to(el, {
        scale: 1,
        backgroundColor: "#ffffff",
        border: "0px solid transparent",
        duration: 0.3,
        ease: "expo.out",
      });
    };
    const bindTargets = () => {
      document
        .querySelectorAll<HTMLElement>("a, button")
        .forEach((t) => {
          if (!t.dataset.cursorBound) {
            t.dataset.cursorBound = "true";
            t.addEventListener("mouseenter", hover);
            t.addEventListener("mouseleave", leave);
          }
        });
    };
    window.addEventListener("mousemove", move);
    bindTargets();
    const obs = new MutationObserver(bindTargets);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener("mousemove", move);
      obs.disconnect();
      document.querySelectorAll("a, button").forEach((t) => {
        t.removeEventListener("mouseenter", hover);
        t.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{ display: "none" }}
      className="fixed top-0 left-0 w-5 h-5 bg-white mix-blend-difference rounded-full pointer-events-none z-[999] opacity-0 invisible"
    />
  );
}

/** Observes .reveal inside the root and adds .in-view when scrolled into view. */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            const t0 = performance.now();
            const dur = 1800;
            const step = (now: number) => {
              const p = Math.min(1, (now - t0) / dur);
              const eased = 1 - Math.pow(2, -10 * p);
              el.textContent = Math.round(to * eased).toLocaleString("id-ID") + suffix;
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

/* ---------- Data ---------- */

const stats = [
  { label: "Provinsi", value: 38, suffix: "" },
  { label: "Kluster Produksi", value: 4, suffix: "" },
  { label: "Komoditas", value: 65, suffix: "+" },
  { label: "Periode Data", value: 2, suffix: " Tahun" },
];
/* FOTO TIM — diambil dari folder lokal `public/team/`.
   Taruh foto asli sebagai firdaus.jpg / seno.jpg / aldi.jpg / yayan.jpg di folder itu.
   Selama foto asli belum ada, otomatis fallback ke .svg placeholder di folder yang sama. */
function teamPhoto(jpg: string, fallbackSvg: string) {
  return {
    src: `${import.meta.env.BASE_URL}team/${jpg}`,
    fallback: `${import.meta.env.BASE_URL}team/${fallbackSvg}`,
  };
}
const teamMembers = [
  {
    name: "Muhammad Firdaus Annafiah",
    role: "Data Engineer",
    meta: "NPM 2310631170033",
    desc: "Mengelola pipeline data produksi pertanian, memastikan data bersih, konsisten, dan siap untuk analisis kluster K-Means.",
    photo: teamPhoto("Firdaus.jpeg"),
  },
  {
    name: "Zaldy Seno Yudhanto",
    role: "Ml Engineer",
    meta: "NPM 2310631170123",
    desc: "Mengembangkan model machine learning untuk analisis kluster produksi pertanian.",
    photo: teamPhoto("seno.jpeg"),
  },
  {
    name: "Aldi Wijaya",
    role: "Backend Developer",
    meta: "NPM 2410631170004",
    desc: "Mengembangkan dan merawat infrastruktur backend untuk mendukung aplikasi SIPPA.",
    photo: teamPhoto("aldi.jpg"),
  },
  {
    name: "Yayan Mulyana",
    role: "Frontend Developer",
    meta: "NPM 2310631170057",
    desc: "Mengembangkan dashboard SIPPA dengan fokus pada pengalaman pengguna dan visualisasi data yang interaktif.",
    photo: teamPhoto("yayan.jpeg"),
  },
];

const features = [
  {
    title: "Peta Sebaran Kluster",
    desc: "Peta interaktif Indonesia yang mewarnai tiap provinsi sesuai kluster produksi, lengkap dengan detail total produksi per komoditas saat provinsi dipilih.",
    icon: "M2 4.5L6.5 2.5l5 3L16 3v9l-4.5 2-5-3L2 13V4.5zM6.5 2.5v11M11.5 5.5v11",
  },
  {
    title: "Profil Kluster",
    desc: "Karakteristik mendalam per kluster: komoditas dominan, medan produksi, kontribusi nasional, dan radar komoditas median untuk tiap kelompok provinsi.",
    icon: "M2 7l10 5 10-5-10-5L2 7zm0 10l10 5 10-5M2 12l10 5 10-5",
  },
  {
    title: "Evaluasi Model",
    desc: "Metrik kualitas clustering K-Means: silhouette score, inertia, dan Davies-Bouldin index beserta proyeksi PCA untuk memilih jumlah kluster terbaik.",
    icon: "M13 10V3L4 14h7v8l9-11h-7z",
  },
];

const pages = [
  { id: "01", name: "Overview", cat: "Ringkasan Statistik" },
  { id: "02", name: "Peta Sebaran Kluster", cat: "Peta Interaktif Indonesia" },
  { id: "03", name: "Profil Kluster", cat: "Analisis Karakteristik" },
  { id: "04", name: "Detail Provinsi", cat: "Produksi per Komoditas" },
  { id: "05", name: "Evaluasi Model", cat: "Kualitas K-Means" },
];

const testimonials = [
  {
    name: "Perencana Regional",
    role: "Dinas Pertanian",
    text: "Lihat kluster mana yang unggul di tiap komoditas dan bandingkan kinerja antarprovinsi secara langsung dalam satu peta interaktif.",
  },
  {
    name: "Analis Data",
    role: "Evaluasi Model",
    text: "Validasi kualitas klustering via metrik silhouette score dan Davies-Bouldin untuk memastikan pembagian kelompok benar-benar bermakna.",
  },
  {
    name: "Peneliti Agronomi",
    role: "Profil Komoditas",
    text: "Telusuri detail produksi per komoditas pada setiap provinsi dan pahami karakter wilayah lewat profil kluster yang kaya informasi.",
  },
];

const marquee = [
  "Padi", "Jagung", "Kedelai", "K-Means", "PCA", "Kluster",
  "Silhouette", "Provinsi", "Produksi", "Hortikultura", "Komoditas", "Agrobisnis",
];

const faqs = [
  {
    q: "Apa itu SIPPA?",
    a: "SIPPA (Sistem Informasi Pemetaan Produksi Pertanian) adalah dashboard interaktif yang memetakan dan mengelompokkan produksi pertanian tanaman pangan Indonesia menggunakan algoritma K-Means.",
  },
  {
    q: "Metode statistik apa yang digunakan?",
    a: "Data 38 provinsi dan 65 komoditas dikelompokkan dengan K-Means. Kualitas klustering dievaluasi lewat silhouette score, inertia, dan Davies-Bouldin index, serta divisualisasikan dengan proyeksi PCA.",
  },
  {
    q: "Berapa jumlah kluster pada dashboard?",
    a: "Berdasarkan evaluasi model, jumlah kluster terbaik (K) yang dipilih adalah 4: Produksi Sangat Tinggi, Produksi Tinggi, Produksi Menengah, dan Produksi Relatif Rendah.",
  },
  {
    q: "Halaman apa saja yang tersedia di dashboard?",
    a: "Dashboard terdiri dari lima halaman: Overview, Peta Sebaran Kluster, Profil Kluster, Detail Provinsi, dan Evaluasi Model. Anda dapat memilih tahun data (2024–2026) pada header.",
  },
];

const nav = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#tentang" },
  { label: "Fitur", href: "#fitur" },
  { label: "Halaman", href: "#halaman" },
  { label: "Tim", href: "#tim" },
  { label: "FAQ", href: "#faq" },
];

function scrollToId(id: string) {
  const el = document.querySelector(id);
  if (!el) return;
  if ((window as unknown as { __lenis?: { scrollTo: (t: Element, o?: object) => void } }).__lenis) {
    (window as unknown as { __lenis: { scrollTo: (t: Element, o?: object) => void } }).__lenis.scrollTo(el, { offset: -80 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span
      className="text-[11px] font-semibold uppercase tracking-[0.3em]"
      style={{ color: "rgba(151,202,219,0.62)" }}
    >
      {children}
    </span>
  );
}

function FeatureCard({ feat, i }: { feat: (typeof features)[number]; i: number }) {
  return (
    <div className="feature-card p-8 flex flex-col justify-between min-h-[280px]">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-bold text-white/30">0{i + 1}</span>
        <svg className="w-8 h-8 text-[#3FBDEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feat.icon} />
        </svg>
      </div>
      <div>
        <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-3">{feat.title}</h3>
        <p className="text-sm leading-relaxed text-[#97CADB]">{feat.desc}</p>
      </div>
    </div>
  );
}

function PageRow({ p, onEnter }: { p: (typeof pages)[number]; onEnter: () => void }) {
  return (
    <a
      href="#overview"
      onClick={(e) => { e.preventDefault(); onEnter(); }}
      className="page-row group flex items-center gap-6 px-2 py-8 cursor-pointer block"
    >
      <span className="text-sm font-mono text-white/30 w-10 shrink-0">{p.id}</span>
      <span className="flex-1">
        <span className="page-row-title block text-3xl lg:text-5xl font-bold text-white/70">{p.name}</span>
      </span>
      <span className="hidden md:block text-base font-light text-white/45 w-1/3 text-right">{p.cat}</span>
    </a>
  );
}

export default function LandingPage({ onEnter }: { onEnter: () => void }) {
  const rootRef = useReveal<HTMLDivElement>();
  const [menuOpen, setMenuOpen] = useState(false);
  const [testi, setTesti] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [loading, setLoading] = useState(true);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroWordRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const heroDescRef = useRef<HTMLParagraphElement>(null);
  const heroCtaRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const manifestoRef = useRef<HTMLParagraphElement>(null);
  const featureGridRef = useRef<HTMLDivElement>(null);
  const teamGridRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const testiQuoteRef = useRef<HTMLParagraphElement>(null);
  const testiNameRef = useRef<HTMLDivElement>(null);

  const goToTesti = (index: number) => {
    if (index === testi) return;
    const q = testiQuoteRef.current;
    const n = testiNameRef.current;
    if (!q || !n) {
      setTesti(index);
      return;
    }
    gsap.to([q, n], {
      autoAlpha: 0,
      y: 10,
      duration: 0.5,
      ease: "power2.inOut",
      overwrite: "auto",
      onComplete: () => {
        setTesti(index);
        requestAnimationFrame(() => {
          gsap.fromTo(
            [testiQuoteRef.current, testiNameRef.current],
            { autoAlpha: 0, y: -10 },
            { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out", overwrite: "auto" },
          );
        });
      },
    });
  };

  useEffect(() => {
    const t = setInterval(() => goToTesti((testi + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, [testi]);

  /* Lenis smooth scroll ala template (desktop) */
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (reduce || touch) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    (window as unknown as { __lenis?: unknown }).__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      delete (window as unknown as { __lenis?: unknown }).__lenis;
    };
  }, []);

  /* Header intro — melebar dari 0px seperti template Svelte */
  useEffect(() => {
    if (loading || !headerRef.current) return;
    const el = headerRef.current;
    const ctx = gsap.context(() => {
      gsap.set(el, { width: "0px", opacity: 0, overflow: "hidden" });
      gsap.to(el, {
        width: "min(calc(100% - 2rem), 1040px)",
        opacity: 1,
        duration: 1.2,
        ease: "expo.inOut",
        clearProps: "width,overflow",
      });
    }, rootRef);
    return () => ctx.revert();
  }, [loading, rootRef]);

  /* Hero intro timeline + parallax mouse */
  useEffect(() => {
    if (loading) return;
    const words = heroWordRefs.current.filter(Boolean) as HTMLSpanElement[];
    const ctx = gsap.context(() => {
      gsap.set(heroBgRef.current, { autoAlpha: 0, scale: 1.05 });
      gsap.set(words, { yPercent: 120, rotate: 2 });
      gsap.set([heroDescRef.current, heroCtaRef.current], { y: 20, autoAlpha: 0 });
      const tl = gsap.timeline({ delay: 0.2 });
      tl.to(heroBgRef.current, { autoAlpha: 1, scale: 1, duration: 2.5, ease: "power2.out" })
        .to(words, { yPercent: 0, rotate: 0, duration: 1.4, stagger: 0.1, ease: "expo.out" }, "-=1.5")
        .to(heroDescRef.current, { y: 0, autoAlpha: 1, duration: 1.2, ease: "power3.out" }, "-=1.0")
        .to(heroCtaRef.current, { y: 0, autoAlpha: 1, duration: 1.2, ease: "power3.out" }, "-=1.0");
    }, rootRef);
    const move = (e: MouseEvent) => {
      if (window.innerWidth <= 768) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(heroBgRef.current, { x: -x, y: -y, duration: 2, ease: "power2.out" });
      gsap.to(words, { x, y, duration: 1.5, ease: "power2.out", stagger: 0.01, overwrite: "auto" });
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      ctx.revert();
    };
  }, [loading, rootRef]);

  /* Manifesto scrub — kata berubah redup → putih saat scroll */
  useEffect(() => {
    if (loading || !manifestoRef.current) return;
    const ctx = gsap.context(() => {
      const spans = manifestoRef.current!.querySelectorAll(".word");
      gsap.to(spans, {
        color: "rgba(255,255,255,1)",
        stagger: 0.1,
        ease: "none",
        scrollTrigger: { trigger: manifestoRef.current, start: "top 80%", end: "bottom 50%", scrub: 1 },
      });
    }, rootRef);
    return () => ctx.revert();
  }, [loading, rootRef]);

  /* Kartu fitur — fade-up stagger via ScrollTrigger */
  useEffect(() => {
    if (loading || !featureGridRef.current) return;
    const ctx = gsap.context(() => {
      const cards = featureGridRef.current!.querySelectorAll(".feature-card");
      gsap.fromTo(
        cards,
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: { trigger: featureGridRef.current, start: "top 80%" },
        },
      );
    }, rootRef);
    return () => ctx.revert();
  }, [loading, rootRef]);

  /* Marquee — loop linear tak berujung ala template */
  useEffect(() => {
    if (loading || !marqueeRef.current) return;
    const tween = gsap.to(marqueeRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: "none",
    });
    return () => {
      tween.kill();
    };
  }, [loading]);

  /* Kartu tim — judul + kartu masuk stagger, foto parallax + tilt 3D saat hover */
  useEffect(() => {
    if (loading || !teamGridRef.current) return;
    const grid = teamGridRef.current;
    const ctx = gsap.context(() => {
      const cards = grid.querySelectorAll(".team-card");
      gsap.fromTo(
        cards,
        { y: 90, autoAlpha: 0, rotateX: 10, scale: 0.94 },
        {
          y: 0,
          autoAlpha: 1,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.14,
          ease: "expo.out",
          clearProps: "transform",
          scrollTrigger: { trigger: grid, start: "top 82%" },
        },
      );
      cards.forEach((card) => {
        const photo = card.querySelector(".team-photo");
        if (photo) {
          gsap.fromTo(
            photo,
            { yPercent: -7 },
            {
              yPercent: 7,
              ease: "none",
              scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        }
      });
    }, rootRef);
    const cards = Array.from(grid.querySelectorAll<HTMLElement>(".team-card"));
    const cleanups = cards.map((card) => {
      const tilt = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -10;
        const ry = ((e.clientX - r.left) / r.width - 0.5) * 10;
        gsap.to(card, { rotateX: rx, rotateY: ry, y: -8, scale: 1.02, duration: 0.5, ease: "power3.out", transformPerspective: 900, overwrite: "auto" });
      };
      const reset = () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, y: 0, scale: 1, duration: 0.7, ease: "expo.out", overwrite: "auto" });
      };
      card.addEventListener("mousemove", tilt);
      card.addEventListener("mouseleave", reset);
      return () => {
        card.removeEventListener("mousemove", tilt);
        card.removeEventListener("mouseleave", reset);
      };
    });
    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, [loading, rootRef]);

  return (
    <div className="landing-root min-h-screen relative" ref={rootRef}>
      <CustomCursor />
      <SippaLoader done={!loading} onDone={() => setLoading(false)} />
      {/* Header */}
      <header className="landing-header" ref={headerRef} style={loading ? { opacity: 0 } : undefined}>
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToId("#home"); }}
          className="flex items-center"
        >
          <img src={logoDashboard} alt="SIPPA" className="h-9 w-auto object-contain" draggable={false} />
        </a>

        <nav className="landing-nav hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToId(n.href); }}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onEnter}
            className="lp-btn hidden md:inline-block text-sm font-semibold bg-[#018ABE] hover:bg-[#3FBDEB] text-white px-6 py-2 rounded-full"
          >
            Buka Dashboard
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-white/80 hover:bg-white/10"
            aria-label="menu"
          >
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M3 5h14M3 10h14M3 15h14" strokeWidth={1.5} strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#00142E]/95 backdrop-blur-xl flex flex-col justify-center px-10 md:hidden">
          <div className="flex flex-col gap-8">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToId(n.href); }}
                className="text-3xl font-light text-white/85 hover:text-white"
              >
                {n.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); onEnter(); }}
              className="mt-6 w-fit text-xl font-semibold bg-[#018ABE] hover:bg-[#3FBDEB] text-white px-7 py-3 rounded-full"
            >
              Buka Dashboard
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section
        id="home"
        className="landing-hero relative flex min-h-screen flex-col items-center justify-center text-center px-4 pt-24 pb-12 overflow-hidden"
      >
        <div ref={heroBgRef} className="absolute inset-0 z-0 pointer-events-none will-change-transform" aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#97CADB] mb-6">
            SIPPA
          </span>
          <h1 className="text-[14vw] md:text-[8vw] font-bold leading-[0.95] tracking-tight">
            <span className="block overflow-hidden pb-2 -mb-2">
              <span ref={(el) => { heroWordRefs.current[0] = el; }} className="block will-change-transform">Pemetaan</span>
            </span>
            <span className="block overflow-hidden pb-3 -mb-3">
              <span ref={(el) => { heroWordRefs.current[1] = el; }} className="block italic text-[#3FBDEB] will-change-transform">
                Produksi Pertanian.
              </span>
            </span>
          </h1>
          <p ref={heroDescRef} className="text-lg md:text-xl text-[#97CADB] max-w-3xl mt-6 mb-8 font-light leading-relaxed">
            Sistem Informasi Pemetaan Produksi Pertanian visualisasi kluster pertanian
            tanaman pangan Indonesia dari pemodelan K-Means.
          </p>
          <div ref={heroCtaRef} className="flex gap-4">
            <button
              onClick={onEnter}
              className="lp-btn px-8 py-4 bg-[#018ABE] hover:bg-[#3FBDEB] text-white rounded-full font-semibold shadow-[0_0_40px_rgba(1,138,190,0.35)]"
            >
              Buka Dashboard
            </button>
            <a
              href="#fitur"
              onClick={(e) => { e.preventDefault(); scrollToId("#fitur"); }}
              className="hidden md:inline-block px-8 py-4 rounded-full border border-[#97CADB]/40 text-white font-medium hover:bg-[#018ABE] hover:border-[#018ABE]"
            >
              Lihat Fitur
            </a>
          </div>
        </div>
      </section>
{/* Marquee */}
      <section className="border-t border-white/5 py-14 overflow-hidden" aria-hidden="true">
        <div className="whitespace-nowrap overflow-hidden">
          <div ref={marqueeRef} className="flex w-fit whitespace-nowrap will-change-transform">
            <div className="flex text-2xl md:text-4xl font-bold text-white/30">
              {[...marquee, ...marquee].map((w, i) => (
                <span key={i} className="mx-6 md:mx-10 inline-block select-none">
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
{/* Tentang */}
      <section id="tentang" className="border-t border-white/5 py-24 md:py-36 px-6 md:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel>Tentang SIPPA</SectionLabel>
          <p ref={manifestoRef} className="mt-8 text-2xl md:text-4xl leading-snug font-light flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"SIPPA menghadirkan pemetaan produksi pertanian Indonesia dalam satu dashboard interaktif. Dengan pemodelan K-Means, kami mengelompokkan setiap provinsi berdasarkan karakteristik produksi tanaman pangan untuk membantu pengambilan keputusan yang lebih tepat dan berbasis data.".split(" ").map((w, i) => (
              <span key={i} className="word text-white/10 pointer-events-none">{w}</span>
            ))}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-white/5 py-16 md:py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="reveal">
              <div className="text-4xl md:text-6xl font-bold text-white">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#97CADB] mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fitur */}
      <section id="fitur" className="border-t border-white/5 py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Fitur Utama Dashboard</SectionLabel>
            <h2 className="reveal text-4xl md:text-6xl font-bold mt-6">
              Fitur yang <span className="italic text-[#3FBDEB]">nyata</span> membantu
            </h2>
          </div>
          <div ref={featureGridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={f.title} feat={f} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Halaman */}
      <section id="halaman" className="border-t border-white/5 py-24 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="reveal text-4xl md:text-7xl font-bold leading-tight">
              Halaman<br /><span className="italic text-[#3FBDEB]">Dashboard.</span>
            </h2>
            <p className="text-[#97CADB] font-light max-w-sm text-lg">
              Jelajahi lima halaman utama dashboard. Klik untuk membuka dashboard.
            </p>
          </div>
          <div>
            {pages.map((p) => (
              <PageRow key={p.id} p={p} onEnter={onEnter} />
            ))}
          </div>
        </div>
      </section>
{/* Cara menggunakan */}
      <section id="cara" className="border-t border-white/5 py-24 md:py-36 px-6 md:px-12 text-center">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Cara Menggunakan</SectionLabel>
          <div className="mt-10 relative">
            <p ref={testiQuoteRef} className="text-2xl md:text-4xl leading-[1.3] text-white/90 font-light will-change-transform">
              "{testimonials[testi].text}"
            </p>
            <div ref={testiNameRef} className="mt-8 will-change-transform">
              <h4 className="text-sm font-semibold uppercase tracking-widest">{testimonials[testi].name}</h4>
              <span className="text-sm text-[#97CADB]">{testimonials[testi].role}</span>
            </div>
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToTesti(idx)}
                  className={"w-2 h-2 rounded-full transition-all " + (idx === testi ? "bg-white scale-125" : "bg-white/25")}
                  aria-label={"slide " + (idx + 1)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="tim" className="border-t border-white/5 py-24 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <SectionLabel>Our Team</SectionLabel>
          <h2 className="reveal text-4xl md:text-6xl font-bold mt-6">
            Tim di balik <span className="italic text-[#3FBDEB]">SIPPA</span>
          </h2>
          <p className="reveal text-white/60 font-light mt-6 max-w-2xl mx-auto">
            Empat orang dengan peran berbeda dari pengolahan data hingga
            antarmuka yang membangun sistem ini bersama.
          </p>
          <div ref={teamGridRef} className="team-grid mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {teamMembers.map((m) => (
              <article key={m.name} className="team-card group p-0 overflow-hidden">
                <div className="team-photo-wrap relative overflow-hidden">
                  <img
                    src={m.photo.src}
                    alt={m.name}
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (img.src !== m.photo.fallback) img.src = m.photo.fallback;
                    }}
                    className="team-photo h-80 w-full object-cover"
                  />
                  <div className="team-photo-shade" aria-hidden="true" />
                  <span className="team-photo-role">{m.role}</span>
                </div>
                <div className="p-6 flex flex-col gap-1.5">
                  <h3 className="text-xl font-bold">{m.name}</h3>
                  <p className="text-xs text-white/40 tracking-wide">{m.meta}</p>
                  <p className="text-sm text-white/60 font-light leading-relaxed mt-1">{m.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/5 pt-24 md:pt-32 pb-12 md:pb-16 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-14">
          <div className="w-full md:w-1/3">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              Sering<br /><span className="italic text-[#3FBDEB]">Ditanyakan</span>
            </h2>
            <p className="text-white/60 font-light mt-6">
              Jawaban atas pertanyaan umum seputar sistem, sumber data, dan cara menjelajahi dashboard.
            </p>
          </div>
          <div className="w-full md:w-2/3">
            {faqs.map((f, idx) => (
              <div key={f.q} className={"faq-item p-6 " + (openFaq === idx ? "open" : "")}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center text-left cursor-pointer"
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-xl md:text-2xl font-medium text-white/85">{f.q}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-[#3FBDEB]">
                    {openFaq === idx ? "\u2212" : "\u002B"}
                  </span>
                </button>
                <div className="faq-answer">
                  <p className="text-lg text-white/55 font-light leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="border-t border-white/10 pt-6 pb-8 px-6 md:px-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[400px] bg-[#018ABE] opacity-[0.06] blur-[200px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 pt-4 text-[#97CADB]">
            <p className="text-sm">&copy; 2026 SIPPA Sistem Informasi Pemetaan Produksi Pertanian.</p>
            <div className="flex gap-6 text-xs text-white/40">
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); scrollToId("#home"); }}
                className="hover:text-white transition-colors"
              >
                Kembali ke atas
              </a>
              <button onClick={onEnter} className="hover:text-white transition-colors cursor-pointer">
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}