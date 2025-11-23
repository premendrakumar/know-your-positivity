/**
 * UIManager - Handles UI updates based on language content
 */
export class UIManager {
  constructor() {
    this.headerElement = document.getElementById("kyp-header");
  }

  /**
   * Update header with localized content
   */
  updateHeader(headerContent) {
    this.headerElement.innerHTML = headerContent.title;
  }

  /**
   * Update all UI elements with localized content
   */
  updateUI(languageContent) {
    const { HeaderContent, ThanksNote } = languageContent;
    this.updateHeader(HeaderContent);
    // Note: ThanksNote element may not exist in HTML, so we check first
    const thanksElement = document.getElementById("thanksNote");
    if (thanksElement) {
      thanksElement.innerText = ThanksNote;
    }
  }
}

