describe('Google', () => {

  beforeAll(async () => {
    await page.goto('https://google.com')
  })

  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google')
  })

  it('should search "Justin"', async () => {
    await page.focus('input[name="q"]')
    await page.keyboard.type('Justin')
    await page.keyboard.press('Enter')
    await page.waitForNavigation()
    await expect(page).toMatch('Justin Bieber')
  })
});