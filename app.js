// ? Task:Find the number of days between two days


// Solution 1
const dayDif = (date1, date2) =>
    Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

console.log(dayDif(new Date("2021-02-21"), new Date("2021-10-22")));
// Result: 243


// ! Explanation: Find the days between 2 given days using the following snippet.
