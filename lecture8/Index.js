// setTimeout(function(){
//     console.log('third');
// },3000);

// function syn(){
//     console.log('First');
// }
// syn();

// console.log('Second');





// let meraPara1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside Promise1');
//     },5000);
//     // resolve(1111);
//     reject(new Error('Bhai error hai'));
// });

// meraPara1.then((value)=>{console.log(value)});
// meraPara1.catch((error)=>{console.log(error)});


// let meraPara2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside Promise2');
//     },3000);
//     // resolve(1111);
//     //reject(new Error('Bhai error hai'));
// });

// console.log('Phela');




// let wadda1=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('SetTimeOut1 started');
//     },3000);
//     resolve(true);
// });

// let output=wadda1.then(()=>{
//     let wadda2=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('SetTimeOut2 started');
//         },5000);
//         resolve('wadda2 resolved');
//     });
//     return wadda2;
// });
// output.then((value)=>console.log(value));


// async function abcd(){
//     return 'Ruko Jara'; 
// }


// async function utility(){

//     let delhiMausam=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Delhi me bhoot garmi hai");
//         },5000);
//     });

//     let lkoMausam=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Lko me bhoot thandi hai");
//         },10000);
//     });

//     let dM=await delhiMausam;
//     let lM=await lkoMausam;

//     return[dM,lM]; 
// }




// let obj={
//     head:"heading"
// };



// async function utility(){
//     let content=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output=await content.json();
//     console.log(output);
// }
// utility();



// async function helper(){

//     let option={
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Prashant',
//           body: 'Theek Thaak hai',
//           userId: 2002,
//           weight:64,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
    
//     let content=await fetch('https://jsonplaceholder.typicode.com/posts',option);
//     let response=content.json();
//     return response;
// }

// async function utility(){
//     let ans=await helper();
//     console.log(ans);
// };

// utility();


function init(){
    var name='Prashant';
    function displayName(){
        console.log(name);
    }
    displayName();
}

init();




