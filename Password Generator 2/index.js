

const inputSlider=document.querySelector("[password-lengthSlider]");
const lengthDisplay=document.querySelector("[password-length]");
const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const copyBtn=document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[data-copyMsg]");
const uppercaseCheck=document.querySelector("#upperCase");
const lowercaseCheck=document.querySelector("#lowerCase");
const numbersCheck=document.querySelector("#numbers");
const symbolsCheck=document.querySelector("#symbols");
const indicator=document.querySelector("[password-strengthIndecator]");
const generateBtn=document.querySelector("#generateButton");
const allCheckBox=document.querySelectorAll("input[type=checkbox]");

const symbols='!@#$%^&*()_+-=[]{}\/|,.?~`<>';

let password="";
let passwordLength=10;
uppercaseCheck.checked=true;
let checkCount=1;

handleSlider();

// Set strength circle color to grey

// Set passwordLength
function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.innerText=passwordLength;
    //Or kuch bhi karna hai-HW
}

//Set Indicator
function setIndicator(color){
    indicator.style.backgroundcolor=color;
}

//Get Random Integer
function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

//Generate Random Number
function generateRndNumber(){
    return getRndInteger(0,9);
}

//Generate random small alphabate
function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123));
}

//Generate random captial alphabate
function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));
}

//Generate random symbol
function generateSymbol(){
    const randNum=getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);
}

//Calculate strength of Password
function calcStrength(){
    let hasUpper=false;
    let hasLower=false;
    let hasNum=false;
    let hasSym=false;

    if(uppercaseCheck.checked) hasUpper=true;
    if(lowercaseCheck.checked) hasLower=true;
    if(numbersCheck.checked) hasNum=true;
    if(symbolsCheck.checked) hasSym=true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8){
        setIndicator("#0f0");
    }
    else if((hasUpper || hasLower) && (hasNum || hasSym) && passwordLength >= 6){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}

//Copy content from ClipBoard 
async function copyContent(){
    try{
        await navigator.clipboard.writeText(password);
        copyMsg.innerText="Copied";
    }
    //if error occur
    catch(e){
        copyMsg.innerText="Failed";
    }
    // To make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout(()=>{
        copyMsg.classList.remove("active");
    },2000);
}


function shufflePassword(array){
    //Fisher Yates Method
    for(let i=array.length-1;i>0;i--){
        //Find random J using random function
        const j=Math.floor(Math.random()*(i+1));
        //Swap number at ith index with jth index
        const temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    let str="";
    array.forEach((el)=>(str+=el));
    return str;

}


function handleCheckBoxChange(){
    checkCount=0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkCount++;
        }
    });

    // Special Condition
    if(passwordLength < checkCount){
        passwordLength=checkCount;
        handleSlider();
    }
}


allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange())
})


inputSlider.addEventListener('input',(e)=>{
    passwordLength=e.target.value;
    handleSlider();
});

copyBtn.addEventListener('click',()=>{
    if(passwordDisplay.value){
        copyContent();
    }
})



function generatePassword(){
    //None of the checkbox are selected
    if(checkCount==0){
        return;
    }

    if(passwordLength < checkCount){
        passwordLength=checkCount;
        handleSlider();
    }

    //Let's starts the jounery to find the new password
    console.log("Starting the Journey")

    //Remove old Password
    password="";



    // //Let's put the stuff mentioned by checkbox
    // if(uppercaseCheck.checked){
    //     password+=generateUpperCase();
    // }
    // if(lowercaseCheck.checked){
    //     password+=generateLowerCase();
    // } 
    // if(numbersCheck.checked){
    //     password+=generateRndNumber();
    // }  
    // if(symbolsCheck.checked){
    //     password+=generateSymbol();
    // } 


    let funcArr=[];
    if(uppercaseCheck.checked){
        funcArr.push(generateUpperCase);
    }
    if(lowercaseCheck.checked){
        funcArr.push(generateLowerCase);
    }
    if(numbersCheck.checked){
        funcArr.push(generateRndNumber);
    }
    if(symbolsCheck.checked){
        funcArr.push(generateSymbol);
    }

    //Compulsory addition
    for(let i=0;i<funcArr.length;i++){
        password+=funcArr[i]();
    }
    console.log("Compulsory Addition done");

    //Remaining addition
    for(let i=0;i<(passwordLength-funcArr.length);i++){
        let randIndex=getRndInteger(0,funcArr.length);
        console.log("RandomIndex"+randIndex);
        password+=funcArr[randIndex]();
    }

    // Shuffle the Password
    password=shufflePassword(Array.from(password));
    console.log("Shuffling done");

    //Show in UI
    passwordDisplay.value=password;
    console.log("UI Addition done");

    //Calculate Strength
    calcStrength();

}

generateBtn.addEventListener('click',generatePassword);