/* Password Generator - Difficulty: Intermediate */
/*
* -l N - Password Length:Include Symbols:( e.g. @#$% )
* -n Include Numbers:( e.g. 123456 )
* -c Include Lowercase Characters:( e.g. abcdefgh )
* -C Include Uppercase Characters:( e.g. ABCDEFGH )
* -s Exclude Similar Characters:( e.g. i, l, 1, L, o, 0, O )
* -a Exclude Ambiguous Characters:( { } [ ] ( ) / \ ' " ` ~ , ; : . < > )
* usage: node password.js -l 16 -n -c -C -s -a
*/
var args = process.argv.slice(2);

var Settings = function(args){
    this.numbers = args.includes("-n");
    this.lowercase = args.includes("-c");
    this.uppercase = args.includes("-C");
    this.similar = args.includes("-s");
    this.ambiguous = args.includes("-a");
    this.len = Number(args[args.indexOf("-l")+1]);
    console.log(this.len + " of type " + typeof this.len);
}

var settings = new Settings(args);

var lowerset = ["a","b","c","d","e","f","g","h","j","k","","m","n","p","q","r","s","t","u","v","w","x","y","z"];
var upperset = [];
lowerset.forEach(function(letter){
    upperset.push(letter.toUpperCase());
});
var numberSet = ["2","3","4","5","6","7","8","9"];
var symbols = ["@","#","$","%"];
var ambiguous = ["{","}","[","]","(",")","/","\\","'",'"',"`","~",",",";",":",".","<",">"];
var similiar = ["i","1","l","L","o","O","0","!","|","I"];

var possibleSet = [];

if(settings.numbers){
    possibleSet = possibleSet.concat(numberSet);
}
if(settings.lowercase){
    possibleSet = possibleSet.concat(lowerset);
}
if(settings.uppercase){
    possibleSet = possibleSet.concat(upperset);
}
if(!settings.similar){
    possibleSet = possibleSet.concat(similiar);
}
if(!settings.ambiguous){
    possibleSet = possibleSet.concat(ambiguous);
}

if(possibleSet.length == 0){
    console.log("You need to select something!");
} else if (typeof settings.len != "number"){
    console.log("You need to set a length");
} else {
    var password = "";
    for(var i = 0;i<settings.len;i++){
        password += possibleSet[Math.floor(Math.random()*possibleSet.length)];
    }
    console.log(password);
}