const input = "javascript is awesome";
let output;
for (let i=0; i<input.length; i++){
    if (input[i]==="a") {
        output+="4";
    }
    else if (input[i]==="e") {
        output+="3";
    }
    else if (input[i]==="o"){
        output+="0";
    }
    else if (input[i]==="i"){
        output+="1";
    }
    else {
        output+=input[i];
    }

}
output = "";
console.log(output)
const name = prompt("Как вас зовут?");
alert("Привет, " + name);
const age = prompt("Сколько вам лет?");
if (age>=18){
    alert("Вам больше 18, проходите")
}
else {
    alert("Вам нельзя посещать этот сайт, вам меньше 18")
}
const zagadka = prompt("Два конца, два кольца. Гвоздик по середине");
if (zagadka==="ножницы"){
    alert("Ответ верный")
}
else {
    alert("Ответ не верный")
}
const letter = confirm("Ты отправил письмо?");
if (letter){
    alert("true");
}
else {
    alert("false");
}
const a = prompt("Введите вашу заработную плату");
console.log(a)
const b = ((a / 100) * 15) + a * 1;
alert("Премия 15%-"+b);
const c = ((b / 100) * 90);
alert("Налог 10%-"+c);
const d = c - 190;
alert("поход в магазин 190 рублей-"+d);
const s = d / 2;
console.log(s)
alert("Жене отдал половину-"+s);