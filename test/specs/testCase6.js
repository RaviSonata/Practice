// test suite name
describe('Tutorialspoint application', function(){
    //test case
    it('Navigation', function(){    
       // launch url
       browser.url('https://www.tutorialspoint.com/about/about_careers.htm')
       // navigate to another url
       browser.navigateTo("https://www.tutorialspoint.com/codingground.htm")
       //navigate back in history  
       browser.back()
       //get title back in browser history
       console.log('Back in Browser history: ' + browser.getTitle())
       //navigate forward in history  
       browser.forward()
       //get title forward in browser history
       console.log('Forward in Browser history: ' + browser.getTitle())
       //refresh browser
       browser.refresh()
       //get title after refresh
       console.log('Page Title after refresh: ' + browser.getTitle())
    });
 });