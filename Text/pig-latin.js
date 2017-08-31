/* Pig Latin - Difficulty: Expert */
var args = process.argv;
var words = args.slice(2);
var piglatin = [];
var notCon = ['a','e','i','o','u'];

words.forEach(function(word) {
    var pre = "-";
    var w = word;
    var i = 0;
    while(i<w.length && !notCon.includes(w[i].toLowerCase())){
        pre+=word[i];
        i++;
    }
    if(!i){
        pre+='y';
    }
    w = w.substring(i);
    word = w +pre+"ay";
    piglatin.push(word);
});

console.log(piglatin.join(" "));
