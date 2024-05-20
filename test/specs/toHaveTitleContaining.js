
import expect from 'chai';
// test suite name
describe('Tutorialspoint application', function(){
    //test case
    it('Assertion with expect', async function(){    
       // launch url
       await browser.url('https://www.tutorialspoint.com/about/about_careers.htm')
       //identify element with link text then click
       $("=Terms of Use").click()
       await browser.pause(1000)
       //verify page title with assertion
       await expect(browser).toHaveTitleContaining('Terms of Use - Tuter')
    });
 });