class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async click(selector) {
    await this.page.click(selector);
  }

  async fill(selector, value) {
    await this.page.fill(selector, value);
  }

  async textContent(selector) {
    return this.page.textContent(selector);
  }

  async title() {
    return this.page.title();
  }
}

module.exports = BasePage;
