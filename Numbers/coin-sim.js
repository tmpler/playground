/* Coin Flip Simulation - Difficulty: Beginner */
var Coin = function() {
    this.face= undefined
    this.heads= 0,
    this.tails= 0
};

Coin.prototype.flip = function(){
    this.face = Math.round(Math.random());
    this.face?this.heads++:this.tails++;
};

var args = process.argv;

var flips = args[2];

var coin = new Coin();

for(var i = 0; i<flips; i++){
    coin.flip();
}

function round2dp(number){
    var n = number;
    n = Math.round(n*100);
    n /= 100;
    return n;
}

console.log("Flips: " + flips);
console.log("Heads: " + coin.heads +" | %: " + round2dp((100*coin.heads)/flips)+" (2dp)");
console.log("Tales: " + coin.tails+" | %: " + round2dp((100*coin.tails)/flips)+" (2dp)");


