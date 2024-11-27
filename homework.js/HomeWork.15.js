/*
Write a function named toCamelCase() which takes a string as its argument 
and returns a new string in camelCase. Assume the string only contains letters 
and spaces
Examples:
toCamelCase("first name")  ->"firstName"
toCamelCase("last     name")  ->"lastName"
toCamelCase("   ZIP CODE")  ->"zipCode"
toCamelCase(“I Learn Java Script”)    -> "iLearnJavaScript"
toCamelCase(“helloWorld”)     -> “helloWorld”
*/

function toCamelCase(str) {
    return str.toLowerCase().split(' ').filter(word => word).map((word, index) => {
            return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Examples
console.log(toCamelCase("first name")); // "firstName"
console.log(toCamelCase("last     name")); // "lastName"
console.log(toCamelCase("   ZIP CODE")); // "zipCode"
console.log(toCamelCase("I Learn Java Script")); // "iLearnJavaScript"
console.log(toCamelCase("helloWorld")); // "helloWorld"


/*
Write a function named toSnakeCase() which takes a string as its argument 
and returns a new string in snake_case. Assume the string only contains letters 
and spaces
NOTE: In snake case words are separated by underscores (_) and are all 
lowercase.
Examples:
toSnakeCase("first name")  ->"first_name"
toSnakeCase("last    name")  ->"last_name"
toSnakeCase("    I love Java Script")  ->"i_love_java_script"
toSnakeCase("already_snake_case")   -> "already_snake_case"
toSnakeCase("hello")     -> "hello

*/




console.log('\n---------------TASK02---------------\n');
function toSnakeCase(s) {
    // Remove leading/trailing whitespace and split the string by spaces
    const words = s.trim().split(' ').filter(word => word !== '');
    
    // Convert all words to lowercase and join with underscores
    return words.map(word => word.toLowerCase()).join('_');
  }


/*
Write a function named alternatingCases() which takes a string argument and 
returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are 
ignored.
Examples:
alternatingCases("Hello")  -> "HeLlO"
alternatingCases("basketball")  -> "BaSkEtBaLl"
alternatingCases("Tech Global")  -> "TeCh GlObAl"
alternatingCases("")  -> ""
alternatingCases("123!@#aB")  -> "123!@#Ab"


*/


console.log('\n---------------TASK03---------------\n');
function alternatingCases(str) {
    let result = '';
    let shouldCapitalize = true;
    
    for (const char of str) {
        if (/[a-zA-Z]/) {
            result += shouldCapitalize ? char.toUpperCase() : char.toLowerCase();
            shouldCapitalize = !shouldCapitalize;
        } else {
            result += char;
        }
    }
    
    return result;
}
console.log(alternatingCases("Hello")) // HeLlO
console.log(alternatingCases("basketball")) // BaSkEtBaLl
console.log(alternatingCases("Tech Global")) // TeCh GlObAl
console.log(alternatingCases("")) // 
console.log(alternatingCases("123!@#aB")) // 123!@#Ab

/*
Write a function named isNeutral() that takes two strings comprised of + and 
-, and return a new string which shows how the two strings interact in the 
following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are 
shown as the number 0.
Note: The two strings will be the same length.
Examples
isNeutral("-", "+")      ->  "0"
isNeutral("-+", "-+")  ->   "-+"
isNeutral("-++-", "-+-+")            ->  "-+00"
isNeutral("--++--", "++--++")      ->  "000000"
isNeutral("+++", "+++")            ->  "+++"

*/


console.log('\n---------------TASK04---------------\n');
function isNeutral(str1, str2) {
    let result = '';
    
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] === str2[i]) {
        result += str1[i];
      } else {
        result += '0';
      }
    }
    
    return result;
  }
console.log(isNeutral("-", "+")) // 0
console.log(isNeutral("-+", "-+")) // -+
console.log(isNeutral("-++-", "-+-+")) // -+00
console.log(isNeutral("--++--", "++--++")) // 000000
console.log(isNeutral("+++", "+++")) // +++


/*

*/
