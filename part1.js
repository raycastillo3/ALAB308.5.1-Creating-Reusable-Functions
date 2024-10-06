//PART1: 
function sumOfNums (nums) {
    let sum = 0; 
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum
}
function sumOfNums2 (nums) {
    return nums.reduce((a,b) => a+b)
}
// console.log(sumOfNums([1,1,1,1,1]));
// console.log(sumOfNums2([1,1,1,1,1]));

function averageOfNums (nums) {
    let avg = 0; 
    for (let i = 0; i < nums.length; i++) {
        avg += nums[i];
    }
    return avg / nums.length; 
}
function averageOfNums2 (nums) {
    return nums.reduce((a, b) => a + b) / nums.length;
}

// console.log(averageOfNums([2,2,2,2,2]));
// console.log(averageOfNums2([2,2,2,2,2]));

function longestStr (arrOfStrs) {
    let maxStr = ""; 
    for (const str of arrOfStrs) {
        if (str.length > maxStr.length) { 
            maxStr = str;
        }
    }
    return maxStr;
}

// console.log(longestStr(["Raymond", "Bob", "Alice", "Manara"]));

function stringsLongerThan (strings, number) {
    const res = []; 
    for (const str of strings) {
        if (str.length > number) {
            res.push(str);
        }
    }
    return res;
}

// console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));

function printNumber (n){
    if (n === 0) return; 
    console.log(n);
    printNumber(n - 1);
}

console.log(printNumber(10))

// COPYRIGHTS @Ray2024: PLEASE DO NOT COPY MY CODE!!!!!!!!!!!!!!!!!!!!!!!!!