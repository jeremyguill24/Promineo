var isHotOutside = "yes";
var isWeekday = 'yes';
var hasMoneyInPocket = 'yes';
var costOfMilk = 3;
var moneyInWallet = 100;
var thirstLevel = 8;
var shouldByIcecream = "True";
if (isHotOutside == "yes" && hasMoneyInPocket == "yes"); {
    console.log(shouldByIcecream + ", I should buy Ice Cream");
};

console.log(isHotOutside, isWeekday, hasMoneyInPocket, costOfMilk, moneyInWallet, thirstLevel);

var willGoSwimming = "True"
if (isHotOutside == "yes" && !isWeekday); {
    console.log(willGoSwimming + ", I will go swimming on the weekend")
};


var isAGoodDay = "True"
if (isHotOutside == "yes" && hasMoneyInPocket == "yes" && !isWeekday); {
    console.log(isAGoodDay + ", Weekends and money are great")
};

var willBuyMilk = "True"
if (isHotOutside == "yes" && thirstLevel >= 3 && moneyInWallet >= 2 * costOfMilk); {
    console.log(willBuyMilk + ", I'm going to buy milk")
};



