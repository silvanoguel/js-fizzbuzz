// % 3 = multipli di 3
// % 5 = multipli di 5
// % 15 = (3x5) multipli di 15 (più specifico)

for (let i = 0; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log (i);
}