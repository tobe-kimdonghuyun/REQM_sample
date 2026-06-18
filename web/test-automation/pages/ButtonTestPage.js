const { BasePage } = require('./BasePage');

class ButtonTestPage extends BasePage {
    constructor(page) {
        super(page);
        this.btn1 = page.locator('#btn1');
        this.btn2 = page.locator('#btn2');
    }

    async navigate() {
        await super.navigate('/button_layout.html');
    }

    async getButton2Position() {
        return await this.btn2.evaluate(node => node.getBoundingClientRect().top);
    }
}

module.exports = { ButtonTestPage };
