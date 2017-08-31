/* Factorial Finder - Difficulty: Beginner */

var args = process.argv;

var n = args[2];
product = 1;

4, 4-1, 4-2, 4-3
for(var i=0;i<n;i++){
    product *= n-i;
}
console.log("n! is equal to " + product);