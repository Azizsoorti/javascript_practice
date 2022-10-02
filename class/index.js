

function bmicalcu (weight, height){
// var bmi = weight/(height*height);
var bmi = weight/ Math.pow(height,2);
return Math.round(bmi);
}
 var calcu = bmicalcu(70,2);
 console.log(calcu);





// const number = prompt('Enter the number of terms: ');
// let n1 = 0, n2 = 1, nextTerm;

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }




// function xyz (){
// var max = Math.max(11,22,33,44,55,66,77,88,99) 
// return max;
// };

// document.write( xyz());



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


