export const LANGUAGES_OPTIONS = [
  { value: "en", label: "English" },
  { value: "id", label: "Indonesian" },
] as const;
export type Language = (typeof LANGUAGES_OPTIONS)[number]["value"];
