var right = 0;
var wrong= 0;

function Lechitsa1(num){
    /* 4 */
    if (num == 2)
        ++ right;
    else
        right+0;
    document.getElementById("rishon").innerHTML =
        "<b>you got " + right + " ";

}
function Lechitsa2(num){
    if(num==3)
        ++right;
    else
        right+0;
    document.getElementById("sheni").innerHTML =
        "<b>you got " + right + " ";

}
function Lechitsa3(num){
    if(num==1)
        ++right;
    else
        right+0;
    document.getElementById("shlishi").innerHTML =
        "<b>you got " + right + " ";

}