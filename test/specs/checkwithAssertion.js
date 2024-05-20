// test suite name
describe('Tutorialspoint application', function(){
    //test case
    it('Checkbox', async function(){    
       // launch url
      await browser.url('https://the-internet.herokuapp.com/checkboxes')
       //identify checkbox with CSS then click
       const p = await $("input[type='checkbox']") 
       p.click()
       //verify if checked with assertion
       await expect(p).toBeSelected()
       //uncheck checkbox
       await p.click()
       //verify if not checked with assertion
       await expect(p).not.toBeSelected()
    });
 });