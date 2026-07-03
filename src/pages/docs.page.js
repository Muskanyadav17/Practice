const BasePage = require('./base.page');

class DocsPage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://playwright.dev/docs/intro';
    this.heading = 'h1';
  }

  async open() {
    await this.goto(this.url);
  }

  async getHeading() {
    return this.textContent(this.heading);
  }
}

module.exports = DocsPage;
