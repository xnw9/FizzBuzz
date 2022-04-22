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
                if (i == 0) {
                    strList = ["Fezz"].concat(strList)      // if first word has B, just combine
                } else {
                    strList.splice(i, 0, "Fezz")     // otherwise insert before it
                    found = true        // indicating that we have inserted Fezz
                }

                break       // jump out of for loop
            }
        }
        if (!found) {     // if no word with B, append Fezz
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
var readlineSync = require('readline-sync');
const userNum = readlineSync.question('Number to be converted: \n')
console.log(convert(userNum))
var next = userNext = readlineSync.question("Convert another one? y=yes, press any other keys to exit \n")
while (next == "y") {
    const userNum = readlineSync.question('Number to be converted: \n')
    console.log(convert(userNum))
    var next = userNext = readlineSync.question("Convert another one? y=yes, press any other keys to exit \n")
}

// print everything
// for (let i = 1; i <= 300; i++) {
//     console.log(convert(i))
// }