
const firstperson= {
    name: "kashif",
    age: 24,
    address:{
        city: 'somewhere',
        state: 'one of them'
    }
}

const secondperson={
    name: 'sally',
    age: 32,
    adress:{
        city: "somehwre else",
        state: 'another one of them '
    }
}
/*
const {name , age}= secondperson;
console.log(name)
console.log(age)
*/

// if you want to put rest of thing in the Jsson object
const {name , ...rest}= secondperson;
console.log(rest);
// destructure the object withing the object
const{adress:{city}}= secondperson;
console.log(city)
//override object and assigning to the third one
const thirdperson = {...firstperson, ...secondperson};  
// you can also pass this as an argument of that function


