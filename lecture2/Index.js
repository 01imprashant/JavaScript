console.log('Chaliya suru karte hai');
//Object Creation
// let rectangle={
//     length:1,
//     breadth:2,

//     draw:function(){
//        console.log('drawing rectangle'); 
//     }
// };

//factory function
// function createRectangle(length,breadth){
   
//     let rectangle={
//         length=length,
//         breadth=breadth,
    
//         draw(){
//            console.log('drawing rectangle'); 
//         }
//     };
//     return rectangle;
// }

// let rectangleObj1=createRectangle(2,4);
// let rectangleObj2=createRectangle(4,6);
// let rectangleObj3=createRectangle(34,23);


//constructor function ->properties/methods ko initilise/define karta hai
// function Rectangle(length,breadth){
//     this.length=length;
//     this.breadth=breadth;
//     this.draw=function(){
//         console.log('drawing');
//     }
// }

// let rectangleObject=new Rectangle(3,6);
// rectangleObject.color='red';
// console.log(rectangleObject);
// delete rectangleObject.color;
// console.log(rectangleObject);


// let Rect=new Function('length','breadth',`function Rectangle(length,breadth){
//     this.length=length;
//     this.breadth=breadth;
//     this.draw=function(){
//         console.log('drawing');
//     }
// }`);

// let obj=new Rect(23,34);
// console.log(obj);

// Rectangle.length;
// Rectangle.breadth;
// Rectangle.call;
// Rectangle.arguments;

// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);


// let x={value:10};
// let y=x;
// x.value++;
// console.log(x.value);
// console.log(y.value);

// for(let key in rectangle){
//     console.log(key,rectangle[key]);
// }

// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }
//clone->1
// let src={
//     a:10,
//     b:20,
//     c:30
// };

// let dest={};

// for(let key in src){
//     dest[key]=src[key];
// }

// console.log(dest);

//colne->2
// let src={
//     a:10,
//     b:20,
//     c:30
// };


// let dest=Object.assign({},src);

// console.log(dest);

// let src={
//     a:10,
//     b:20,
//     c:30
// };

// let dest={... src};

// console.log(dest);



// rectangle.length;
// rectangle.breadth;
// rectangle.draw();

// let rectangle1={
//     length:1,
//     breadth:2,

//     draw:function(){
//        console.log('drawing rectangle'); 
//     }
// };

// let rectangle2={
//     length:1,
//     breadth:2,

//     draw:function(){
//        console.log('drawing rectangle'); 
//     }
// };

