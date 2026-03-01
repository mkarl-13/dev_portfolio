import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/LocaleContext";
import { FadeIn } from "@/components/FadeIn";
import { getTimeOfDay, timeThemes } from "@/data/timeTheme";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Portrait from "@/assets/portrait.png";

export function Hero() {
  const { t, locale } = useLocale();
  const { label } = timeThemes[getTimeOfDay()];

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-32 -z-10" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <FadeIn immediate delay={0}>
            <p className="text-sm text-muted-foreground font-medium">
              {label[locale]}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              {t.hero.title}
            </h1>
          </FadeIn>
          <FadeIn immediate delay={80}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              {t.hero.subtitle}
            </p>
          </FadeIn>
          <FadeIn immediate delay={160}>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <a href="#projects">{t.hero.cta}</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">{t.hero.ctaSecondary}</a>
              </Button>
            </div>
          </FadeIn>
          <FadeIn immediate delay={220}>
            <div className="flex gap-3">
              <a
                href="mailto:mitschikarl@gmail.com"
                className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Email"
              >
                <MdEmail className="w-5 h-5" style={{ color: "#EA4335" }} />
              </a>
              <a
                href="https://github.com/mkarl-13"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="GitHub"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/karlmitschi/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5" style={{ color: "#0A66C2" }} />
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn
          immediate
          delay={100}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
            <img
              src={Portrait}
              alt="Karl Mitschi"
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
