
function parent() {

    const message = 'Hello World -- from clos';
    
    function child() {
        alert (message);
        // this will show a msg window on screen 
    }
    
    child();
}

parent();
