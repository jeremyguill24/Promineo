function createFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(createFullName('Jeremy', 'Guill'));
// function create full name

let createFullNameTwo = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(createFullNameTwo('Ken', 'Griffey'));
// arrow function create full name

setTimeout(function () { alert('Time is up'); }, 3000);
setTimeout(() => { alert('Time is up'); }, 2000);
// arrow function for 'Time is Up' timeout.

// (do not use this one) setInterval(() => { alert('Are we there yet?'); }, 7000);
let askAreWeThereYet = () => `${alert('Are we there yet?')}`
setInterval(askAreWeThereYet, 7000); // (use this one)

function favoriteTeam(team, nickname) {
    alert('The' + ' ' + team + ' ' + nickname + ' ' + 'suck'); // I can't figure out how to use the template literal here.
}

function processUserInput(callback) {
    var team = prompt('Please enter your favorite team.');
    var nickname = prompt('Please enter their mascot name.')
    callback(team, nickname);
}

processUserInput(favoriteTeam);  // your team is no good.

function processSplicedValue(array, index) {
    let splicedElement = array.splice(index)
    console.log(splicedElement);
}

let months = ['Jan', 'Feb', 'March', 'April', 'May', 'June'];

processSplicedValue(months, 4, console.log);   // This is printing every month after the index, not sure if that is what is wanted. or if we wanted to log out only the spliced value??

processSplicedValue(months, 2, alert('I bet I messed this up'));

processSplicedValue(months, 2, `${alert(splicedElement)}`)  // doesn't work, idk.

function someotherfunctionthatdoesntwork(addingallmonths) {
    let allMonths = months.splice(5, 0, addingallmonths)
    console.log(allMonths);
}

console.log(processSplicedValue(someotherfunctionthatdoesntwork['July', 'August', 'September', 'October', 'November', 'December']));








