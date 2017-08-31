/* Factorial Finder - Difficulty: Beginner */

var args = process.argv;

var n = args[2];
product = 1;

for(var i=0;i<n;i++){
    product *= n-i;
}
console.log("n! is equal to " + product);