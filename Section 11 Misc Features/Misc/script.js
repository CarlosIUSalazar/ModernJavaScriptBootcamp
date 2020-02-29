'use strict'
// Please don't delete the 'use strict' line above

// 115.Destructuring Arrays

// const raceResults = ['Gizmo','Minx','Cherry','Shima','Bnadi','Mittz']

// const [gold,silver,bronze] = raceResults;

// const [first, , ,fourth] = raceResults;

// const [winner, ...others] = raceResults;

// console.log(gold,bronze)
// console.log(fourth)
// console.log(winner,others)


///  116. Destructuring Objects

const gatupis = {
    first: "Gizi",
    second: "Minx",
    third: "Cher",
    fourth: "Lolo",
    fifth: "Mitts"
}
// Crea una variable gatupi que tiene el value del key "second"
// const {
//     third: gatupi
// } = gatupis

let {
    first,
    second, 
    ...other
} = gatupis;

console.log(gatupis)

console.log(first)
console.log(second)
console.log(other)