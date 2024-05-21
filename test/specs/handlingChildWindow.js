// test suite name
describe('Tutorialspoint application', function(){
    //test case
    it('Child Window', async function(){    
       // launch url
       await browser.url('https://secure.indeed.com/account/login')  
       //identify element then click
       $('#apple-signin-button').click()
       //get all window handle ids in list
       var l = browser.getWindowHandle()
       //switch to child window
       await browser.switchToWindow(l[1])
       //get page title of child window
       console.log(browser.getTitle() + ' - Page title of child window')
       //close child window
       await browser.closeWindow()
       //switch to parent window
       await browser.switchToWindow(l[0])
       //get page title of parent window
       console.log(browser.getTitle() + ' - Page title of parent window')      
    });
 });