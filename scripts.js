function timer() {
    var date = new Date();
    document.getElementById("timer").innerHTML = trueMonth() + ' ' + trueDay() + ' ' + date.getFullYear();
}

function trueDay(){
    var date = new Date();
    var newDate = date.getDate();
    var modulus = date.getDate() % 10;
    
    if(String(newDate).charAt(0) != 1){
        switch(modulus){
            case 1:
                newDate = newDate +'st';
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
    }else{
            newDate = newDate + 'th';
    }
    return newDate;
}

function trueMonth(){
    var date = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var newMonth = months[date.getMonth()];
    return newMonth;
}