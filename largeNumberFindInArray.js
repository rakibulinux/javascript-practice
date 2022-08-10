let numbers = [45, 56, 67, 78, 89, 88, 87, 80, 83, 95, 99, 98];

function largeNumgerFind(numbers){
    let unique = []
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > 80){
            unique.push(element)
        }
    }return unique;
}

const getMoreThe80Numbers = largeNumgerFind(numbers)
console.log("Biger then 80", getMoreThe80Numbers)