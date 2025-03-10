//----------Arrays------------------------------------------------------
const studentNames = ['Paul', 'Luke', 'Payton', 'jason', 'Brown'];

let name1 = studentNames[0];
console.log(name1);

//----------objects--------------------
const students = {
    studentName: "Jaylen",
    age: 25,
    idNo: 34590288,  
    email: 'jaylen@gmail.com',
    //-------------------------- Nested Objects -------------------------
    address:{
        city:"New York",
        country:"USA",
    }
}
delete students.email; //deleting the property 'email' from the Students object
//---------access a properties and change it's values(Modyfying object values)-----------------------------
students.age = 19;
students.phoneNumber = 7234511130; //adding a new key and value to the existing property
console.log(students);

//------ways to access object properties--------------------

console.log(students["idNo"]); // accesing a value in a specific key using Bracket notation
// console.log(students.studentName); // used to access a value in a specific key using Dot Notation
console.log(students.address.city);

//------------------------------------------iteration in Nested Objects-----------------------------------------------
const cars = {
    toyota:{
        yearOfManufacture: 2014,
        color: 'blue',
        model: "crown"
    },
    volvo:{
        yearOfManufacture:2012,
        color:'white',
        model:'V60'
    },
     bmw:{
        yearOfManufacture:2020,
        color:'black',
        model:'X6'
    },
     mercedes:{
        yearOfManufacture:2017,
        color:'grey',
        model:'V60'
    },
}

console.log(cars);
