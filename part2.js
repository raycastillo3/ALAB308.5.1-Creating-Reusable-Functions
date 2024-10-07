// PART 2: Thinking Methodically: 
const csvFileObj = [{id: "42", name: "Bruce", occupation: "Knight", age: "41" },{ id: "48", name: "Barry", occupation: "Runner", age: "25" },{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]

function thinkingMethodically (csv) {
    //sort by age: 
    csv.sort((a, b) => a.age - b.age);
    console.log(csv);
    //filter the array
    const largerThan50removed = csv.filter((el) => el.age < 50);
    // console.log(largerThan50removed);
    //map the array
    const result = csv.map(el => ({
        job: el.occupation,
        ...el
    }));
    // console.log(result);
    const incrementAge = csv.map((el) => el.age = Number(el.age)+1);
    // console.log(csv);
    //use the reduce
    const sumOfAges = csv.reduce((acc, el) => acc + el.age, 0);
    // console.log(sumOfAges);
        //use the result to calculate avg
        let avg = sumOfAges / csv.length;
    return avg;
}

console.log(thinkingMethodically(csvFileObj));
// COPYRIGHTS @Ray2024: PLEASE DO NOT COPY MY CODE!!!!!!!!!!!!!!!!!!!!!!!!!