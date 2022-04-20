for (let i = 0; i <= 100; i++) {
    outputValue = i.toString()


    if (i % 3 == 0) {
        outputValue = "Fizz"
    }

    if (i % 5 == 0) {
        outputValue = "Buzz"
    }
    
    if (i % 15 == 0) {
        outputValue = "FizzBuzz"
    }

    console.log((outputValue))

}