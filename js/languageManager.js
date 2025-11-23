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
    const languages = ["en", "hi", "ur", "pn", "mr", "ru", "gu"];
    const currentIndex = languages.indexOf(this.currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    this.currentLang = languages[nextIndex];
    localStorage.setItem(this.languageKey, this.currentLang);
    this.updateLanguageButton();
    return this.getCurrentLanguageData();
  }

  /**
   * Update language switcher button text
   */
  updateLanguageButton() {
    const languageLabels = {
      en: "🇮🇳 हिंदी",
      hi: "🇵🇰 اردو",
      ur: "🇮🇳 ਪੰਜਾਬੀ",
      pn: "🇮🇳 मराठी",
      mr: "🇷🇺 Русский",
      ru: "🇮🇳 ગુજરાતી",
      gu: "🇬🇧 English",
    };
    this.langSwitchButton.innerText = languageLabels[this.currentLang] || "🇬🇧 English";
  }

  /**
   * Initialize language manager
   */
  initialize() {
    this.updateLanguageButton();
  }
}

