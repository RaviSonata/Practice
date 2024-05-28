// test suite name
describe('Tutorialspoint application', function(){
    //test case
    it('Drag and Drop', async () => {    
       // launch url
       await browser.url('https://jqueryui.com/droppable/')  
       //maximize browser
       await browser.maximizeWindow()
       //switch to frame
       await browser.switchToFrame($(".demo-frame"))
       //identify source element
       const src = $('#draggable')   
       //identify target element
       const trg = $('#droppable')  
       //drag and drop
       await browser.pause(20000)
       src.dragAndDrop(trg)
    });
 });