# JavaScript Modules

This directory contains the modular JavaScript code for the Know Your Positivity application.

## Module Structure

### `app.js`
Main application entry point that coordinates all modules and initializes the application.

### `cardManager.js`
Handles card navigation and display logic:
- Card data management
- Previous/Next navigation
- Card content updates

### `themeManager.js`
Manages dark/light mode theme switching:
- Theme persistence in localStorage
- Theme toggle functionality
- Initial theme loading

### `languageManager.js`
Handles language switching and localization:
- Language data management
- Language switching logic
- Language button updates

### `modalManager.js`
Manages the about modal:
- Modal open/close functionality
- Content updates
- Event handling

### `uiManager.js`
Handles UI updates based on language content:
- Header updates
- General UI element updates

## Architecture

The application follows a modular architecture where each manager class handles a specific concern:

```
App (app.js)
├── LanguageManager (languageManager.js)
├── CardManager (cardManager.js)
├── ThemeManager (themeManager.js)
├── ModalManager (modalManager.js)
└── UIManager (uiManager.js)
```

All modules are ES6 classes that can be easily tested, extended, and maintained independently.

