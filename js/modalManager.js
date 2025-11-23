/**
 * ModalManager - Handles about modal display and interactions
 */
export class ModalManager {
  constructor() {
    this.modal = document.getElementById("about-modal");
    this.aboutButton = document.getElementById("about-btn");
    this.closeButton = document.getElementById("close-modal");
    this.modalTitle = this.modal.querySelector("h2");
    this.modalContent = this.modal.querySelector("p");
  }

  /**
   * Initialize modal event listeners
   */
  initialize() {
    this.aboutButton.addEventListener("click", () => this.open());
    this.closeButton.addEventListener("click", () => this.close());
    
    // Close modal when clicking outside
    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });
  }

  /**
   * Update modal content with about information
   */
  updateContent(aboutContent) {
    this.modalTitle.textContent = aboutContent.title;
    this.modalContent.innerHTML = `
      <strong>What:</strong> ${aboutContent.description}<br><br>
      <strong>Why:</strong> ${aboutContent.why}<br><br>
      <span style="font-size: 0.7rem; color: gray;">Version: ${aboutContent.version}</span>
    `;
    this.closeButton.innerHTML = aboutContent.closeButtonTitle;
  }

  /**
   * Open the modal
   */
  open() {
    this.modal.classList.remove("opacity-0", "pointer-events-none");
  }

  /**
   * Close the modal
   */
  close() {
    this.modal.classList.add("opacity-0", "pointer-events-none");
  }
}

