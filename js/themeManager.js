/**
 * ThemeManager - Handles dark/light mode toggle
 */
import { STORAGE_KEYS } from "./config/storageKeys.js";

export class ThemeManager {
  constructor() {
    this.themeKey = STORAGE_KEYS.theme;
    this.themeToggle = document.getElementById("toggle-theme");
    this.html = document.documentElement;
  }

  /**
   * Initialize theme from localStorage
   */
  initialize() {
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme === "dark") {
      this.html.classList.add("dark");
      this.themeToggle.textContent = "☀️ Light Mode";
    }

    this.themeToggle.addEventListener("click", () => this.toggle());
  }

  /**
   * Toggle between dark and light mode
   */
  toggle() {
    const isDark = this.html.classList.toggle("dark");
    this.themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem(this.themeKey, isDark ? "dark" : "light");
  }

  /**
   * Get current theme
   */
  getCurrentTheme() {
    return this.html.classList.contains("dark") ? "dark" : "light";
  }
}

