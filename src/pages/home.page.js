const BasePage = require('./base.page');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://playwright.dev/';
  }

  async open() {
    await this.goto(this.url);
  }

  async getTitle() {
    return this.title();
  }
}

module.exports = HomePage;
