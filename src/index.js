// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    let money = {};
    let halfDollar = 50;
    let quarter = 25;
    let dime = 10;
    let nickel = 5;
    let pennie = 1;
    let reminder;

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    if (currency <= 0) {
        return {};
    }
    if (Math.floor(currency / halfDollar) > 0) {
        reminder = Math.floor(currency / halfDollar);
        money.H = reminder;
        currency -= reminder * halfDollar;
    }
    if (Math.floor(currency / quarter) > 0) {
        reminder = Math.floor(currency / quarter);
        money.Q = reminder;
        currency -= reminder * quarter;
    }
    if (Math.floor(currency / dime) > 0) {
        reminder = Math.floor(currency / dime);
        money.D = reminder;
        currency -= reminder * dime;
    }
    if (Math.floor(currency / nickel) > 0) {
        reminder = Math.floor(currency / nickel);
        money.N = reminder;
        currency -= reminder * nickel;
    }
    if (Math.floor(currency / pennie) > 0) {
        reminder = Math.floor(currency / pennie);
        money.P = reminder;
        currency -= reminder * pennie;
    }
    return money;
}
