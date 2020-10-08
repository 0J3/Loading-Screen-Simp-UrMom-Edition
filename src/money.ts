const EventEmitter = require('events').EventEmitter;
const moneyEmitter = new EventEmitter();

moneyEmitter.on('recive', (amount: number) => console.log(`recived ${amount}`)
);
moneyEmitter.on('send', (amount: number) => console.log(`recived ${amount}`);
);

module.exports = moneyEmitter;
