// //normal code
// const t1=performance.now();
// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='This is para'+i;

//     document.body.appendChild(newElement);
// }
// const t2=performance.now();
// console.log('This took '+(t2-t1)+'ms');




// //optimised code
// const t3=performance.now();
// let myDiv=document.createElement('div');
// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='This is para'+i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);
// const t4=performance.now();
// console.log('This took '+(t4-t3)+'ms');




// //document fragmentation
// const t5=performance.now();
// let fragment=document.createDocumentFragment();
// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='This is para'+i;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);
// const t6=performance.now();
// console.log('This took '+(t5-t6)+'ms');





// function addPara(){
//     let para=document.createElement('p');
//     para.textContent='JS is Single-Threaded language';

//     document.body.appendChild(para);
// }

// function appendNewMessage(){
//     let para=document.createElement('p');
//     para.textContent='Kya haal chal';

//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();



setTimeout(function(){
    console.log('Hello EveryOne');
},5000);