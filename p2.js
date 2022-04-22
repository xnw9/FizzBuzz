// part 2 + stretch part 1

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

function convert(number) {
    var strList = []

    var dict = {
        3: "Fizz",
        5: "Buzz",
        7: "Bang",
        13: "Fezz"
    }
    var dividers = [3, 5, 7]

    // 11
    if (number % 11 == 0) {
        if (number / 11 % 13 == 0) {
            return "FezzBong"
        }
        return "Bong"
    }

    // 3,5,7
    for (let j in dividers) {
        if (number % dividers[j] == 0) {
            // number = number / dividers[j]        // no need
            strList.push(dict[dividers[j]])
        }
    }

    // 13
    if (number % 13 == 0) {

        if (strList.length == 0) {     // just 13, so return Fezz
            return "Fezz"
        }

        let found = false
        for (let i in strList.length) {
            if ("B" in strList[i]) {        // more than 13, check if there is word starting with B
                strList.splice(i, 0, "Fezz")     // if yes, just take its position (since that's the first one)
                found = true        // indicating that we have inserted Fezz
                break       // jump out of for loop
            }
        }
        if (!found) {     // if no, append Fezz
            strList.push("Fezz")
        }
    }

    // 17
    if (number % 17 == 0) {
        strList.reverse()
    }


    // output
    if (strList.length == 0) {
        return number
    } else {
        return strList.join("")
    }
}

// user input
// const userNum = prompt('Number to be converted')
// console.log(convert(userNum))

// print everything
for (let i = 1; i <= 300; i++) {
    console.log(convert(i))
}

/*
next step

- nvm i npm
- npm i prompt-sync
- var prompt = require('prompt-sync')()
 */