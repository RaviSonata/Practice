// test suite name 
describe('Tutorialspoint Application', function () {
    // test case name
    it('Get Page Title', async function () {
        // URL launching
        await browser.url("https://www.tutorialspoint.com/about/about_careers.htm")
        await browser.maximizeWindow()
        //identify element with link text then click
       // await $("=Terms of Use").click()
        await $("*=Terms of").click()
        console.log('Page title after click: ' + await browser.getTitle())
    });
});