function print(str){
    console.log(`Your string is = ${str}`);
}


function printFullname(fname, lname){
    console.log(`${fname} ${lname}`);

}

function printSum(num1, num2){
    console.log(`sum is = ${num1+ num2}`);
}

module.exports.print = print;
module.exports.printFullname = printFullname;
module.exports.printSum = printSum;


