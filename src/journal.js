export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.TotalWords = function(entry) {
  var wordCount = 0;
  var entryArray = entry.toLowerCase().split(" ");
  entryArray.forEach(function(){
    wordCount +=1;
  });
  return wordCount;
};

Entry.prototype.CountVowels = function(entry) {
  var vowels = ["a", "e", "i", "o", "u"];
  var vowelCount = 0;
  var vowelArray = entry.toLowerCase().split("");
  for (var i = 0; i <= vowelArray.length; i ++){
    for ( var x = 0; x < vowels.length; x ++) {
      if (vowelArray[i] == vowels[x]) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
};

Entry.prototype.CountConsonants = function(entry) {
  var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
  var consonantCount = 0;
  var consonantArray = entry.toLowerCase().split("");
  for (var i = 0; i <= consonantArray.length; i ++){
    for ( var x = 0; x < consonants.length; x ++){
      if (consonantArray[i] == consonants[x]) {
        consonantCount++;
      }
    }
  }
  return consonantCount;

};
