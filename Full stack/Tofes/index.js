function checkfullname(fullname) {
    if (!fullname.includes(" ")) {
        return false;
    }return true;
}
function checkEmail(email) {
    if (!email.includes("@")) {
        return false; // לא מכיל @
    }
    return true; // תקין
}
function checkMessageLength(message) {
    if (message.length >= 100) {
        return false; // חרוג מ-100 תווים
    }
    return true; // תקין
}
document.getElementById("button").addEventListener("click" , click);
function click(){
    let fullName = document.getElementById("fn").value;
    if(checkfullname(fullName)){
        document.getElementById("label").innerHTML = "";
    }
    let fullEmail = document.getElementById("ad").value;
    if(checkEmail(fullEmail)){
        document.getElementById("label1").innerHTML = "";
    }
    let message = document.getElementById("si").value;
    if(checkEmail(fullEmail)){
        document.getElementById("label2").innerHTML = "";
    }
}

