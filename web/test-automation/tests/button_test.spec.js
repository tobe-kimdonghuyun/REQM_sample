const { test, expect } = require('@playwright/test');
const { ButtonTestPage } = require('../pages/ButtonTestPage');

test.describe('버튼 레이아웃 자동화 테스트', () => {
    test('버튼 위치 및 스크롤 방지 검증', async ({ page }) => {
        const buttonPage = new ButtonTestPage(page);
        await buttonPage.navigate();

        // 1. 버튼 존재 확인
        await expect(buttonPage.btn1).toBeVisible();
        await expect(buttonPage.btn2).toBeAttached();

        // 2. 두 번째 버튼이 화면 밖에 있는지 확인 (v24 등 확장성 고려)
        const viewportHeight = page.viewportSize().height;
        const btn2Top = await buttonPage.getButton2Position();
        
        console.log(`Viewport Height: ${viewportHeight}, Button 2 Top: ${btn2Top}`);
        expect(btn2Top).toBeGreaterThan(viewportHeight);

        // 3. 스크롤바가 없는지 확인 (overflow: hidden 여부 확인)
        const overflowStyle = await page.evaluate(() => {
            return window.getComputedStyle(document.body).overflow;
        });
        expect(overflowStyle).toBe('hidden');
    });
});
