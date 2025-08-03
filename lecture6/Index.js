// document.addEventListener('click',function(){
//     console.log('I am clicked on Document')
// });

// let content=document.querySelector('h2');

// content.addEventListener('click',function(){
//     content.style.background='green';
// });

// function print(){
//     console.log('Hiiii');
// }

// document.addEventListener('click',print);
// document.removeEventListener('click',print);


// document.addEventListener('click',function(){
//     console.log('Hiiii');
// });

// document.removeEventListener('click',function(){
//     console.log('Hiiii');
// });

// let content=document.querySelector('#wrapper');

// content.addEventListener('click',function(event){
//     console.log(event);
// });

// let links=document.querySelectorAll('a');
// let thirdLink=links[2];
// thirdLink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('Maza Aya');
// });

// let myDiv=document.createElement('div');

// function paraStatus (){
//     console.log('I am clicked on para');
// }

// myDiv.addEventListener('click',paraStatus); 
    
// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p');

//     newElement.textContent='I am the para'+ i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

let content=document.querySelector('#wrapper');
content.addEventListener('click',function(event){
    if(event.target.nodeName==='SPAN'){
        console.log('I am span' + event.target.textContent);
    }
});