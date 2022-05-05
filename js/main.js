function odd(number){
    let a =[];
    let sum=0;
    for(let i = 0; i<number.length;i++){
        if(number[i]%2==0){
            sum+=number[i];
        }
        
    }
    return sum;
}


console.log(odd([1,2,3,4,5,6]))

function even(number){
    let sum = 0;
    for (let index = 0; index < number.length; index++) {
        if(number[index]%2!=0)
        sum+=number[index];
        
    }
    return sum;
}
console.log(even([1,2,3,4,5,6,7]))

function DividedBy3(number){
    let sum = 0;
    for (let index = 0; index < number.length; index++) {
        if(number[index]%3==0)
        sum+=number[index];
        
    }
    return sum;
}

function SumOfSelectedNumbers(numbers,check){
    if((typeof check) != 'function'){
        alert('Wrong' );
        return; 
    } 
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        if(check(numbers[i]))
            sum+=numbers[i];
    }
    return sum;
}

let Func = function isEven(number){
    return number%2==0;
}
function isOdd(number){
    return number%2==1;
}


class User{
    constructor(name ,surname,age){
        this.Name=name;
        this.Surname=surname;
        this.Age=age;

        this.showInfo = function(){
            console.log(`FullName: ${this.Name} ${this.Surname} - Age: ${this.Age}`)
        }
    }
}


let std1 = new User('Seymur','Mustafayev',20);
let std2 = new User('Rinad','Mustafayev',2);


class Employee extends User{
    constructor(name,surname,age,position,salary){
        super(name,surname,age);
        this.position = position;
        this.salary = salary;
    }
}

let emp1 = new Employee('Seymur','Mustafayev',20,'Issiz',2.8090);
console.log(emp1);


function repeat(word, count){
    let newtr="";
    for (let i = 1; i <= count; i++) {
        newtr+=word      
    }
    if(count == null){
        newtr=word;
    }
    return newtr;
}


console.log(repeat("ha!",1));

