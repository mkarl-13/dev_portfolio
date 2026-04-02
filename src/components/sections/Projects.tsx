import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { projects } from "@/data/projects";
import { resolveTechIcons } from "@/data/techIcons";
import { useTheme } from "@/components/theme-provider";
import { useLocale } from "@/context/LocaleContext";
import { FadeIn } from "@/components/FadeIn";

export function Projects() {
  const { theme } = useTheme();
  const { t, locale } = useLocale();

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="mb-12 text-center">
          <h2 className="text-4xl font-bold">{t.projects.title}</h2>
          <p className="text-muted-foreground mt-2">{t.projects.subtitle}</p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projects.slice(0, 3).map((project, i) => (
            <FadeIn key={project.slug} delay={i * 80} className="h-full">
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-0">
                {/* Image */}
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title[locale]}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://picsum.photos/seed/" +
                        project.slug +
                        "/600/340";
                    }}
                  />
                </div>

                {/* Titre + description */}
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    {project.title[locale]}
                  </CardTitle>
                  <CardDescription>{project.shortDesc[locale]}</CardDescription>
                </CardHeader>

                {/* Icônes tech */}
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-3">
                    {resolveTechIcons(project.stack, theme).map(
                      ({ icon: Icon, label, color }) => (
                        <div
                          key={label}
                          className="flex items-center gap-1.5 text-muted-foreground"
                          title={label}
                        >
                          <Icon className="w-5 h-5" style={{ color }} />
                          <span className="text-xs font-medium">{label}</span>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>

                {/* Bouton toujours en bas */}
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/projects/${project.slug}`}>
                      {t.projects.cta}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
