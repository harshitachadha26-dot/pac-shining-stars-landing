import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { IntelligenceWheel } from "@/components/IntelligenceWheel";
import logoAsset from "@/assets/pac-logo.asset.json";
import founderAsset from "@/assets/founder-bijal.asset.json";
import galleryClassroom from "@/assets/gallery-classroom.jpg";
import galleryArt from "@/assets/gallery-art.jpg";
import galleryStage from "@/assets/gallery-stage.jpg";
import galleryDance from "@/assets/gallery-dance.jpg";
import galleryLibrary from "@/assets/gallery-library.jpg";
import galleryMusic from "@/assets/gallery-music.jpg";

const SITE_TITLE =
  "PAC Preschool & MIA Centre, Mulund | Multiple Intelligence Early Learning";
const SITE_DESC =
  "21 years of nurturing young minds in Mulund. PAC offers Preschool admissions and the Multiple Intelligence Activity (MIA) Program based on Howard Gardner's 8-intelligence approach.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "keywords", content: "PAC Mulund, preschool Mulund, MIA program, multiple intelligence, day care Mulund, Bijal Gutka, early learning Mumbai" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Preschool",
          name: "PAC Preschool & MIA Centre",
          description: SITE_DESC,
          url: "/",
          telephone: "+91-9967-555-555",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mulund",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          founder: {
            "@type": "Person",
            name: "Bijal Gutka (Bijal Chandaria)",
            jobTitle: "Founder & Director",
          },
          foundingDate: "2004",
          sameAs: [
            "https://tr.ee/eVM_nwdCAQ",
            "https://tr.ee/b9EkS2Zuav",
            "https://tr.ee/umjQ5_HL-l",
          ],
        }),
      },
    ],
  }),
  component: PacLanding,
});

const PHONE = "+919967555555";
const WHATSAPP = "919967555555";

function PacLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <HeroSection />
        <FounderSection />
        <ProblemSection />
        <DifferenceSection />
        <PreschoolSection />
        <MiaSection />
        <ProcessSection />
        <GallerySection />
        <WhyChooseSection />
        <TestimonialsSection />
        <EnquirySection />
        <FaqSection />
      </main>
      <Footer />
      <StickyMobileCta />
      <WhatsAppFloat />
    </div>
  );
}

/* ------------------- NAV ------------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#preschool", label: "Preschool" },
    { href: "#mia", label: "MIA Program" },
    { href: "#process", label: "How It Works" },
    { href: "#gallery", label: "Campus" },
    { href: "#faq", label: "FAQs" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-pac flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logoAsset.url} alt="PAC Mulund logo" className="h-10 w-10 md:h-12 md:w-12" />
          <div className="hidden sm:block">
            <div className="font-display text-lg leading-none font-bold text-primary">PAC</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Mulund · Since 2004</div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#enquiry"
            className="hidden rounded-full bg-primary-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow md:inline-flex"
          >
            Book a Visit
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card lg:hidden"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-pac flex flex-col py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#enquiry"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-primary-gradient px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Book a Visit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------- HERO ------------------- */
function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-gradient pb-20 pt-28 md:pb-28 md:pt-36">
      {/* floating illustrations */}
      <FloatingShapes />
      <div className="container-pac relative">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" /> Admissions Open · Mulund
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[68px]">
              Helping Children Discover{" "}
              <span className="text-gradient-brand">Where They Naturally Shine</span>, Through India's 8-Intelligence Approach
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              21 years of helping children in Mulund grow in confidence, creativity, movement, expression, and academics through India's Multiple Intelligence approach to early learning.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-foreground/80">
              Preschool admissions and Multiple Intelligence Activity (MIA) Program enrolments now open.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#enquiry"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-2px]"
              >
                Explore Preschool Admission
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#mia"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card/70 px-7 py-3.5 text-sm font-semibold text-primary backdrop-blur transition hover:bg-card"
              >
                Explore MIA Activity Program
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto mt-14 max-w-5xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary-gradient opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/40 bg-black shadow-glow">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/NsXEC0vy1kQ?rel=0"
                  title="A Day in the Life at PAC – Sneak Peek Into PAC Preschool and Activity Centre Mulund – children learning through play-way Multiple Intelligence method"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              ▶ A Day in the Life at PAC – Sneak Peek Into PAC
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["21+", "Years in Mulund"],
              ["8", "Intelligences"],
              ["10–12", "MIA Activities"],
              ["1000s", "Happy Families"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-border bg-card/70 p-4 text-center backdrop-blur">
                <div className="font-display text-2xl font-bold text-primary sm:text-3xl">{n}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-float-slow absolute left-[6%] top-[18%] grid h-16 w-16 place-items-center rounded-3xl bg-sunshine/70 text-3xl shadow-soft">🎨</div>
      <div className="animate-float-slower absolute right-[8%] top-[14%] grid h-16 w-16 place-items-center rounded-full bg-leaf/60 text-3xl shadow-soft">🌿</div>
      <div className="animate-float-slow absolute left-[10%] top-[60%] grid h-14 w-14 place-items-center rounded-2xl bg-coral/70 text-2xl shadow-soft">🎵</div>
      <div className="animate-float-slower absolute right-[6%] top-[58%] grid h-14 w-14 place-items-center rounded-3xl bg-sky text-2xl shadow-soft">📚</div>
      <div className="animate-float-slow absolute right-[14%] top-[80%] hidden h-12 w-12 place-items-center rounded-full bg-blush text-2xl shadow-soft md:grid">⭐</div>
    </div>
  );
}

/* ------------------- FOUNDER ------------------- */
function FounderSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-pac">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-[2rem] bg-warm-gradient opacity-30 md:block" />
              <img
                src={founderAsset.url}
                alt="Bijal Gutka (Bijal Chandaria), Founder & Director, PAC Preschool Mulund"
                loading="lazy"
                width={840}
                height={1120}
                className="relative aspect-[3/4] w-full rounded-[2rem] object-cover shadow-card"
              />
              <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-card p-4 text-center shadow-glow">
                <div className="font-display text-lg font-semibold text-primary">Bijal Gutka</div>
                <div className="text-xs text-muted-foreground">(Bijal Chandaria) · Founder & Director, PAC</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">
                Hear From Our Founder
              </span>
              <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
                Meet Bijal Gutka <span className="text-muted-foreground">(Bijal Chandaria)</span>
              </h2>
              <p className="mt-2 text-sm font-medium text-primary">
                Founder & Director, PAC – Potential Activity Centre
              </p>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  For over three decades, I have had the privilege of working with children and witnessing something remarkable—every child is gifted, but not every child learns, expresses, or shines in the same way.
                </p>
                <p>
                  When I founded PAC in 2004, my vision was simple: create a place where children are not measured only by academics, but are given the freedom to explore, discover, and develop their unique strengths. This vision led us to embrace the Multiple Intelligence approach, helping children grow through movement, creativity, language, music, social connection, logical thinking, self-awareness, and real-world experiences.
                </p>
                <p>
                  At PAC, we believe childhood should be filled with curiosity, confidence, joy, and meaningful learning. Every classroom, activity, and interaction is designed to help children feel safe, valued, and inspired to become the best version of themselves.
                </p>
                <p>
                  For the past 21 years, it has been our privilege to partner with families in Mulund and guide thousands of children on their early learning journey. We look forward to welcoming your child into the PAC family and helping them discover where they naturally shine.
                </p>
              </div>
              <blockquote className="mt-6 rounded-2xl border-l-4 border-coral bg-cream/60 p-5 font-display text-lg italic text-foreground">
                "Every child has a unique potential. Our role is not to shape who they should become, but to help them discover who they already are."
                <footer className="mt-2 text-sm not-italic text-muted-foreground">
                  — Bijal Gutka (Bijal Chandaria), Founder & Director, PAC
                </footer>
              </blockquote>
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                {[
                  "30+ Years in Early Childhood Education",
                  "Founded PAC in 2004",
                  "21 Years of Nurturing Young Minds in Mulund ✨",
                ].map((t) => (
                  <span key={t} className="rounded-full border border-border bg-card px-3 py-1.5 font-medium text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------- PROBLEM ------------------- */
function ProblemSection() {
  const cards = [
    {
      icon: "🔍",
      title: "What is my child actually good at?",
      body: "You see your child's personality forming, but with so many academic boxes to tick, it's hard to know where their natural spark really is.",
      color: "bg-blush/50",
    },
    {
      icon: "💸",
      title: "What if I choose the wrong class?",
      body: "Many parents keep shifting between preschools and activity classes hoping one will finally fit — losing time, money, and the child's interest.",
      color: "bg-sunshine/40",
    },
    {
      icon: "📚",
      title: "Not too academic — but not random play either",
      body: "You don't want your child pushed into academics too early, and you don't want directionless play. You want structure and purpose.",
      color: "bg-sky/60",
    },
    {
      icon: "🎤",
      title: "Confident, expressive & active — not just exam-ready",
      body: "Marks matter. But so does the ability to speak up, perform, connect, and feel proud of who they are.",
      color: "bg-leaf/40",
    },
  ];
  return (
    <section className="bg-cream/40 py-20 md:py-28">
      <div className="container-pac">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">The Parent Dilemma</span>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
              Every Parent Asks the Same Questions. <span className="text-gradient-brand">You're Not Alone.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Every preschool says "holistic." Every activity class says "all-round development." But how do you actually know what's right for your child?
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article className={`group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:shadow-card`}>
                <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${c.color} blur-2xl transition group-hover:scale-125`} />
                <div className="relative">
                  <div className={`grid h-14 w-14 place-items-center rounded-2xl ${c.color} text-2xl`}>{c.icon}</div>
                  <h3 className="mt-5 font-display text-xl text-foreground sm:text-2xl">{c.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- DIFFERENCE ------------------- */
function DifferenceSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-pac">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">The PAC Difference</span>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
              Built on Howard Gardner's <span className="text-gradient-brand">Multiple Intelligence Theory</span> — Not Guesswork
            </h2>
            <p className="mt-5 text-muted-foreground">
              Every child is intelligent in a different way — through language, music, movement, art, logic, social connection, self-awareness, or nature.
            </p>
            <p className="mt-3 text-muted-foreground">
              At PAC, both our Preschool and Multiple Intelligence Activity (MIA) Program are designed around this philosophy. Instead of measuring children only through reading, writing, and numbers, PAC gives structured exposure across all 8 intelligence areas so parents can discover where their child naturally shines.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-14 rounded-[2rem] border border-border bg-card p-6 shadow-card sm:p-10 md:p-14">
            <IntelligenceWheel />
          </div>
        </Reveal>
        <div className="mt-10 text-center">
          <a href="#process" className="inline-flex items-center gap-2 rounded-full bg-primary-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow">
            See How It Works →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------- PRESCHOOL ------------------- */
function PreschoolSection() {
  const features = [
    { icon: "🧠", title: "8-Intelligence Early Learning Curriculum", desc: "Daily exposure across all eight intelligence areas — not just literacy & numeracy." },
    { icon: "🛠️", title: "80% Practical, 20% Worksheets", desc: "Hands-on learning with real materials, real conversations, real discovery." },
    { icon: "🎤", title: "Confidence & Communication First", desc: "Daily speaking, presenting, and expression opportunities for every child." },
    { icon: "🏛️", title: "Purpose-Built Learning Spaces", desc: "Dedicated zones for art, music, movement, library, drama and nature play." },
    { icon: "🚌", title: "15–18 Field Trips a Year", desc: "Real-world learning beyond classroom walls — community, nature, culture." },
  ];
  return (
    <section id="preschool" className="bg-sky/30 py-20 md:py-28">
      <div className="container-pac">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">PAC Preschool</span>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
              PAC 8-Intelligence Preschool — <span className="text-gradient-brand">Mulund's Whole-Child Early Learning Program</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              More than school readiness — give your child the early foundation to think, speak, move, express, connect, and discover where they naturally shine.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-gradient text-2xl text-primary-foreground shadow-soft">{f.icon}</div>
                <h3 className="mt-5 font-display text-xl text-foreground">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#enquiry" className="inline-flex items-center gap-2 rounded-full bg-primary-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-2px]">
            Enquire About Preschool Admission →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------- MIA ------------------- */
function MiaSection() {
  const features = [
    { icon: "🏟️", title: "10–12 Activities, One Campus", desc: "Sports, art, music, languages, rhythm, movement & performance — all under one roof." },
    { icon: "⏱️", title: "4 Activities a Day, 30 Minutes Each", desc: "Short, focused sessions that hold attention and build mastery." },
    { icon: "🧸", title: "Play-Way Learning Method", desc: "Children explore through games and joyful play — never forced drills." },
    { icon: "🎭", title: "Real Stage Experience", desc: "Performance opportunities that build confidence on stage and in life." },
    { icon: "📈", title: "Progress Reports for Parents", desc: "Clear direction on where your child is shining and what to nurture next." },
  ];
  return (
    <section id="mia" className="py-20 md:py-28">
      <div className="container-pac">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">MIA Program</span>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
              PAC Multiple Intelligence Activity (MIA) — <span className="text-gradient-brand">10–12 Activities Under One Roof</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Help your child explore sports, art, music, languages, rhythm, movement and performance under one roof.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-warm-gradient text-2xl text-coral-foreground shadow-soft">{f.icon}</div>
                <h3 className="mt-5 font-display text-xl text-foreground">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#enquiry" className="inline-flex items-center gap-2 rounded-full bg-warm-gradient px-7 py-3.5 text-sm font-semibold text-coral-foreground shadow-glow transition hover:translate-y-[-2px]">
            Enquire About MIA Program →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------- PROCESS ------------------- */
function ProcessSection() {
  const steps = [
    { n: "01", title: "We Understand Your Child First", desc: "A warm conversation about your child's personality, interests, and what you want to see grow." },
    { n: "02", title: "We Build Emotional Safety", desc: "Before learning happens, belonging happens. Settling-in is gentle, patient, and personal." },
    { n: "03", title: "We Activate All 8 Intelligences", desc: "Every week your child engages across language, logic, music, movement, art, social, self, nature." },
    { n: "04", title: "We Track Real Progress", desc: "Structured observations and clear progress reports — not just smiley faces." },
    { n: "05", title: "We Help You See the Direction", desc: "Parent meetings to share where your child is naturally shining and what to nurture next." },
  ];
  return (
    <section id="process" className="bg-cream/40 py-20 md:py-28">
      <div className="container-pac">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">Our Process</span>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
              From First Visit to <span className="text-gradient-brand">Visible Growth</span>
            </h2>
          </div>
        </Reveal>
        <div className="relative mt-14">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-secondary/40 to-coral/40 md:left-1/2 md:block" />
          <div className="space-y-8 md:space-y-14">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className={`grid items-center gap-6 md:grid-cols-2 ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                  <div className="md:[direction:ltr]">
                    <div className="relative rounded-3xl border border-border bg-card p-7 shadow-soft">
                      <div className="absolute -top-5 left-7 grid h-12 w-12 place-items-center rounded-2xl bg-primary-gradient font-display text-lg font-bold text-primary-foreground shadow-glow">
                        {s.n}
                      </div>
                      <h3 className="mt-3 font-display text-xl text-foreground sm:text-2xl">{s.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:[direction:ltr] md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------- GALLERY ------------------- */
function GallerySection() {
  const items = [
    { src: galleryStage, alt: "PAC Mulund preschool amphitheatre", span: "row-span-2" },
    { src: galleryArt, alt: "Kids art room PAC preschool", span: "" },
    { src: galleryClassroom, alt: "Multiple intelligence activity classroom Mulund", span: "row-span-2" },
    { src: galleryDance, alt: "Dance and movement studio Mulund preschool", span: "row-span-2" },
    { src: galleryLibrary, alt: "PAC library reading nook for kids Mulund", span: "" },
    { src: galleryMusic, alt: "PAC music corner for early learning Mulund", span: "" },
  ];
  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container-pac">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">Facilities & Gallery</span>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
              Step Inside <span className="text-gradient-brand">PAC, Mulund</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              From our amphitheatre and library to our art room and dance studio — every corner of PAC is built for a different kind of growth.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 md:grid-cols-4">
            {items.map((it) => (
              <div
                key={it.alt}
                className={`group relative overflow-hidden rounded-2xl shadow-soft ${it.span}`}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent p-3">
                  <p className="text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">{it.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="mt-10 text-center">
          <a href="#enquiry" className="inline-flex items-center gap-2 rounded-full bg-primary-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow">
            Schedule a Campus Tour →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------- WHY CHOOSE ------------------- */
function WhyChooseSection() {
  const items = [
    "21 years of proven experience",
    "Based on Howard Gardner's Theory",
    "Purpose-built campus",
    "Real stage opportunities",
    "Transparent progress reports",
    "Preschool + MIA pathways",
  ];
  return (
    <section className="bg-primary-gradient py-20 text-primary-foreground md:py-28">
      <div className="container-pac">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sunshine">Why Parents Choose Us</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">
              Why Parents in Mulund Have Trusted PAC for <span className="text-sunshine">21 Years</span>
            </h2>
          </div>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it} delay={i * 60}>
              <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sunshine text-sunshine-foreground">
                  ✓
                </div>
                <div className="text-base font-medium">{it}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- TESTIMONIALS ------------------- */
function TestimonialsSection() {
  const items = [
    {
      quote: "PAC gave my daughter the confidence to perform on stage and the curiosity to ask big questions. The 8-intelligence approach is the real deal.",
      name: "Pooja R.",
      program: "Parent · PAC Preschool",
    },
    {
      quote: "We moved our son from a regular activity class to MIA. The difference in just one term was visible — he found his love for music here.",
      name: "Karan M.",
      program: "Parent · MIA Program",
    },
    {
      quote: "Bijal ma'am and her team know children. Every observation in the progress report felt personal and accurate. Highly recommended.",
      name: "Sneha & Aman D.",
      program: "Parents · PAC Preschool",
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-pac">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">Testimonials</span>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
              Hear It From <span className="text-gradient-brand">PAC Parents</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="text-4xl text-coral">"</div>
                <blockquote className="mt-2 flex-1 text-base leading-relaxed text-foreground/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-primary-gradient font-display text-sm font-bold text-primary-foreground">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.program}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#enquiry" className="inline-flex items-center gap-2 rounded-full bg-primary-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-2px]">
            Hear Enough? Let's Get Your Child Started →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------- ENQUIRY ------------------- */
function EnquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    const parent = String(data.get("parent") || "").trim();
    const child = String(data.get("child") || "").trim();
    const age = String(data.get("age") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (!parent) next.parent = "Please enter parent name";
    if (!child) next.child = "Please enter child name";
    if (!age) next.age = "Please enter child age";
    if (!/^[0-9+\s()-]{7,15}$/.test(phone)) next.phone = "Please enter a valid phone number";
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = "Please enter a valid email";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section id="enquiry" className="bg-hero-gradient py-20 md:py-28">
      <div className="container-pac">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">Start Your PAC Journey</span>
              <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
                Start Your Child's <span className="text-gradient-brand">PAC Journey</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                Fill in your details and our team will guide you on the right program for your child.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  ["📞", "Call us", "+91 99675 55555"],
                  ["✉️", "Email", "admissions@pacmulund.com"],
                  ["📍", "Visit", "Mulund, Mumbai, Maharashtra"],
                  ["🕒", "Hours", "Mon–Sat · 9:00 AM – 6:00 PM"],
                ].map(([i, l, v]) => (
                  <div key={l} className="flex items-center gap-4 rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-gradient text-lg text-primary-foreground">{i}</div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
                      <div className="truncate text-sm font-semibold text-foreground">{v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="rounded-[2rem] border border-border bg-card p-6 shadow-card sm:p-8"
              noValidate
            >
              {submitted ? (
                <div className="grid place-items-center gap-3 py-10 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-leaf/40 text-3xl">✓</div>
                  <h3 className="font-display text-2xl text-foreground">Thank you!</h3>
                  <p className="max-w-sm text-muted-foreground">
                    Your enquiry is in. Our admissions team will reach out shortly to schedule your free campus visit.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 rounded-full border border-border bg-background px-5 py-2 text-sm font-medium"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Parent Name" name="parent" error={errors.parent} placeholder="Your full name" />
                    <Field label="Child Name" name="child" error={errors.child} placeholder="Your child's name" />
                    <Field label="Child Age" name="age" error={errors.age} placeholder="e.g. 3 years" />
                    <Field label="Contact Number" name="phone" type="tel" error={errors.phone} placeholder="+91" />
                    <div className="sm:col-span-2">
                      <Field label="Email (optional)" name="email" type="email" error={errors.email} placeholder="you@example.com" />
                    </div>
                  </div>

                  <fieldset className="mt-5">
                    <legend className="mb-2 text-sm font-medium text-foreground">I'm interested in</legend>
                    <div className="grid gap-2 sm:grid-cols-3">
                      {["Preschool", "MIA Activity Program", "Not Sure – Need Guidance"].map((opt) => (
                        <label key={opt} className="flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5 text-sm transition hover:border-primary/40 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                          <input type="checkbox" name="interest" value={opt} className="h-4 w-4 accent-[var(--primary)]" />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="mt-5">
                    <label htmlFor="callback" className="mb-1.5 block text-sm font-medium">Preferred Callback Time</label>
                    <select
                      id="callback"
                      name="callback"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option>Anytime</option>
                      <option>Morning (9 AM – 12 PM)</option>
                      <option>Afternoon (12 PM – 4 PM)</option>
                      <option>Evening (4 PM – 7 PM)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-7 w-full rounded-full bg-primary-gradient px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-2px]"
                  >
                    Book My Free Campus Visit →
                  </button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Your details are kept private. No spam — only PAC admissions will contact you.
                  </p>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", error, placeholder,
}: { label: string; name: string; type?: string; error?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-primary/20 ${
          error ? "border-destructive" : "border-input focus:border-primary"
        }`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

/* ------------------- FAQ ------------------- */
function FaqSection() {
  const faqs = [
    {
      q: "What's the difference between PAC Preschool and MIA?",
      a: "Preschool is your child's full early-learning programme (school readiness + 8-intelligence development). MIA is an after-school activity programme exposing your child to 10–12 different activities — perfect for children already in another school.",
    },
    {
      q: "What age groups does PAC cater to?",
      a: "Our Preschool serves children from 1.5 to 6 years (Playgroup, Nursery, Jr. KG, Sr. KG). MIA welcomes children from 3 to 10 years across multiple batches.",
    },
    {
      q: "Is PAC located in Mulund?",
      a: "Yes — PAC is a purpose-built campus in Mulund, Mumbai. Easy to reach from Mulund West, Mulund East and nearby suburbs.",
    },
    {
      q: "Can my child join MIA if studying elsewhere?",
      a: "Absolutely. MIA is designed as an after-school or weekend programme that complements your child's existing school.",
    },
    {
      q: "How do I know the program is working?",
      a: "We share structured progress reports and host parent meetings so you can see exactly where your child is shining and what to nurture next.",
    },
    {
      q: "How do I get started?",
      a: "Just fill the enquiry form above or WhatsApp us. We'll book a free campus visit and walk you through the right program for your child.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-cream/40 py-20 md:py-28">
      <div className="container-pac">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">FAQs</span>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
              Your Questions, <span className="text-gradient-brand">Answered</span>
            </h2>
          </div>
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 40}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-foreground sm:text-lg">{f.q}</span>
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-muted text-lg transition ${isOpen ? "rotate-45 bg-primary text-primary-foreground" : ""}`}>+</span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? 400 : 0 }}
                  >
                    <p className="px-6 pb-5 text-[15px] leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------- FOOTER ------------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container-pac py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="PAC Mulund" className="h-12 w-12 rounded-xl bg-white p-1" />
              <div>
                <div className="font-display text-xl font-bold">PAC Mulund</div>
                <div className="text-xs uppercase tracking-widest opacity-70">Preschool · Day Care · MIA Centre</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed opacity-75">
              21 years of nurturing young minds in Mulund through India's Multiple Intelligence approach. Helping every child discover where they naturally shine.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialIcon href="https://tr.ee/eVM_nwdCAQ" label="YouTube">▶</SocialIcon>
              <SocialIcon href="https://tr.ee/b9EkS2Zuav" label="Facebook">f</SocialIcon>
              <SocialIcon href="https://tr.ee/umjQ5_HL-l" label="Instagram">◎</SocialIcon>
            </div>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li><a href="#preschool" className="hover:opacity-100">Preschool</a></li>
              <li><a href="#mia" className="hover:opacity-100">MIA Program</a></li>
              <li><a href="#faq" className="hover:opacity-100">FAQs</a></li>
              <li><a href="#enquiry" className="hover:opacity-100">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold">Visit Us</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li>Mulund, Mumbai 400080</li>
              <li>+91 99675 55555</li>
              <li>admissions@pacmulund.com</li>
              <li>Mon–Sat · 9 AM – 6 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="PAC Mulund location map"
            src="https://www.google.com/maps?q=PAC+Preschool+Mulund&output=embed"
            className="h-64 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs opacity-60 sm:flex-row">
          <p>© {new Date().getFullYear()} PAC – Potential Activity Centre, Mulund. All rights reserved.</p>
          <p>Made with care for the children of Mulund ✨</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-sm transition hover:bg-white/15"
    >
      {children}
    </a>
  );
}

/* ------------------- STICKY MOBILE CTA ------------------- */
function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-glow backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground"
        >
          📞 Call
        </a>
        <a
          href="#enquiry"
          className="flex items-center justify-center gap-2 rounded-full bg-primary-gradient px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          Book a Visit
        </a>
      </div>
    </div>
  );
}

/* ------------------- WHATSAPP FLOAT ------------------- */
function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi PAC! I'd like to know more about admissions.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PAC on WhatsApp"
      className="fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-leaf text-2xl text-leaf-foreground shadow-glow transition hover:scale-110 md:bottom-6 md:right-6 md:h-16 md:w-16"
    >
      <span aria-hidden>💬</span>
    </a>
  );
}
