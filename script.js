// Part 1: Fizz Buzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Part 2: Prime Time
// Declare an arbitrary number:
let x = 13;

while (true) {
    let isPrime = true;

    x++;

    for(let i = 2; i < x; i++){
        if(x%i === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(`The next prime number is ${x}`);
        break;
    }
}

// Part 3: Feeling Loopy

const string = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

console.log(string.length);

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";


let counter = 1;
for(let i = 0; i <string.length; i++) {
    if(counter === 1){
        cell1 += string[i];
        //add in cell 1
    }
    if(counter === 2){
        cell2 += string[i];
        //add in cell 2
    }
    if(counter === 3){
        cell3 += string[i];
        //add in cell 3
    }
    if(counter === 4){
        cell4 += string[i];
        //add in cell 3
    }
    if(string[i] === ","){
        counter += 1;
    }
    if(string[i] === '\n'){
        console.log(cell1, cell2, cell3, cell4);
        cell1 = cell2 = cell3 = cell4 = "";
        counter = 1;
        continue;
    }
}