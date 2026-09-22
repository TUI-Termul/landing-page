export type ThemeId = "paper" | "mocha" | "phosphor" | "tokyo-night";

export const themes: {
  id: ThemeId;
  label: string;
  mood: string;
}[] = [
  { id: "paper", label: "paper", mood: "Bone canvas + indigo" },
  { id: "mocha", label: "mocha", mood: "Catppuccin dark" },
  { id: "phosphor", label: "phosphor", mood: "Green CRT" },
  { id: "tokyo-night", label: "tokyo-night", mood: "Blue-violet night" },
];
