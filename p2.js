/*
multiple of 7, print "Bang" instead of the number.
    For numbers which are multiples of 7 and 3 / 5, "append Bang"

multiple of 11, print "Bong" instead of the number.
    Do not print anything else in these cases.
    (E.g. 3 * 11 = 33: "Bong")

multiple of 13, print "Fezz" instead of the number.
    For multiples of most other numbers, the Fezz goes immediately
    in front of the first thing beginning with B,
    or at the end if there are none.
    (E.g. 5 * 13 = 65: "FezzBuzz", 3 * 5 * 13 = 195: "FizzFezzBuzz").
    Note that Fezz should be printed even if Bong is also present
    (E.g. 11 * 13 = 143: "FezzBong")

multiple of 17, reverse the order in which any fizzes, buzzes, bangs etc. are printed.
(E.g. 3 * 5 * 17 = 255: "BuzzFizz")

*/

// multipleOrNot(7,3)

for (let i = 1; i <= 100; i++) {
    var strList = []
    var number = i

    var dict = {
        3: "Fizz",
        5: "Buzz",
        7: "Bang",
        13: "Fezz"
    }

    // 11
    if (number%11==0) {
        if (number/11%13==0) {
            console.log("Bong")
            continue
        }
        console.log("FezzBong")
    }

    for (divider in [3,5,7]) {
        if (number % divider == 0) {
            number = number / i
            strList.push(dict[divider])
        }
    }

    // 13
    if (number%13 == 0) {


    }

    // 17
    if (number%17 == 0) {
        strList.reverse()
    }


    // output
    if (str.length == 0) {
        console.log(i)
    } else {
        console.log(strList.join(""))
    }
}