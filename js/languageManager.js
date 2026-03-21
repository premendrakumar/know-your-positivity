/**
 * LanguageManager - Handles language switching and localization
 */
import {
  LANGUAGE_ORDER,
  LANGUAGE_LABELS,
  DEFAULT_LANGUAGE,
} from "./config/languages.js";
import { STORAGE_KEYS } from "./config/storageKeys.js";

export class LanguageManager {
  constructor(languageData) {
    this.languageData = languageData;
    this.languageKey = STORAGE_KEYS.language;
    const stored = localStorage.getItem(this.languageKey);
    this.currentLang = this.normalizeLanguageCode(stored);
    if (stored !== this.currentLang) {
      localStorage.setItem(this.languageKey, this.currentLang);
    }
    this.langSwitchButton = document.getElementById("langSwitch");
  }

  /**
   * Ensure stored code is still supported (e.g. after removing a locale).
   */
  normalizeLanguageCode(code) {
    if (code && LANGUAGE_ORDER.includes(code)) return code;
    return DEFAULT_LANGUAGE;
  }

  /**
   * Get current language data
   */
  getCurrentLanguageData() {
    return this.languageData[this.currentLang];
  }

  /**
   * Get current language code
   */
  getCurrentLanguage() {
    return this.currentLang;
  }

  /**
   * Switch to the next available language
   */
  switchLanguage() {
    const currentIndex = LANGUAGE_ORDER.indexOf(this.currentLang);
    const safeIndex = currentIndex === -1 ? 0 : currentIndex;
    const nextIndex = (safeIndex + 1) % LANGUAGE_ORDER.length;
    this.currentLang = LANGUAGE_ORDER[nextIndex];
    localStorage.setItem(this.languageKey, this.currentLang);
    this.updateLanguageButton();
    return this.getCurrentLanguageData();
  }

  /**
   * Update language switcher button text
   * Standardized format: Flag + Language name in English
   */
  updateLanguageButton() {
    this.langSwitchButton.innerText =
      LANGUAGE_LABELS[this.currentLang] || LANGUAGE_LABELS[DEFAULT_LANGUAGE];
  }

  /**
   * Initialize language manager
   */
  initialize() {
    this.updateLanguageButton();
  }
}
