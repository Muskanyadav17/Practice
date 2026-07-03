const BasePage = require('./base.page');

class SearchPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchInput = 'input[type="search"], input[placeholder*="Search"]';
    this.results = '.DocSearch-Dropdown, .search-results';
  }

  async open() {
    await this.goto('https://playwright.dev/');
  }

  async search(query) {
    await this.fill(this.searchInput, query);
    await this.page.keyboard.press('Enter');
    await this.page.waitForSelector(this.results, { timeout: 5000 }).catch(() => {});
  }

  async getResultsText() {
    return this.textContent(this.results);
  }
}

module.exports = SearchPage;
