# Playwright Herokuapp Tests

This project contains automated tests for the [The Internet Herokuapp](https://the-internet.herokuapp.com/) website using **Playwright Test**.

---

## 📦 Installation

1. Clone the repository:

```
git clone https://github.com/username/playwright-herokuapp.git
cd playwright-herokuapp```

2. Install dependencies:

```npm install

3. Install the required Playwright browsers:

npx playwright install

## 🚀 Running Tests

Run all tests:

npx playwright test


Run a specific test with the browser visible (headed):

npx playwright test tests/herokuapp.spec.js --headed


Use the Playwright Test Inspector for debugging:

npx playwright test --debug

## 🧪 Test Structure

All tests are located in the tests/ folder.

Example test: herokuapp.spec.js performs login and logout on https://the-internet.herokuapp.com/login.

## ⚙️ Configuration

The playwright.config.js file includes:

Execution in Chromium and Firefox

Headless mode disabled to see the browser

Ignores SSL errors (ignoreHTTPSErrors: true)

Trace recording for failing tests

Slow motion for debugging