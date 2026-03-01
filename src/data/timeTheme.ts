export type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

export function getTimeOfDay(): TimeOfDay {
  const h = new Date().getHours();
  if (h >= 6 && h < 12) return "morning";
  if (h >= 12 && h < 18) return "afternoon";
  if (h >= 18 && h < 22) return "evening";
  return "night";
}

export const timeThemes: Record<
  TimeOfDay,
  {
    blobs: [string, string, string];
    label: { en: string; fr: string };
  }
> = {
  morning: {
    blobs: [
      "bg-orange-400/30 blur-[120px]",
      "bg-yellow-300/20 blur-[100px]",
      "bg-amber-500/20  blur-[90px]",
    ],
    label: { en: "Good morning, I'm", fr: "Bonjour, je suis" },
  },
  afternoon: {
    blobs: [
      "bg-sky-400/30    blur-[120px]",
      "bg-cyan-300/25   blur-[100px]",
      "bg-blue-500/20   blur-[90px]",
    ],
    label: { en: "Good afternoon, I'm", fr: "Bonne après-midi, je suis" },
  },
  evening: {
    blobs: [
      "bg-violet-500/30 blur-[120px]",
      "bg-orange-400/20 blur-[100px]",
      "bg-pink-500/20   blur-[90px]",
    ],
    label: { en: "Good evening, I'm", fr: "Bonne soirée, je suis" },
  },
  night: {
    blobs: [
      "bg-indigo-600/30 blur-[120px]",
      "bg-blue-900/30   blur-[100px]",
      "bg-purple-900/20 blur-[90px]",
    ],
    label: { en: "Good night, I'm", fr: "Bonne nuit, je suis" },
  },
};
