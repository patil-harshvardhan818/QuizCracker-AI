# QuizCracker AI

<img src="icon.png" alt="Alt Text" style="width:20%; height:auto;">

**QuizCracker AI** is a lightweight browser extension that helps you quickly solve multiple-choice questions (MCQs) with the power of AI.  
Just select the question along with its options, click the extension, and get the answer instantly!

## ✨ Features

- **AI-Powered Answering**: Analyze any MCQ and get the most likely correct option.
- **Fast and Simple**: Select → Click → Answer!
- **No Setup Hassle**: Minimal configuration required, works directly in your browser.
- **User-Friendly**: Clean interface with quick responses.

## 🚀 How It Works

1. **Select the full MCQ**, including the question and all options.

    Example:
    ```
    3. What is Linux?
    Kernel
    File Explorer
    Browser
    Operating System
    ```

2. **Click the QuizCracker AI extension icon** in your browser toolbar.

3. The extension will **analyze the selected text** and show the correct answer inside a popup window.

    Example output:
    ```
    Kernel
    ```

That's it! Quick, simple, and effective.

## 🛠 Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/patil-harshvardhan818/QuizCracker-AI.git
   ```

2. **Load the Extension**:
   - Open your browser and navigate to the extensions page:
     - For Chrome: `chrome://extensions/`
     - For Edge: `edge://extensions/`
   - Enable **Developer Mode**.
   - Click on **Load unpacked** and select the cloned project folder.

## ⚙️ Configuration (API Key Setup)

The extension uses an AI service that requires an API key.

1. **Get an API Key**:
   > Currently, the extension is set up to only work with Google's Gemini API.
   - Register or log in to the AI service provider to get your API key. (for example, [Gemini](https://aistudio.google.com/apikey)).

2. **Configure the API Key**:
   - Rename the file `.env.js.example` to `.env.js`.
   - Open `.env.js` and replace the placeholder:
     ```javascript
     const API_KEY = 'your-api-key-here';
     ```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork the repository and submit a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
