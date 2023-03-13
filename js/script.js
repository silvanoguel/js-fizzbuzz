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
let containerElem = document.querySelector(".container");
for (let i = 1; i <= 100; i++) {
    let boxText;
    let boxClass;
    if (i % 15 === 0) {
        console.log(i, "FizzBuzz");
        boxText = "FizzBuzz";
        boxClass = "fizzbuzz";
    }   else if (i % 3 === 0) {
        console.log(i, "Fizz");
        boxText = "Fizz";
        boxClass = "fizz";
    }   else if (i % 5 === 0) {
        console.log(i, "Buzz");
        boxText = "Buzz";
        boxClass = "buzz";
    }  else {
        console.log(i);
        boxText = i;
        boxClass = "other";
    }

    containerElem.innerHTML += `<div class="box ${boxClass}">${boxText}</div>`;
}

