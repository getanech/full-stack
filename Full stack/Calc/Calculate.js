let buttons = document.querySelectorAll("button");//מערך בשם button ששומר כל איבר שיש לו קלאס בשם button
let number = "";
let sum = "";
let number2="";
let boolean=true;
let type=0;
for (const b of buttons) {//לולאה שעוברת על כל המערך
    b.addEventListener("click", function () {//פונקציה שמקשיבה למשהו שעושה הכפתור
        if (b.textContent==='='){
            if (type===1){
                 sum =add(Number(number),Number(number2)).toString();
            }
            else if (type===2){
                 sum =multiplication(Number(number),Number(number2)).toString();
            }
            else if(type===3){
                sum=division(Number(number),Number(number2)).toString();
            }
            else if (type===4){
                sum=minus(Number(number),Number(number2)).toString();
            }
            document.getElementById("input").value = sum//מציגה את הערך
        }
        else if (b.textContent==='*'){
            type=2;
            boolean=false;
            document.getElementById("input").value = "";
        }
        else if (b.textContent === '+') {
            type=1;
            boolean=false;
            document.getElementById("input").value = "";//מציגה את הערך

        } else if (b.textContent==='/'){
            type=3;
            boolean=false;
            document.getElementById("input").value = "";
        }else if(b.textContent=='-'){
            type=4;
            boolean=false;
            document.getElementById("input").value = "";
        }
        else if(boolean){
            number += b.textContent;
            document.getElementById("input").value = number;//מציגה את הערך
        }
        else {
            number2 += b.textContent;
            document.getElementById("input").value = number2;
        }
    });
}
function add(num1, num2) {
    return num1 + num2;
}
function multiplication(num1,num2){
    return num1*num2;
}
function division(num1,num2){
    return num1/num2;
}
function minus(num1,num2){
    return num1-num2;
}

