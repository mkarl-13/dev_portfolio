import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useLocale } from "@/context/LocaleContext";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLocale();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError(
        "Une erreur est survenue. Réessaie ou contacte-moi directement.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">{t.contact.title}</h2>
          <p className="text-muted-foreground mt-2">{t.contact.subtitle}</p>
        </div>

        <Card>
          {submitted ? (
            <CardContent className="text-center space-y-2 py-16">
              <p className="text-2xl font-semibold">{t.contact.successTitle}</p>
              <p className="text-muted-foreground">
                {t.contact.successSubtitle}
              </p>
            </CardContent>
          ) : (
            <form onSubmit={handleSubmit}>
              <CardContent className="py-6 space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.name}</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t.contact.namePlaceholder}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t.contact.emailPlaceholder}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t.contact.subject}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder={t.contact.subjectPlaceholder}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t.contact.messagePlaceholder}
                    rows={5}
                    required
                  />
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between gap-4">
                <div className="flex gap-3">
                  <a
                    href="mailto:mitschikarl@gmail.com"
                    className="p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    aria-label="Email"
                  >
                    <MdEmail className="w-5 h-5" style={{ color: "#EA4335" }} />
                  </a>
                  <a
                    href="https://github.com/mkarl-13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    aria-label="GitHub"
                  >
                    <SiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/karlmitschi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    aria-label="LinkedIn"
                  >
                    <SiLinkedin
                      className="w-5 h-5"
                      style={{ color: "#0A66C2" }}
                    />
                  </a>
                </div>

                <Button type="submit" size="lg" disabled={loading}>
                  {loading ? "Envoi..." : t.contact.submit}
                </Button>
                {error && (
                  <p className="text-sm text-destructive text-center">
                    {error}
                  </p>
                )}
              </CardFooter>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
