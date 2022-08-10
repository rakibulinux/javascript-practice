const numbers = [12, 23, 34, 56, 67, -34, 76, 34, 67, -64]

function onlyPositive(numbers){
    let number = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        // console.log(element)
        if(element >= 0){
            number.push(element)
        }
        else{
            return number;
        }
    }return number;
}

const positiveNumber = onlyPositive(numbers);
console.log(positiveNumber)