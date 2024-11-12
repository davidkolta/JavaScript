/*

Write a function named countVC() which takes a string argument and returns 
an object with the count of vowels and consonants.
Examples:
countVC("Hello")               -> {vowels: 2, consonants: 3}
countVC("Programming")   -> {vowels: 3, consonants: 8}
countVC("123AbC")               -> {vowels: 1, consonants: 2}
countVC("123!@#xyz")             -> {vowels: 0, consonants: 3}
countVC("")                           -> {vowels: 0, consonants: 0}

*/

function countVC(str){

    const vowels = 'aeiouAEIOU'
    let countVowels = 0;
    let countConsonants = 0;

    for(const char of str){
        if(vowels.includes(char)) countVowels ++;

        else if(char.toLowerCase() !== char.toUpperCase()) {countConsonants ++;} 
   
   
    } return {vowels: countVowels, consonants: countConsonants};
    
}

console.log(countVC("Hello"));             
console.log(countVC("Programming"));        
console.log(countVC("123AbC"));            
console.log(countVC("123!@#xyz"));         
console.log(countVC(""));


/*

Write a function named countChars() which takes a string argument and 
returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object. Also 
spaces do not count towards any category
Examples:
countChars("Hello")                           -> {letters: 5}
countChars("Programming 123")   -> {letters: 11, numbers: 3}
countChars("123AbC!@#")               -> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321")               -> {numbers: 10}
countChars("     ")                                  -> {}
countChars("")                                       -> {

*/

function countChars(str){
     let letterCount = 0;
     let numberCount = 0;
     let specialCount = 0;

    for(let i = 0; i < str.length; i++){

        const char = str[i];
        if(char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') letterCount++;
        else if (char >= '0' && char <= '9') numberCount++;
        else if (char.trim() && !(char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z' || char >= '0' && char <= '9')) specialCount++;
    }
let result = {};
  if (letterCount > 0) result.letters = letterCount;
  if (numberCount > 0) result.numbers = numberCount;
  if (specialCount > 0) result.specials = specialCount;

return result;



}

console.log(countChars("Hello"));                           // -> {letters: 5}
console.log(countChars("Programming 123"));                 // -> {letters: 11, numbers: 3}
console.log(countChars("123AbC!@#"));                       // -> {letters: 3, numbers: 3, specials: 3}
console.log(countChars("0987654321"));                      // -> {numbers: 10}
console.log(countChars("     "));                           // -> {}
console.log(countChars(""));                                // -> {}

/*

Write a function named maxOccurrences() which takes a string argument and 
returns the character that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string. This task is 
case sensitive. Ignore spaces. If the string is empty or consist of spaces only, 
then return an empty string.
Examples:
maxOccurrences("Hello")             -> "l"
maxOccurrences("Occurrences")  -> "c"
maxOccurrences("    ab    ")      -> "al"
maxOccurrences("12   3   21")    -> "1"
maxOccurrences("      ")      -> ""
maxOccurrences("")    -> ""

*/

function maxOccurrences(str) {
    if (!str.trim()) return "";
  
    const charCount = {};
    let maxChar = '';
    let maxCount = 0;
  
    for (const char of str) {
      if (char !== ' ') {
        charCount[char] = (charCount[char] || 0) + 1;
  
        if (charCount[char] > maxCount) {
          maxChar = char;
          maxCount = charCount[char];
        }
      }
    }
  
    return maxChar;
  }

  console.log(maxOccurrences("Hello"));             // -> "l"
console.log(maxOccurrences("Occurrences"));       // -> "c"
console.log(maxOccurrences("    ab    "));        // -> "a"
console.log(maxOccurrences("12   3   21"));       // -> "1"
console.log(maxOccurrences("      "));            // -> ""
console.log(maxOccurrences(""));          

/*

Write a function named starOut() which takes a string argument and returns it 
back with every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
Examples:
starOut("ab*cd")  -> "ad"
starOut("ab**cd")  -> "ad"
starOut("xm*sm*sy")  -> "xy"
starOut("abc")     -> "abc"
starOut("***")    -> ""
starOut("   ")      -> "   "
starOut("")    -> ""

*/

function starOut(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '*' && (i === 0 || str[i - 1] !== '*') && (i === str.length - 1 || str[i + 1] !== '*')) {
        result += str[i];
      }
    }
    return result;
  }
  
  // Examples
  console.log(starOut("ab*cd"));      // -> "ad"
  console.log(starOut("ab**cd"));     // -> "ad"
  console.log(starOut("xm*sm*sy"));   // -> "xy"
  console.log(starOut("abc"));        // -> "abc"
  console.log(starOut("***"));        // -> ""
  console.log(starOut("   "));        // -> "   "
  console.log(starOut(""));           // -> ""