/**
 * Single source of truth for supported languages and switcher labels.
 * Order defines the cycle when the user taps "Switch Language".
 */
export const LANGUAGE_ORDER = [
  "en",
  "hi",
  "ur",
  "pn",
  "mr",
  "ru",
  "gu",
  "hr",
  "bn",
  "kn",
  "te",
  "ta",
];

/** Button label for each language code (flag + English name). */
export const LANGUAGE_LABELS = {
  en: "🇬🇧 English",
  hi: "🇮🇳 Hindi",
  ur: "🇵🇰 Urdu",
  pn: "🇮🇳 Punjabi",
  mr: "🇮🇳 Marathi",
  ru: "🇷🇺 Russian",
  gu: "🇮🇳 Gujarati",
  hr: "🇮🇳 Haryanvi",
  bn: "🇧🇩 Bangla",
  kn: "🇮🇳 Kannada",
  te: "🇮🇳 Telugu",
  ta: "🇮🇳 Tamil",
};

export const DEFAULT_LANGUAGE = "en";
