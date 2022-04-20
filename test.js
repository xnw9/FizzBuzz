function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        outputValue = i.toString()



        if (i % 5 == 0) {
            outputValue = "Buzz"


            if ((i / 5) % 3 == 0) {
                outputValue = "FizzBuzz"
                console.log(outputValue)
                continue
            }

        }

        if (i % 3 == 0) {
            outputValue = "Fizz"
        }

        /* A liiiiitle bit quicker? */

        console.log((outputValue))

    }
}
fizzbuzz()