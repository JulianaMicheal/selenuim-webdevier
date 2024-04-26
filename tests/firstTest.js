const { By, Builder, Browser } = require('selenium-webdriver');

(async function firstTest() {
    // Launch browser
    let driver;
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        // Navigate to the application
        //await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
        await driver.get('https://tec-sound-pcc-duty-roster-for-april-2024.onrender.com/');


        await driver.findElement(By.id('button'));
    
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Close the browser
        if (driver) {
            await driver.quit();
        }
    }
})();






