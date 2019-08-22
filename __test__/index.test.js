describe('Google', () => {

  beforeAll(async () => {
    await page.goto('https://google.com')
  })

  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google')
  })

  it('should input "Justin"', async () => {
    await expect(page).toFill('input[name="q"]', 'Justin')
  })
});