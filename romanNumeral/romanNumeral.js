let number = document.querySelector('#number');
let roman = document.querySelector('#Roman');

let button= document.querySelector('button');


button.addEventListener('click', function(){
let num = number.value;

let string = '';
while(num >= 1000){
    num = num - 1000;
    string = string + 'M'
        
}
while(num >= 900){
    num = num - 900;
    string = string + 'CM';
}
while(num >= 800){
    num = num -800;
    string = string + 'DCCC'
}

while(num >= 700){
    num = num - 700;
    string = string + 'DCC';
}

while(num >= 600){
    num = num - 600;
    string = string + 'DC';
}

while(num >= 500){
    num = num - 500;
    string = string + 'D';
}

while(num >= 400){
    num = num - 400;
    string = string + 'CD';
}

while(num >= 300){
    num = num - 300;
    string = string + 'CCC';
}

while(num >= 200){
    num = num - 200;
    string = string + 'CC';
}

while(num >= 100){
    num = num - 100;
    string = string + 'C';
}

while(num >= 90){
    num = num - 90;
    string = string + 'XC';
}
while(num >= 80){
    num = num - 80;
    string = string + 'LXXX';
}
while(num >= 70){
    num = num - 70;
    string = string + 'LXX';
}
while(num >= 60){
    num = num - 60;
    string = string + 'LX';
}
while(num >= 50){
    num = num - 50;
    string = string + 'L';
}
while(num >= 40){
    num = num - 40;
    string = string + 'XL';
}
while(num >= 30){
    num = num - 30;
    string = string + 'XXX';
}
while(num >= 20){
    num = num - 20;
    string = string + 'XX';
}
while(num >= 10){
    num = num - 10;
    string = string + 'X';
}
while(num >= 9){
    num = num - 9;
    string = string + 'IX';
}
while(num >= 8){
    num = num - 8;
    string = string + 'VIII';
}
while(num >= 7){
    num = num - 7;
    string = string + 'VII';
}
while(num >= 6){
    num = num - 6;
    string = string + 'VI';
}
while(num >= 5){
    num = num - 5;
    string = string + 'V';
}
while(num >= 4){
    num = num - 4;
    string = string + 'IV';
}
while(num >= 6){
    num = num - 6;
    string = string + 'VI';
}
while(num >= 3){
    num = num - 3;
    string = string + 'III';
}
while(num >= 2){
    num = num - 2;
    string = string + 'II';
}
while(num >= 1){
    num = num - 1;
    string = string + 'I';
}

roman.value = string;


})









