
function userFriends(user, ...friends) {
    //Q: now "...friends" is an array 

    console.log(user + ' has - ' + friends.length + ' - friends');    
    console.log('and they are - ' + friends[0] + ' , ' + friends[1] + ' , ' + friends[2] + ', ' + friends[3] + ', ' + friends[4] );
    //Q: see, i m accessing 4th index , but not crashing 
}


//------- REST 
console.log("~~~ REST example ~~~")

userFriends('Mahfuz ', 'AAAAA', true, 'CCCC', 222);  //Q: see, i m sending 3 data types - string, boolean, int

    
