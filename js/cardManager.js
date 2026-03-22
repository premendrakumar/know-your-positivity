/**
 * CardManager - Handles card navigation and display
 */
import {
  resolveCardIndex,
  setCardIndexForLanguage,
} from "./state/appState.js";

export class CardManager {
  /**
   * @param {Map<string, object>} cardData
   * @param {string} languageCode — current UI language (for per-language card position)
   */
  constructor(cardData, languageCode) {
    this._lang = languageCode;
    this.cardData = cardData;
    this.keys = Array.from(cardData.keys());
    this.currentIndex = resolveCardIndex(this._lang, this.keys.length);
    this.titleElement = document.getElementById("title");
    this.descElement = document.getElementById("desc");
    this.cardContainer = document.getElementById("card-container");
    /** Prevent duplicate document/touch listeners if initialize were called again */
    this._navigationBound = false;
  }

  /**
   * Update the displayed card content
   */
  updateCard() {
    const { title, desc } = this.cardData.get(this.keys[this.currentIndex]);
    this.titleElement.innerHTML = title;
    this.descElement.innerHTML = desc;
  }

  /** Persist current slide for the active language */
  _persistCardIndex() {
    setCardIndexForLanguage(
      this._lang,
      this.currentIndex,
      this.keys.length - 1
    );
  }

  /**
   * Navigate to the previous card
   */
  previous() {
    this.currentIndex =
      (this.currentIndex - 1 + this.keys.length) % this.keys.length;
    this.updateCard();
    this._persistCardIndex();
  }

  /**
   * Navigate to the next card
   */
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.keys.length;
    this.updateCard();
    this._persistCardIndex();
  }

  /**
   * Initialize card navigation with event listeners
   */
  initialize() {
    document
      .getElementById("prev")
      .addEventListener("click", () => this.previous());
    document
      .getElementById("next")
      .addEventListener("click", () => this.next());
    if (!this._navigationBound) {
      this.attachKeyboardNavigation();
      this.attachSwipeNavigation();
      this._navigationBound = true;
    }
    this.updateCard();
    this._persistCardIndex();
  }

  /**
   * Returns true when the About modal is currently open.
   */
  isAboutModalOpen() {
    const aboutModal = document.getElementById("about-modal");
    return (
      aboutModal && !aboutModal.classList.contains("pointer-events-none")
    );
  }

  /**
   * Keyboard navigation:
   * - ArrowLeft  -> previous card
   * - ArrowRight -> next card
   */
  attachKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      if (this.isAboutModalOpen()) {
        return;
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        this.previous();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        this.next();
      }
    });
  }

  /**
   * Mobile swipe navigation:
   * - Swipe left  -> next card
   * - Swipe right -> previous card
   */
  attachSwipeNavigation() {
    if (!this.cardContainer) return;

    const minSwipeDistanceX = 50;
    const maxSwipeDistanceYRatio = 0.5;

    let startX = 0;
    let startY = 0;
    let tracking = false;

    this.cardContainer.addEventListener(
      "touchstart",
      (e) => {
        if (this.isAboutModalOpen()) return;
        if (!e.touches || e.touches.length === 0) return;
        const t = e.touches[0];
        startX = t.clientX;
        startY = t.clientY;
        tracking = true;
      },
      { passive: true }
    );

    this.cardContainer.addEventListener(
      "touchend",
      (e) => {
        if (!tracking) return;
        tracking = false;
        if (!e.changedTouches || e.changedTouches.length === 0) return;
        if (this.isAboutModalOpen()) return;

        const t = e.changedTouches[0];
        const dx = t.clientX - startX;
        const dy = t.clientY - startY;

        if (Math.abs(dx) < minSwipeDistanceX) return;

        if (Math.abs(dy) > Math.abs(dx) * maxSwipeDistanceYRatio) return;

        if (dx < 0) {
          this.next();
        } else {
          this.previous();
        }
      },
      { passive: true }
    );
  }

  /**
   * Update card data when language changes
   * @param {Map<string, object>} cardData
   * @param {string} languageCode
   */
  updateCardData(cardData, languageCode) {
    this._lang = languageCode;
    this.cardData = cardData;
    this.keys = Array.from(cardData.keys());
    this.currentIndex = resolveCardIndex(this._lang, this.keys.length);
    this.updateCard();
    this._persistCardIndex();
  }
}
