
/*  destructureing the array */
const alpha = ['A', 'B', 'C', 'D', 'E'];
const num = [1,2,2,34]
const [a,b, ...rest]= alpha
//... to print the rest element of the array. use ",," to skip any particular element of the array
console.log(a);
console.log(b);
console.log(rest);
//combining the two array together of any type
const newArray= [...alpha, ...num ];
console.log(newArray);
//return two number from the function 
function fun(a, b){
    return [a*b, a+b];
}
// best way for the array destructring 
const [sum, mult] = fun(2,3)
console.log(sum, mult)









