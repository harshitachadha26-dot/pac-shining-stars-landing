import { useState } from "react";

const intelligences = [
  { name: "Linguistic", icon: "📖", desc: "Words, stories, reading & expression", color: "var(--coral)" },
  { name: "Logical", icon: "🧩", desc: "Reasoning, numbers, patterns & problem-solving", color: "var(--primary)" },
  { name: "Musical", icon: "🎵", desc: "Rhythm, sound, melody & musical thinking", color: "var(--secondary)" },
  { name: "Bodily-Kinesthetic", icon: "🤸", desc: "Movement, coordination & physical mastery", color: "var(--leaf)" },
  { name: "Spatial", icon: "🎨", desc: "Art, design, visual & spatial imagination", color: "var(--sunshine)" },
  { name: "Interpersonal", icon: "🤝", desc: "Empathy, social skills & teamwork", color: "var(--coral)" },
  { name: "Intrapersonal", icon: "🪞", desc: "Self-awareness, reflection & confidence", color: "var(--primary)" },
  { name: "Naturalistic", icon: "🌿", desc: "Nature, observation & the world around us", color: "var(--leaf)" },
];

export function IntelligenceWheel() {
  const [active, setActive] = useState(0);
  const radius = 160;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
      <div className="relative mx-auto aspect-square w-full max-w-[420px]">
        <div className="absolute inset-6 rounded-full bg-warm-gradient opacity-20 blur-2xl" />
        <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-primary/20" />
        <div className="absolute inset-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-card shadow-glow">
          <div className="text-center">
            <div className="font-display text-xl font-semibold text-primary">8</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Intelligences
            </div>
          </div>
        </div>
        {intelligences.map((it, i) => {
          const angle = (i / intelligences.length) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const isActive = i === active;
          return (
            <button
              key={it.name}
              onClick={() => setActive(i)}
              aria-label={it.name}
              className="absolute left-1/2 top-1/2 grid h-16 w-16 place-items-center rounded-full text-2xl transition-all duration-300 hover:scale-110"
              style={{
                transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%)) scale(${isActive ? 1.15 : 1})`,
                background: isActive ? it.color : "var(--card)",
                color: isActive ? "white" : "inherit",
                boxShadow: isActive ? "var(--shadow-glow)" : "var(--shadow-soft)",
              }}
            >
              {it.icon}
            </button>
          );
        })}
      </div>

      <div className="space-y-4">
        <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Tap an intelligence
        </div>
        <h3 className="font-display text-3xl text-foreground sm:text-4xl">
          {intelligences[active].name}
        </h3>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {intelligences[active].desc}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {intelligences.map((it, i) => (
            <button
              key={it.name}
              onClick={() => setActive(i)}
              className={`rounded-full border px-3 py-1.5 text-xs transition ${
                i === active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/70 hover:border-primary/50"
              }`}
            >
              {it.icon} {it.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
