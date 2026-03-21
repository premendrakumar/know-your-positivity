/**
 * Main Application - Coordinates all modules
 */
import LanguageData from "./i18n/registry.js";
import { CardManager } from "./cardManager.js";
import { ThemeManager } from "./themeManager.js";
import { LanguageManager } from "./languageManager.js";
import { ModalManager } from "./modalManager.js";
import { UIManager } from "./uiManager.js";

class App {
  constructor() {
    this.languageManager = new LanguageManager(LanguageData);
    this.cardManager = null;
    this.themeManager = new ThemeManager();
    this.modalManager = new ModalManager();
    this.uiManager = new UIManager();
    this.modalInitialized = false;
  }

  /**
   * Initialize the application
   */
  initialize() {
    // Initialize theme (must be first to set initial theme)
    this.themeManager.initialize();

    // Initialize language manager
    this.languageManager.initialize();

    // Get initial language data
    const initialLanguageData = this.languageManager.getCurrentLanguageData();
    this.updateAllComponents(initialLanguageData);

    // Set up language switch handler
    this.setupLanguageSwitch();
  }

  /**
   * Update all components with language data
   */
  updateAllComponents(languageData) {
    const { CardData, AboutContent } = languageData;

    // Initialize or update card manager
    if (!this.cardManager) {
      this.cardManager = new CardManager(CardData);
      this.cardManager.initialize();
    } else {
      this.cardManager.updateCardData(CardData);
    }

    // Initialize or update modal
    if (!this.modalInitialized) {
      this.modalManager.updateContent(AboutContent);
      this.modalManager.initialize();
      this.modalInitialized = true;
    } else {
      this.modalManager.updateContent(AboutContent);
    }

    // Update UI
    this.uiManager.updateUI(languageData);
  }

  /**
   * Handle language switching and update all components
   */
  setupLanguageSwitch() {
    const langButton = document.getElementById("langSwitch");
    
    langButton.addEventListener("click", () => {
      const newLanguageData = this.languageManager.switchLanguage();
      this.updateAllComponents(newLanguageData);
    });
  }
}

// Initialize app when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.initialize();
});

