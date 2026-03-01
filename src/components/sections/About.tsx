import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/LocaleContext";
import { FadeIn } from "@/components/FadeIn";
import cv from "@/assets/cv.pdf";

const lines = [
  { token: "const", type: "keyword" },
  { token: " karl", type: "variable" },
  { token: " = {", type: "default" },
  { token: null, type: "newline" },
  { token: "  role:", type: "property" },
  { token: ' "Étudiant BTS SIO & Développeur"', type: "string" },
  { token: ",", type: "default" },
  { token: null, type: "newline" },
  { token: "  location:", type: "property" },
  { token: ' "France 🇫🇷"', type: "string" },
  { token: ",", type: "default" },
  { token: null, type: "newline" },
  { token: "  formation:", type: "property" },
  { token: ' "BTS SIO — CNED"', type: "string" },
  { token: ",", type: "default" },
  { token: null, type: "newline" },
  { token: "  stack:", type: "property" },
  { token: " [", type: "default" },
  { token: null, type: "newline" },
  { token: '    "React"', type: "string" },
  { token: ",", type: "default" },
  { token: ' "TypeScript"', type: "string" },
  { token: ",", type: "default" },
  { token: ' "C#"', type: "string" },
  { token: ",", type: "default" },
  { token: null, type: "newline" },
  { token: '    "Symfony"', type: "string" },
  { token: ",", type: "default" },
  { token: ' "Node.js"', type: "string" },
  { token: ",", type: "default" },
  { token: ' "MySQL"', type: "string" },
  { token: ",", type: "default" },
  { token: null, type: "newline" },
  { token: "  ],", type: "default" },
  { token: null, type: "newline" },
  { token: "  available:", type: "property" },
  { token: " true", type: "boolean" },
  { token: ",", type: "default" },
  { token: null, type: "newline" },
  { token: "}", type: "default" },
];

const colors: Record<string, string> = {
  keyword: "text-violet-400",
  variable: "text-sky-300",
  property: "text-emerald-400",
  string: "text-amber-300",
  boolean: "text-orange-400",
  default: "text-muted-foreground",
};

function CodeBlock() {
  const [displayed, setDisplayed] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    if (displayed >= lines.length) return;
    const delay = lines[displayed].type === "newline" ? 40 : 30;
    const timer = setTimeout(() => setDisplayed((d) => d + 1), delay);
    return () => clearTimeout(timer);
  }, [displayed]);

  // Blinking cursor
  useEffect(() => {
    const timer = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(timer);
  }, []);

  // Reconstruct lines
  const rows: (typeof lines)[] = [];
  let current: typeof lines = [];
  for (const token of lines.slice(0, displayed)) {
    if (token.type === "newline") {
      rows.push(current);
      current = [];
    } else {
      current.push(token);
    }
  }
  if (current.length) rows.push(current);

  return (
    <div className="w-full rounded-2xl border bg-background/60 backdrop-blur-sm shadow-lg overflow-hidden">
      {/* Barre titre */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b bg-muted/40">
        <span className="w-3 h-3 rounded-full bg-red-400/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-400/80" />
        <span className="ml-3 text-xs text-muted-foreground font-mono">
          karl.ts
        </span>
      </div>

      {/* Code */}
      <div className="px-6 py-5 font-mono text-sm leading-7 min-h-[280px]">
        {rows.map((row, i) => (
          <div key={i} className="flex flex-wrap">
            <span className="select-none text-muted-foreground/30 mr-4 text-xs leading-7">
              {String(i + 1).padStart(2, "0")}
            </span>
            {row.map((token, j) => (
              <span key={j} className={`${colors[token.type]} whitespace-pre`}>
                {token.token}
              </span>
            ))}
          </div>
        ))}
        {/* Curseur */}
        {displayed < lines.length && (
          <span
            className={`inline-block w-2 h-4 bg-violet-400 ml-1 align-middle transition-opacity ${showCursor ? "opacity-100" : "opacity-0"}`}
          />
        )}
      </div>
    </div>
  );
}

export function About() {
  const { t } = useLocale();

  return (
    <section id="about" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <FadeIn className="order-2 md:order-1">
          <CodeBlock />
        </FadeIn>

        <div className="space-y-4 order-1 md:order-2">
          <FadeIn delay={0}>
            <h2 className="text-4xl font-bold">{t.about.title}</h2>
          </FadeIn>
          <FadeIn delay={80}>
            <p className="text-muted-foreground text-lg">{t.about.pitch}</p>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="text-muted-foreground">{t.about.background}</p>
          </FadeIn>
          <FadeIn delay={240}>
            <Button asChild>
              <a href={cv} download>
                {t.about.cv}
              </a>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
