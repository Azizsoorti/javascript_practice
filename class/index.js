


var a = [10, 20,30,40,50,60,70,80,90];
function abc(num){
var c = num.reverse();
return c;
}
var b = abc(a)
console.log(b);




for(let count = 0; count<=15;count++){
    count%2==0? console.log(`${count} is even`):console.log(`${count} is odd`);
    ;
   }




var string = prompt("please Enter a string ");
var len = string.length;
var msg = "it is a palindrome";
for (var i = 0; i < len/2; i++){
if( string[i] != string[len - 1 - i] ){
   msg = "it is not a palindrome";
}
}
document.write(`${string}: ${msg} `);


