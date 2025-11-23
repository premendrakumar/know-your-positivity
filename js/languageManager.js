/**
 * LanguageManager - Handles language switching and localization
 */
export class LanguageManager {
  constructor(languageData) {
    this.languageData = languageData;
    this.languageKey = "appLanguage";
    this.currentLang = localStorage.getItem(this.languageKey) || "en";
    this.langSwitchButton = document.getElementById("langSwitch");
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
    this.currentLang = this.currentLang === "en" ? "hi" : "en";
    localStorage.setItem(this.languageKey, this.currentLang);
    this.updateLanguageButton();
    return this.getCurrentLanguageData();
  }

  /**
   * Update language switcher button text
   */
  updateLanguageButton() {
    this.langSwitchButton.innerText =
      this.currentLang === "en" ? "🇮🇳 हिंदी" : "🇬🇧 English";
  }

  /**
   * Initialize language manager
   */
  initialize() {
    this.updateLanguageButton();
  }
}

