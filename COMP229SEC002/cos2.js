
function parent() {
    const message = 'Hello World --- from cos2';
    function child() {
        alert (message);
    }
    return child;
}
    
const childFN = parent();
    
childFN();      //Q: ???????

