import { useTheme } from "@/components/theme-provider";
import { resolveTechIcons } from "@/data/techIcons";
import { useLocale } from "@/context/LocaleContext";
import { FadeIn } from "@/components/FadeIn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  {
    name: { en: "Frontend", fr: "Frontend" },
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
  },
  {
    name: { en: "Backend", fr: "Backend" },
    stack: ["Node.js", "Express", "MySQL"],
  },
  { name: { en: "Tools", fr: "Outils" }, stack: ["Git", "Docker", "Figma"] },
  {
    name: { en: "Other languages", fr: "Autres langages" },
    stack: ["C#", "Java", "Python", "C++"],
  },
];

export function Skills() {
  const { theme } = useTheme();
  const { locale, t } = useLocale();

  return (
    <section id="skills" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <h2 className="text-4xl font-bold">{t.skills.title}</h2>
          <p className="text-muted-foreground mt-2">{t.skills.subtitle}</p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map(({ name, stack }, i) => {
            const skills = resolveTechIcons(stack, theme);
            return (
              <FadeIn key={name.en} delay={i * 80}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle>{name[locale]}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {skills.map(({ icon: Icon, label, color }) => (
                        <div
                          key={label}
                          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Icon
                            className="w-6 h-6 shrink-0"
                            style={{ color }}
                          />
                          <span className="text-sm font-medium">{label}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
