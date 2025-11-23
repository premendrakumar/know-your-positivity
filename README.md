# Know Your Positivity 🚀

A beautiful, interactive web application that helps you unlock your inner power through motivational frameworks and positivity models. Navigate through inspiring cards that guide you on your journey of self-improvement and personal growth.

## ✨ Features

- **📱 Card-Based Navigation**: Browse through motivational content with intuitive prev/next controls
- **🌓 Dark Mode**: Toggle between light and dark themes (preference saved in localStorage)
- **🌍 Multi-Language Support**: Available in English and Hindi (हिंदी)
- **💡 Motivational Frameworks**: Learn about various models including:
  - Cognitive Loop (Thinking & Execution Framework)
  - Data Processing Model
  - Motivation & Growth Model (4 Pushes Model)
  - Generalized Learning Plan
  - Layered Approach
  - SHANTI Recursive Comeback Model
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **💾 Persistent Settings**: Your theme and language preferences are saved automatically

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or build process required!

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/know-your-positivity.git
   cd know-your-positivity
   ```

2. Open `index.html` in your web browser:
   - Simply double-click the file, or
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. Navigate to `http://localhost:8000` in your browser

## 📖 Usage

- **Navigate Cards**: Use the ⬅️ and ➡️ buttons to browse through different motivational frameworks
- **Switch Language**: Click the language button (🇮🇳 हिंदी / 🇬🇧 English) in the footer to toggle between languages
- **Toggle Theme**: Click the 🌙 Dark Mode / ☀️ Light Mode button to switch themes
- **About**: Click the ℹ️ About button to learn more about the project

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **TailwindCSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript (ES6 Modules)**: No frameworks, pure JavaScript
- **LocalStorage API**: For persisting user preferences

## 📁 Project Structure

```
know-your-positivity/
├── assets/
│   └── a-studious-student.png  # Favicon
├── js/                    # JavaScript modules (modular architecture)
│   ├── app.js            # Main application coordinator
│   ├── cardManager.js    # Card navigation logic
│   ├── themeManager.js   # Dark/light mode management
│   ├── languageManager.js # Language switching
│   ├── modalManager.js   # About modal handling
│   ├── uiManager.js      # UI updates
│   └── README.md         # Module documentation
├── data.en.js            # English content data
├── data.hi.js            # Hindi content data
├── languageConfig.js     # Language configuration
├── index.html            # Main HTML file
├── changelog.md          # Project changelog
├── LICENSE               # MIT License
└── README.md             # This file
```

### Code Organization

The codebase follows a **modular architecture** with separate manager classes for different concerns:
- **CardManager**: Handles card navigation and display
- **ThemeManager**: Manages theme switching and persistence
- **LanguageManager**: Handles language switching and localization
- **ModalManager**: Manages modal interactions
- **UIManager**: Updates UI elements based on language
- **App**: Coordinates all modules and initializes the application

This structure makes the code more maintainable, testable, and easier to extend.

## 🎯 Current Version

**v1.0.4** - Latest release with Hindi language support

See [changelog.md](changelog.md) for detailed version history and upcoming features.

## 🤝 Contributing

Contributions are welcome! This project is open-source and available under the MIT License. Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Add translations for new languages
- Improve documentation

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).  
Feel free to use, modify, and contribute. Just don't forget to give credit! 😊

## 💭 About

**Know Your Positivity** was created with the belief that sometimes, all we need is a little push to see the brighter side of life! 🌟

Every day is a new chance to grow and inspire others. This tool helps you unlock your inner power through motivational frameworks and positivity models.

---

🚀 *Stay positive & keep unlocking your potential!* 🔥
