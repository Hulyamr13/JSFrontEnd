function bitcoinMining(inputNumbers) {
    let workingDays = 0;
    let totalBitcoins = 0;
    let money = 0;
    let bitcoinPrice = 11949.16;
    let gramGoldPrice = 67.51;
    let dayOfFirstBitcoin = null;

    for (let i = 0; i < inputNumbers.length; i++) {
        workingDays++;
        let minedGold = inputNumbers[i];

        if (workingDays % 3 === 0) {
            minedGold *= 0.7; // 30% stolen on every third day
        }

        let dayMoney = minedGold * gramGoldPrice;
        money += dayMoney;

        while (money >= bitcoinPrice) {
            if (dayOfFirstBitcoin === null) {
                dayOfFirstBitcoin = workingDays;
            }
            totalBitcoins++;
            money -= bitcoinPrice;
        }
    }

    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (dayOfFirstBitcoin !== null) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
