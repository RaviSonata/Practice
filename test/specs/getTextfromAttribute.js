// test suite name 
describe('Tutorialspoint Application', function () {
    // test case name
    it('Get Page Title', async function (){
    // URL launching
       await browser.url("https://www.tutorialspoint.com/about/about_careers.htm")
       //print page title in console
       console.log(await $("//li[text()='About Tutorialspoint']").getText() + " - is the text.")
    });    
 });