var button = document.querySelector('.btn'),
    num = document.getElementById('num').value,
    textarea = document.querySelector('textarea');
    
    button.onclick = function arrayCheck() {
        var myList = textarea.value.split('\n');
    for (var i = 0, ln = myList.length; i < num+1; ++i) {
        if (myList[i].match(/[a-z]/) && myList[i].match(/[A-Z]/) && myList[i].match(/[0-9]/) && myList[i].length >=10) {
            myList[i] = myList[i] + ' is strong';
            } else {
                myList[i] = myList[i] + ' is weak';
            }
            alert(myList[i]);
    }
    }