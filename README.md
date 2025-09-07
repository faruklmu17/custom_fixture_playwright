# Custom Playwright Fixture Example

[![Playwright](https://img.shields.io/badge/Playwright-E2E%20Testing-45ba4b?logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6?logo=typescript)](https://www.typescriptlang.org/)

This project demonstrates how to create and use a **custom Playwright fixture** in TypeScript.  
Instead of repeating setup steps (like signing up a user) in every test, we use a **fixture** to prepare the state once and share it across tests.

📺 **Video Tutorial:** [Watch on YouTube](https://youtu.be/tkjPe86JpGk)  
📝 **Blog Post:** [Read the full walkthrough](https://faruk-hasan.com/blog/playwright-fixtures.html)

---

## 🚀 Features
- Covers **built-in fixtures** (`browser`, `context`, `page`)  
- Demonstrates **custom fixture** (`signedUpPage`) for signup flow  
- Cleaner and reusable test setup  
- Written in **TypeScript** with Playwright Test Runner  

---

## 📂 Project Structure
```
tests/
├── fixtures.ts         # Custom fixture definition
├── example.spec.ts     # Test file using the fixture
```

---

## 📦 Prerequisites
Make sure you have:
- [Node.js](https://nodejs.org/) (>= 16.x)
- [Playwright](https://playwright.dev/) installed globally or locally

---

## ⚙️ Installation
Clone the repo and install dependencies:

```bash
git clone https://github.com/faruklmu17/custom_fixture_playwright.git
cd custom_fixture_playwright
npm install
```

Install Playwright browsers if not already done:

```bash
npx playwright install
```

---

## 🧪 Running the Tests
Run tests in **headless mode** (default):

```bash
npx playwright test
```

Run tests in **headed mode** (see browser UI):

```bash
npx playwright test --headed
```

Run a specific test:

```bash
npx playwright test tests/example.spec.ts
```

---

## 🔑 Key Code Snippets

### Defining the Fixture
```ts
import { test as base, expect, Page } from "@playwright/test";

type MyFixtures = {
  signedUpPage: Page;
};

const test = base.extend<MyFixtures>({
  signedUpPage: async ({ page }, use) => {
    await page.goto("https://faruk-hasan.com/automation/signup.html");

    await page.locator("#username").fill("myUser");
    await page.locator("#email").fill("test@example.com");
    await page.locator("#password").fill("Password123!");
    await page.locator("#confirmPassword").fill("Password123!");
    await page.getByRole("button", { name: "Sign Up" }).click();

    await use(page);
  },
});

export { test, expect };
```

### Using the Fixture
```ts
import { test, expect } from "./fixtures";

test("login page loads correctly", async ({ signedUpPage }) => {
  await signedUpPage.waitForTimeout(5000);
  await expect(signedUpPage).toHaveTitle("Login - Automation Practice");
});
```

---

## 📚 Learn More
- [Playwright Docs – Fixtures](https://playwright.dev/docs/test-fixtures)
- [My Blog Post](https://faruk-hasan.com/blog/playwright-fixtures.html)
- [YouTube Video Tutorial](https://youtu.be/tkjPe86JpGk)

---

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).
