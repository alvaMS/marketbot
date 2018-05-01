

const alphaVantageKey = "34I4HRQLIFVW3BMN";
const alpha = require('alphavantage')({ key: alphaVantageKey });

var getIntraDayPrice = (symbol) => {
    return new Promise((resolve, reject) => {
        alpha.data.intraday(symbol).then(data => {
            let polishedData = alpha.util.polish(data);
            if (polishedData && polishedData.data) {
                let latestSet = polishedData.data[Object.keys(polishedData.data)[0]]
                resolve(latestSet.close);
            }
        });
    })
}

module.exports.getIntraDayPrice = getIntraDayPrice;