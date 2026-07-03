class HeaderComponent {
  constructor(page) {
    this.page = page;
    this.searchButton = 'button[aria-label="Search"], .DocSearch-Button';
  }

  async clickSearch() {
    await this.page.click(this.searchButton);
  }
}

module.exports = HeaderComponent;
