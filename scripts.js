function timer() {
    "use strict";
    var date = new Date();
    document.getElementById("timer").innerHTML = trueMonth() + ' ' + trueDay() + ' ' + date.getFullYear();
}

function trueDay() {
    "use strict";
    var newDate = new Date().getDate();
    var modulus = newDate % 10;
    
    if (String(newDate).charAt(0) !== 1) {
        switch (modulus) {
            case 1:
                newDate = newDate + 'st';
                break;
            case 2:
                newDate = newDate + 'nd';
                break;
            case 3:
                newDate = newDate + 'rd';
                break;
            default:
                newDate = newDate + 'th';
        }
    } else {
            newDate = newDate + 'th';
    }
    return newDate;
}

function trueMonth() {
    "use strict";
    var date = new Date();
    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return month[date.getMonth()];
}