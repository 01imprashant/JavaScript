console.log('Kya Haal');

// //function decleratrion
// function run(){
//     console.log('running');
// }
// //function call
// run();

// //Named function assignment
// let stand=function walk(){
//     console.log('walking');
// }

// stand();

// let jump=stand;
// jump();

// //Anonymous function assignment
// let screen=function (){
//     console.log('watching');
// }

// screen();

// let x=1;
// x='a';
// console.log(x);

// function sum(){
//     let total=0;
//     for(let value of arguments){
//         total=total+value;
//     }
//     return total;   
// }

// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(9,2,3,4,5,6,7));

// let ans=sum(1,2,3,4,5,6);
// console.log(ans);


// //rest operator
// function sum(num,value,...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,6);


// //default parameter
// function interest(p,r,t){
//     return p*r*t/100;
// }

// console.log(interest(1000,10,4));



// getter/setter
let person={
    fName:'Love',
    lName:'Babbar',

    //getter function
    get fullName(){
      return `${person.fName} ${person.lName}`; 
    },
    
    //setter function
    set fullName(value){
      if(typeof value !== String){
        throw new Error('You have not send a string');
      }
        let parts=value.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];
    }
};


try{
  person.fullName=true;
}
catch(e){
  alert(e);
}
console.log(person.fullName);