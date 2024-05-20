// test suite name
describe('Tutorialspoint application', function () {
   //test case
   it('Navigation', async () => {
      // launch url
      await browser.url('https://www.tutorialspoint.com/about/about_careers.htm')
      await browser.maximizeWindow()
      // navigate to another url
      await browser.navigateTo("https://www.tutorialspoint.com/codingground.htm")
      //navigate back in history  
      await browser.back()
      //get title back in browser history
      console.log('Back in Browser history: ' + await browser.getTitle())
      //navigate forward in history  
      await browser.forward()
      //get title forward in browser history
      console.log('Forward in Browser history: ' + await browser.getTitle())
      //refresh browser
      await browser.refresh()
      //get title after refresh
      console.log('Page Title after refresh: ' + await browser.getTitle())
   });
});