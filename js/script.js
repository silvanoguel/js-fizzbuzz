// MILESTONE 1
// % 3 = multipli di 3
// % 5 = multipli di 5
// % 15 = (3x5) multipli di 15 (più specifico)

// for (let i = 0; i <= 100; i++) {
//     if (i % 15 === 0) console.log("FizzBuzz");
//     else if (i % 3 === 0) console.log("Fizz");
//     else if (i % 5 === 0) console.log("Buzz");
//     else console.log (i);
// }


// MILESTONE 2
const gridElem = document.querySelector(".grid");
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        fizzBuzz = "fizzBuzz";
        classColor = "fizzbuzz";
    }   else if (i % 3 === 0) {
        fizzBuzz = "fizz";
        classColor = "fizz";
    }   else if (i % 5 === 0) {
        fizzBuzz = "buzz";
        classColor = "buzz";
    }  else {
        fizzBuzz = "buzz";
        classColor = "other";
    }
    console.log(i, fizzBuzz);
    gridElem.innerHTML += `<div class="box ${classColor}">${i}</div>`;
}

