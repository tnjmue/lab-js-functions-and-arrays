// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {

    if ((typeof num1 === 'number') && (typeof num2 === 'number')) {

        if (num1 > num2) {
            return num1;
        }
        else if (num1 < num2) {
            return num2;
        }
        else if (num1 === num2) {
            return num1
        }

    }

    else {
        return null;
    }
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayWords) {

    if (arrayWords.length === 0) {
        return null
    }

    else {
        arrayWords.forEach( element => {
            return Math.max(element.length)
        });
    }
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayNum) {

let sum = 0;

arrayNum.forEach( element => {
    sum += element;
});

return sum;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayNum) {

    if (arrayNum.length === 0) {
        return 0
    }

    return sumNumbers(arrayNum) / arrayNum.length;

}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, searchWord) {

    if (words.length === 0) {
        return null;
    }

    for (let w of words) {
        if (w === searchWord) {
             return true;
        }
    }

    return false
}

console.log(doesWordExist(words2, "machine")); 
console.log(doesWordExist(words2, "duck")); 
