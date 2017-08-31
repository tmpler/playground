/* Typoglycemia - Difficulty: Intermediate */
var args = process.argv;
var words = args.slice(2);

var typos = [];

words.forEach(function(word) {
    if(word.length>3){
        var first = word[0];
        var last = word[word.length-1];
        var middle = word.substring(1,word.length-1);
        var type = first + middle.split("").reverse().join("") + last;
        typos.push(type);
    } else {
        typos.push(word);
    }

}, this);

console.log(typos.join(" "));