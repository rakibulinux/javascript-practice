/* 
A+ = 80 - 100
A = 70-79
B = 60-69
C = 50-59
D = 33 - 49
F = >33

*/

let result = 10;

if(result < 33){
    console.log('You are fail')
}
else if(33 <= result && result <= 49){
    console.log("You got D Grate")
}
else if(50 <= result && result <= 59){
    console.log("You got C Grate")
}
else if(60 <= result && result <= 69){
    console.log("You got B Grate")
}
else if(70 <= result && result <= 79){
    console.log("You got A Grate")
}
else if(80 <= result && result <= 100){
    console.log("You got A+ Grate")
}
else{
    console.log("Result not found")
}