var ages = [3, 9, 23, 64, 2, 8, 28, 93,];
console.log((ages[ages.length - 1]) - ages[0]);

for (var i = 0; i < ages.length; i++);
ages.push(70); {
    console.log((ages[ages.length - 1]) - ages[0]);
}
var total = 0
for (var i = 0; i < ages.length; i++) {
    total += ages[i];
}
var avg = total / ages.length;
console.log(avg);


var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let lengths = names.map(function (element) {
    return element.length
})
console.log(lengths);

let namesAverage = lengths.reduce(function (accumulator, currentValue) {
    return (accumulator + currentValue);
}, 0)
console.log(namesAverage / names.length);

var allNames = "";
for (i = 0; i < names.length; i++) {
    allNames += names[i] + ", ";
}
console.log(allNames)

var nameLengths = names.map(function (element) {
    return element.length;
})
console.log(nameLengths);



let sum = nameLengths.reduce(function (accumulator, currentValue) {
    return (accumulator + currentValue);
})
console.log(sum);



function wordN(word, n) {
    console.log(word.repeat(n));
}
wordN('Hello', 3);



function createFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName)
}
createFullName('Jeremy', 'Guill');



function isSumGreaterThan100(array) {
    let getSum = array.reduce(function (accumulator, currentValue) {
        return (accumulator + currentValue);
    })
    if (getSum > 100) {
        return true;
    }
}
console.log(isSumGreaterThan100([30, 30, 30, 29, 30, 28]));

function averageOfArray(array) {
    let total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    console.log(total / array.length);
}
averageOfArray([28, 29, 29, 30, 30])

function array1GreaterThanArray2(array1, array2) {
    let array1total = 0;
    for (var i = 0; i < array1.length; i++) {
        array1total += array1[i];
    }
    let averageOfArray1 = array1total / array1.length;

    let array2total = 0;
    for (var i = 0; i < array2.length; i++) {
        array2total += array2[i];
    }
    let averageOfArray2 = array2total / array1.length;

    if (averageOfArray1 > averageOfArray2) {
        return true;
    }
}
console.log(array1GreaterThanArray2([30, 30, 60, 90, 100], [25, 25]));


function iWillBuyDrink(isHotOutside, moneyInPocket) {
    if ((isHotOutside == 'yes') && (moneyInPocket > 10.5)) {
        return true;
    }
}
console.log(iWillBuyDrink('yes', 16));
//  I see this only works for lower case yes.  I can't figure it out for other types of "Yes answers."


function iWillTravelToArizona(ifColdInNebraska, planeTicketIsCheap) {
    if ((ifColdInNebraska < 20) && (planeTicketIsCheap < 300)) {
        return true;
    }
}
console.log(iWillTravelToArizona(2, 259));