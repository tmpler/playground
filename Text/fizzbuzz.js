/* Fizz Buzz - Difficulty: Beginner */
var args = process.argv;
var count = args[2];

for(var i = 1;i<=count;i++){
    if(i%5==0&&i%3==0){
        console.log("FizzBuzz");
    } else if (i%5==0){
        console.log("Buzz");
    } else if (i%3==0){
        console.log("Fizz");
    } else {
        console.log(i);
    }
}