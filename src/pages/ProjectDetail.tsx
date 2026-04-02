import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { projects } from "@/data/projects";
import { resolveTechIcons } from "@/data/techIcons";
import { useTheme } from "@/components/theme-provider";
import { useLocale } from "@/context/LocaleContext";
import ReactMarkdown from "react-markdown";
import { ExternalLink } from "lucide-react";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { theme } = useTheme();
  const { t, locale } = useLocale();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Button asChild>
            <Link to="/#projects">← {t.projects.cta}</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const techList = resolveTechIcons(project.stack, theme);
  const allLinks = project.links ?? [];

  return (
    <Layout>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 space-y-10">
        <FadeIn immediate delay={0}>
          <Button variant="ghost" asChild>
            <Link to="/#projects">← {t.projects.title}</Link>
          </Button>
        </FadeIn>

        <FadeIn immediate delay={60} className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {project.title[locale]}
          </h1>
          <p className="text-muted-foreground text-lg">
            {project.shortDesc[locale]}
          </p>

          {/* Icônes colorées */}
          <div className="flex flex-wrap gap-4 pt-1">
            {techList.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-muted/40 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="w-5 h-5 shrink-0" style={{ color }} />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn immediate delay={120}>
          <img
            src={project.image}
            alt={project.title[locale]}
            className="w-full rounded-2xl shadow-lg object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://picsum.photos/seed/" + project.slug + "/1200/630";
            }}
          />
        </FadeIn>

        <FadeIn immediate delay={180}>
          <div className="max-w-none text-muted-foreground space-y-4">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg font-semibold text-foreground mt-4 mb-1">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-1 my-2">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="space-y-1 my-2 list-decimal ml-4">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="flex gap-2 items-start">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{children}</span>
                  </li>
                ),
                strong: ({ children }) => (
                  <strong className="text-foreground font-semibold">
                    {children}
                  </strong>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground/80 my-4">
                    {children}
                  </blockquote>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {project.longDesc[locale].replace(/^[ \t]+/gm, "")}
            </ReactMarkdown>
          </div>
        </FadeIn>

        {/* Section liens documents */}
        {allLinks.length > 0 && (
          <FadeIn immediate delay={200}>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {locale === "fr" ? "Documents & liens" : "Documents & links"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {allLinks.map((link, i) =>
                  link.url.trim() ? (
                    <Button
                      key={i}
                      variant="outline"
                      asChild
                      className="justify-start"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 shrink-0" />
                        {link.label[locale]}
                      </a>
                    </Button>
                  ) : (
                    <Button
                      key={i}
                      variant="outline"
                      disabled
                      className="justify-start"
                    >
                      <ExternalLink className="w-4 h-4 shrink-0" />
                      {link.label[locale]}
                    </Button>
                  ),
                )}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Vidéo de démonstration */}
        {project.video && (
          <FadeIn immediate delay={210}>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">
                {locale === "fr" ? "Vidéo de démonstration" : "Demo video"}
              </h2>
              <div className="aspect-video w-full rounded-xl overflow-hidden border">
                <iframe
                  src={project.video}
                  className="w-full h-full"
                  allowFullScreen
                  title={
                    locale === "fr" ? "Vidéo de démonstration" : "Demo video"
                  }
                />
              </div>
            </div>
          </FadeIn>
        )}

      </main>
    </Layout>
  );
}
