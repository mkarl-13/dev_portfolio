import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiDocker,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVite,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiDotnet,
  SiSymfony,
} from "react-icons/si";
import type { IconType } from "react-icons";
import CSharpIcon from "@/assets/csharp-icon.svg?react";
import JavaIcon from "@/assets/java-icon.svg?react";

export interface TechIcon {
  icon: IconType;
  label: string;
  color: string;
}

const adaptiveColor = (theme: "light" | "dark") =>
  theme === "dark" ? "#FFFFFF" : "#000000";

export const techIcons: Record<string, Omit<TechIcon, "label">> = {
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Express: { icon: SiExpress, color: "adaptive" },
  Git: { icon: SiGit, color: "#F05032" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss3, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Java: { icon: JavaIcon as IconType, color: "#007396" },
  Python: { icon: SiPython, color: "#3776AB" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  Vite: { icon: SiVite, color: "#646CFF" },
  "C#": { icon: CSharpIcon as IconType, color: "#239120" },
  "Windows Forms": { icon: SiDotnet, color: "#512BD4" },
  Symfony: { icon: SiSymfony, color: "adaptive" },
};

export function resolveTechIcons(
  stack: string[],
  theme: "dark" | "light" | "system",
): TechIcon[] {
  const resolvedTheme = theme === "system" ? "dark" : theme;
  return stack
    .filter((tech) => tech in techIcons)
    .map((tech) => ({
      label: tech,
      icon: techIcons[tech].icon,
      color:
        techIcons[tech].color === "adaptive"
          ? adaptiveColor(resolvedTheme)
          : techIcons[tech].color,
    }));
}
