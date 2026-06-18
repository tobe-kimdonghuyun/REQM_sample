class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(path) {
        await this.page.goto(path);
    }

    async waitForLoad() {
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = { BasePage };
