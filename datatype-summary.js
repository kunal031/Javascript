// data ko kis tarah se memory m rakha jata hai aur kis tarah se access kiya jata hai , isse pata chalta hai ki data kis type ka h
// so two categorization : (1). Primitive  (2). Non-Primitve




// Primitive (call by value datatypes)
    
    // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const name = "Kunal"
const age = 24
const isDrugged = false
const haveDrug = null
let job = undefined
let userEmail; // also undefined
const id = Symbol('123')
const bigNumber = 11138651971461983275490


// Non-Primitive (Refernce type) : jinka memory m refernce allocate kiya ja skta hai(like pointer in c++)

    // Array, Objects, Functions

const heros = ["Shaktiman", "naagraj","doga"] // Arrays
let myObj = {           // Objects datatype
    name:"kunal",
    age: 22
}              

const myFunction = function(){
    console.log('Hello World')
}


// possible return values of typeof :
    /*
        datatype    :   result
        
        undefined : undefined
        null : object
        boolean : boolean
        Number  : number
        String  : string
        Symbol  : symbol
        Function : function
        any other object : object
    */

// Javascript is dynamically typed language means            (1). A single variable can hold values of different data types throughout the program's execution. For example, a variable initially holding a number can later be assigned a string.                                                   (2). Type checking occurs at runtime: Unlike statically typed languages (like Java or C++) where type checks are performed during compilation, JavaScript performs type checks when the code is actually executing.




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack Memory and Heap Memory 
/*  how both memory work and store data */

/**
 * Stack memory store primitive datatypes(7 types)
 * while heap store non-primitve datatypes(function, objects,...)
 * 
 * 
 */

let original = "Kunal Raj"
let duplicate = original

duplicate = "Kunal Kashyap"

console.log(original)
console.log(duplicate)

/*
 * here value of duplicate doesnot change original value 
i.e. how call by value work. In stack primitive types data will be alloted a memory where their values will be stored so change in one does not change other.

 * but when in case of non-primitve types (userOne,userTwo) , variables are still stored in stacks but they get refrence of values present in heap memory so change of one change other.
 */

let userOne = {
    // Name : "Kunal Raj",
    email : "kunal@gmail.com"
}

let userTwo = userOne
userTwo.email="kunalraj@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
