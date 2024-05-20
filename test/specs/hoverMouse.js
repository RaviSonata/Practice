// test suite name
describe('Tutorialspoint application', function(){
    //test case
    it('Invisible Element', async function(){    
       // launch url
       browser.url('https://www.amazon.com/')  
       //identify element then hover mouse
       const e = $("#nav-link-accountList")
       await browser.pause(2000)
       e.moveTo()
       await browser.pause(2000)
       //click on hidden element
       $('=Sign in').click()
       //get page title
       console.log(browser.getTitle() + ' - Page title after click')
    });
 });