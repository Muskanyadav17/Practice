# Playwright (JavaScript) — Practice

Setup and run Playwright tests:

- Install dependencies:

```bash
cd Practice
npm install
```

- Install Playwright browsers:

```bash
npx playwright install
```

- Run tests:
 - Run tests:

```bash
npm test
```

Page Object Model

- Page objects live under `src/pages` (e.g. `BasePage`, `HomePage`).
- Example POM test: `tests/pom.example.spec.js` shows how to instantiate a page object and call its methods.

```bash
cd Practice
npm test
```

Additional pages and components:

- `src/pages/docs.page.js` — `DocsPage` with `open()` and `getHeading()` helpers.
- `src/pages/search.page.js` — `SearchPage` with `open()`, `search(query)`, and `getResultsText()`.
- `src/components/header.component.js` — `HeaderComponent` with `clickSearch()` helper.

Use these page objects in tests by requiring them from `src/pages` or `src/components`.
