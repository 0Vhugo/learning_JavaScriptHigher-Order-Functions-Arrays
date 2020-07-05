const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//standard for loop
// for(let i = 0; i< companies.length; i++) {
//     console.log(companies[i]);
// }

//ForEach
// companies.forEach(function(company){
//     console.log(company.name);
// });

//Filter

//get 21 or older
// let canDrink = [];

// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

// const canDrink = ages.filter(function(age){
    
//     if(age >= 21) {
//         return true;
//     }
// });

const canDrink = ages.filter(age => age >= 21);

//Filter retail Company

// const retailCompanies = companies.filter(function(company){

//     if(company.category === 'Retail') {
//         return true;
//     }
// });

let retailCompanies = companies.filter(company => company.category === 'Retail');

//Get 80´s companies
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1990));

//get companies that lasted 10 years or more
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));


//Map
//create array of company names

const testMap = companies.map(function(company){
    return` ${company.name} [${company.start}] - [${company.end}]` ;
});

const testMap = companies.map(company =>` ${company.name} [${company.start}] - [${company.end}]`);

//square of ages
const agesSquare = ages.map(age => Math.sqrt(age))

//chain map
const agesSquare = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

//Sort
const sortedcompanies = companies.sort(function(c1, c2){
    if(c1.start > c2.start) {
        return 1;
    } else{
        return -1;
    }
});

const sortedCompanies = companies.sort( (a, b) => (a.start > b.start ? 1 : -1));


//descend
const sortAges = ages.sort((a,b) => a - b);

//ascendent
const sortAges = ages.sort((a,b) => b - a);

//Reduce   
let ageSum = 0;
for (let index = 0; index < ages.length; index++) {
    ageSum += ages[index];    
}

const ageSum = ages.reduce(function(total, age){
    return total + age;
}, 0);

//gettting all ages using reduce
const ageSum = ages.reduce((total, age) => total + age , 0);

//get all yeas for all companies

const totalYears = companies.reduce((total ,company) => total + (company.end - company.start), 0);
