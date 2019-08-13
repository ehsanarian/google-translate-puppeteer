const puppeteer = require('puppeteer-core');
 
(async () => {
  const browser = await puppeteer.launch(
  {
	   headless: false,
	   executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
	   
  });
  const page = await browser.newPage();
  await page.goto('https://translate.google.com/#view=home&op=docs&sl=en&tl=fa');

  const input = await page.$('#tlid-file-input')
  await input.uploadFile('C:/Users/e.lotfi/Desktop/pooop/translate.txt')

  await page.click('.tlid-translate-doc-button.button')

  // await browser.close();
})();
