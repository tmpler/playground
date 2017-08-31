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
var dp = args[3];

var coin = new Coin();

for(var i = 0; i<flips; i++){
    coin.flip();
}

function round(number,dp){
    var scale = 1;
    if(dp){
        scale = Math.pow(10,dp);
    }
    var n = number;
    n = Math.round(n*scale);
    n /= scale;
    return n;
}

(dp?" ("+dp+"dp)":"")

console.log("Flips: " + flips);
console.log("Heads: " + coin.heads +" | %: " + round((100*coin.heads)/flips,dp) + (dp?" ("+dp+"dp)":""));
console.log("Tales: " + coin.tails+" | %: " + round((100*coin.tails)/flips,dp) + (dp?" ("+dp+"dp)":""));


