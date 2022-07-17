let para = document.getElementsByTagName("p");

let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let operator = document.getElementById("operator");
let result = document.getElementById("result");

function calculate(){
   let num1 = parseInt(input1.value);
   let num2 = parseInt(input2.value);
   
   let op = operator.value;

    if(op === "/" && num2 === 0){
        alert("You cannot perform this operation");
        return ;
    }
   switch(op){
    case "+":
        result.value =  (num1 + num2);
        break;
    case "-":
        result.value =  (num1 - num2);
        break;
    case "/":
        result.value =  (num1 / num2);
        break;
    case "*":
        result.value =  (num1 * num2);
        break;
    default:
        break;
   }
}

function changeText(){
    para[0].innerText = "bye";
    para[1].innerText="Good Bye";
    para[2].innerText = "AccioJob";
    para[3].innerText = "Students";
    para[4].innerText = "Holla!!"

    para[4].style.color = "red";
}