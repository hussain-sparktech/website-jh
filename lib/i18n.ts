export const languages = ["en", "de"] as const;

export type Language = (typeof languages)[number];

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}

export function alternateLanguage(language: Language): Language {
  return language === "en" ? "de" : "en";
}
