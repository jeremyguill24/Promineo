var i = 0;
var n = 100;
var x;



do {
    console.log(i);
    (i += 2);
}
while (i <= 100);

do {
    console.log(n);
    n - (n -= 3);
}
while (n >= 0);

for (x = 1; x < 100; x += 2) {
    console.log(x);
}

for (x = 0; x <= 100; x++) {
    if (x % 3 === 0 && x % 5 === 0) { console.log("HelloWorld"); }
    else if (x % 3 === 0) { console.log("Hello"); }
    else if (x % 5 === 0) { console.log("World") }

    else { console.log(x) };
}
