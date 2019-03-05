//bonus = print to DOM
const PrintToDOM = (divId, textToPrint ) => {
    const selectDiv = document.getElementById(divId);
    selectDiv.innerHTML += textToPrint;
};

const iAmThursty = (num) => {
    /// do something 
    //is under 21 "dring some water"
    if (num < 21) {
        return 'drink some water!';
    //ove 21, under 65 "have a beer"
    } else if ( num >= 21 && num < 65 ) {
        return 'have a beer';
    } 
        // over 65 'take a nap'
    else {
        return 'Take a nap!';
    }
};

//bonus = print to DOM

PrintToDOM('drink', iAmThursty(55));
PrintToDOM('drink', iAmThursty(11));
PrintToDOM('drink', iAmThursty(67));
PrintToDOM('drink', iAmThursty(3));
PrintToDOM('drink', iAmThursty(-23));


console.log(1 === '1'); //false
//console.log(1 == '1'); // true
console.log(1  !== '2'); //true

console.log('cats'.length); // how many characters in a string
const quote = 'winter is coming'; 
console.log(quote.indexOf('is') ); // indexOf will look for the position of a string/character
console.log(quote.indexOf('bunny')); // if not found, will return a -1

const catName = () => {
    return 'killer'
}

const bucketOCats = {
    cat1: 'fluffy', 
    cat2: 5, 
    cat3: catName,
    cat4: {
        water: 'nope', 
        sunlight: 'yep'
    }
};

//dot notations
console.log(bucketOCats.cat2);

// bracket notaions
console.log(bucketOCats['cat2']);


let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log('the meaning of life: ',hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life); //42

// challenge






let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010"
  }

console.log("Our company's lawyer is", employee.name);
// you need to use `` ${}
console.log(employee['name'], "was hired on", employee['hire_date']);

 employee.vacation_days = 20;
 console.log(employee.vacation_days)
 employee['vacation_days'] = 23;

console.log(employee.vacation_days);

let eom = "employee_of_the_month";
employee[eom] = false;
console.log(employee);

PrintToDOM('name', employee.name);
PrintToDOM('hiredDate', employee.hire_date);
PrintToDOM('vacation', employee.vacation_days);



//PrintToDOM('name', someName('name'));







