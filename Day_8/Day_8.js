// setInterval
// executes functions after every given millisecond
let lam= ()=> {
    console.log('Hello');}

setInterval(lam,1000);

// setTimeout
// executes only once after given millisecond

setTimeout(lam, 100);

// clearInterval
// to clear setInterval it works only if function is of Var type

clearInterval(lam);

// clearTimeout
// to clear setTimeout it works only if function is of Var type

clearTimeout(lam);

// Non Blocking Functions
// does not holds execution of functions in sequence till the function which takes more time is not executed.

function example() {
    console.log('1');
    console.log('2');
    setTimeout(()=>{console.log('timeOut function');})
    console.log('3');
    console.log('4');};
    
example();


// Blocking Functions
// it holds the execution no matter how much time any intermediate function takes.

function example1() {
    console.log('1');
    console.log('2');
    console.log('mid');
    console.log('3');
    console.log('4');}

    example1();

// Empty Array
let arr=[];


// array accesibility

let arr=[];

arr.push('parag');
    
arr.push('1002');

arr.push(true);

arr[1];
//"1002"

arr[2];
// true

arr.push(()=>{console.log('hey')});
// store arrow function
//["parag", "1002", true, ƒ, undefined, ƒ]

arr.push(lam);
//["parag", "1002", true, ƒ, undefined, ƒ]

// array can only update value at particular location only by deleting existing value.

arr[2]=2005;
// ["parag", "1002", 2005, ƒ, undefined, ƒ]

arr[2]=3005;
// ["parag", "1002", 3005, ƒ, undefined, ƒ]


//* Splice  *//

// splice to add element at particular location without deleting existing element
arr.Splice(1,0,1003,1004);
//["parag", 1003, 1004, "1002", 3005, ƒ, undefined, ƒ]



// to delete items from array  

arr.splice(1,2);

// # ["parag", "1002", 3005, ƒ, undefined, ƒ]


// splice to add element at particular location by deleting existing element

arr.splice(4,1,()=>{console.log('hehehe')});

// # ["parag", "1002", 3005, ƒ, ƒ, ƒ]

//*         JSON            *//

let pqr=
{
    name:"Ram",
};

// CALLING OBJECT 
pqr;
//{name: "Ram"}

// CALLING OBJECT WITH SPECIIC KEY 

pqr.name;
//"Ram"

// STORE ARRAY IN OBJECT

let xyz=
{
    array:[1,'raj',true],
};

xyz.array[1];
//#  "raj"


// for special char key name

let xyz=
{
    array:[1,'raj',true],
    first name:'parag',
};
// VM2040:4 Uncaught SyntaxError: Unexpected identifier         HENCE USE 

let xyz=
{
    array:[1,'raj',true],
    'first name':'parag',
};


// TO ACCESS SPECIAL CHAR VALUE

xyz.first name;         // ERROR
// VM2105:1 Uncaught SyntaxError: Unexpected identifier
xyz.['first name'];     // ERROR
// VM2117:1 Uncaught SyntaxError: Unexpected token '['

xyz['first name'];
//  # "parag"

//*  ARRAY TO STORE OBJECT  

let arr1 = [
    pqr,
    xyz,];

// TO ACCESS OBJECT VALUE IN ARRAY
arr1[1].array[1];
// #"raj"

arr1[1]['first name'];
// "parag"