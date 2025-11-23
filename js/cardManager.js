/**
 * CardManager - Handles card navigation and display
 */
export class CardManager {
  constructor(cardData) {
    this.cardData = cardData;
    this.currentIndex = 0;
    this.keys = Array.from(cardData.keys());
    this.titleElement = document.getElementById("title");
    this.descElement = document.getElementById("desc");
  }

  /**
   * Update the displayed card content
   */
  updateCard() {
    const { title, desc } = this.cardData.get(this.keys[this.currentIndex]);
    this.titleElement.innerHTML = title;
    this.descElement.innerHTML = desc;
  }

  /**
   * Navigate to the previous card
   */
  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.keys.length) % this.keys.length;
    this.updateCard();
  }

  /**
   * Navigate to the next card
   */
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.keys.length;
    this.updateCard();
  }

  /**
   * Initialize card navigation with event listeners
   */
  initialize() {
    document.getElementById("prev").addEventListener("click", () => this.previous());
    document.getElementById("next").addEventListener("click", () => this.next());
    this.updateCard(); // Initial card load
  }

  /**
   * Update card data when language changes
   */
  updateCardData(cardData) {
    this.cardData = cardData;
    this.keys = Array.from(cardData.keys());
    this.currentIndex = 0; // Reset to first card on language change
    this.updateCard();
  }
}

