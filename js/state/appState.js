/**
 * Versioned application state in localStorage (JSON).
 * Keeps theme/language on their legacy keys; this store is for everything else.
 */
import { STORAGE_KEYS } from "../config/storageKeys.js";

const STATE_VERSION = 1;

/**
 * @typedef {Object} AppStateShape
 * @property {number} v
 * @property {Record<string, number>} [cards] — language code → last card index
 */

/** @returns {AppStateShape} */
function defaultState() {
  return { v: STATE_VERSION, cards: {} };
}

/** @returns {AppStateShape} */
function loadRaw() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.appState);
    if (!raw) return defaultState();
    const data = JSON.parse(raw);
    if (typeof data !== "object" || data === null) return defaultState();
    if (data.v !== STATE_VERSION) {
      // Future: migrate older shapes here
      return defaultState();
    }
    if (!data.cards || typeof data.cards !== "object") {
      data.cards = {};
    }
    return data;
  } catch {
    return defaultState();
  }
}

/** @param {AppStateShape} state */
function saveRaw(state) {
  try {
    localStorage.setItem(STORAGE_KEYS.appState, JSON.stringify(state));
  } catch {
    /* quota / private mode */
  }
}

/**
 * Last viewed card index for a language (0-based), or null if never saved.
 * @param {string} lang
 * @returns {number | null}
 */
export function getCardIndexForLanguage(lang) {
  const state = loadRaw();
  const idx = state.cards?.[lang];
  return typeof idx === "number" && Number.isInteger(idx) && idx >= 0 ? idx : null;
}

/**
 * Persist current card index for a language.
 * @param {string} lang
 * @param {number} index
 * @param {number} maxIndex — inclusive upper bound (keys.length - 1)
 */
export function setCardIndexForLanguage(lang, index, maxIndex) {
  if (!lang || maxIndex < 0) return;
  const clamped = Math.max(0, Math.min(index, maxIndex));
  const state = loadRaw();
  state.cards = state.cards || {};
  state.cards[lang] = clamped;
  saveRaw(state);
}

/**
 * Clamp a stored index to current deck size.
 * @param {string} lang
 * @param {number} deckLength — number of cards
 * @returns {number}
 */
export function resolveCardIndex(lang, deckLength) {
  if (deckLength <= 0) return 0;
  const max = deckLength - 1;
  const saved = getCardIndexForLanguage(lang);
  if (saved === null) return 0;
  return Math.max(0, Math.min(saved, max));
}
