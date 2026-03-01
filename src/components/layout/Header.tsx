import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLocale } from "@/context/LocaleContext";
import { useTheme } from "@/components/theme-provider";
import { projects } from "@/data/projects";
import { resolveTechIcons } from "@/data/techIcons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import GB from "country-flag-icons/react/3x2/GB";
import FR from "country-flag-icons/react/3x2/FR";
import { Sun, Moon, Menu } from "lucide-react";

function Clock() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);
  const hh = time.getHours().toString().padStart(2, "0");
  const mm = time.getMinutes().toString().padStart(2, "0");
  return (
    <span className="text-xs">
      {hh}:{mm}
    </span>
  );
}

export function Header() {
  const { locale, setLocale, t } = useLocale();
  const { theme, setTheme } = useTheme();
  const [sheetOpen, setSheetOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function handleNavClick(e: React.MouseEvent, href: string) {
    e.preventDefault();
    const anchor = href.split("#")[1];
    if (!anchor) return;

    if (location.pathname === "/") {
      // Déjà sur la home, scroll direct
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Sur une autre page, naviguer vers / puis scroller
      navigate("/");
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }

  function handleMobileNavClick(href: string) {
    setSheetOpen(false);
    const anchor = href.split("#")[1];
    if (!anchor) return;

    if (location.pathname === "/") {
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-3 grid grid-cols-3 items-center">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              navigate("/");
            }
          }}
          className="text-xl font-bold"
        >
          Karl Mitschi
        </a>

        {/* Horloge centrée */}
        <div className="flex justify-center">
          <Clock />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4 justify-end">
          <NavigationMenu>
            <NavigationMenuList>
              {t.header.links
                .filter((l) => l.href !== "/#projects")
                .map(({ label, href }) => (
                  <NavigationMenuItem key={label}>
                    <NavigationMenuLink
                      asChild
                      className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-muted focus:bg-muted`}
                    >
                      <a href={href} onClick={(e) => handleNavClick(e, href)}>
                        {label}
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted focus:bg-muted data-[state=open]:bg-muted">
                  {t.header.links.find((l) => l.href === "/#projects")?.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-72 p-2 space-y-1">
                    {projects.map((project) => {
                      const icons = resolveTechIcons(
                        project.stack,
                        theme,
                      ).slice(0, 3);
                      return (
                        <li key={project.slug}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={`/projects/${project.slug}`}
                              className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                            >
                              <div className="min-w-0">
                                <p className="text-sm font-medium">
                                  {project.title[locale]}
                                </p>
                                <p className="text-xs text-muted-foreground truncate">
                                  {project.shortDesc[locale]}
                                </p>
                              </div>
                              <div className="flex gap-1.5 shrink-0 ml-3">
                                {icons.map(
                                  ({ icon: Icon, label: tech, color }) => (
                                    <Icon
                                      key={tech}
                                      className="w-4 h-4"
                                      style={{ color }}
                                    />
                                  ),
                                )}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <div className="flex items-center gap-1 rounded-md p-1">
            <button
              onClick={() => setLocale("en")}
              className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium transition-colors ${locale === "en" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
            >
              <GB className="w-4 h-auto rounded-sm" /> EN
            </button>
            <button
              onClick={() => setLocale("fr")}
              className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium transition-colors ${locale === "fr" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
            >
              <FR className="w-4 h-auto rounded-sm" /> FR
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2 justify-end">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 p-0">
              <nav className="flex flex-col h-full px-6 py-8 gap-1">
                {/* Liens principaux */}
                {t.header.links.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMobileNavClick(href);
                    }}
                    className="py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </a>
                ))}

                {/* Projets */}
                <div className="pt-3 mt-2 border-t space-y-1">
                  <p className="text-xs text-muted-foreground/60 font-medium uppercase tracking-wider mb-2">
                    {t.header.links.find((l) => l.href === "/#projects")?.label}
                  </p>
                  {projects.map((project) => (
                    <Link
                      key={project.slug}
                      to={`/projects/${project.slug}`}
                      onClick={() => setSheetOpen(false)}
                      className="flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span>{project.title[locale]}</span>
                      <div className="flex gap-1.5">
                        {resolveTechIcons(project.stack, theme)
                          .slice(0, 3)
                          .map(({ icon: Icon, label: tech, color }) => (
                            <Icon
                              key={tech}
                              className="w-4 h-4"
                              style={{ color }}
                            />
                          ))}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Langue */}
                <div className="flex items-center gap-2 pt-3 mt-2 border-t">
                  <button
                    onClick={() => setLocale("en")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors ${locale === "en" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    <GB className="w-4 h-auto rounded-sm" /> EN
                  </button>
                  <button
                    onClick={() => setLocale("fr")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors ${locale === "fr" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    <FR className="w-4 h-auto rounded-sm" /> FR
                  </button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
