const upperChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChar="abcdefghijklmnopqrstuvwxyz"
const numberSet="1234567890"
const symbolSet="~!@#$%^&*()_+/*-"

//selectors
const passBox=document.getElementById("pass-box")
const totalChar=document.getElementById("total-char")
const upperInput=document.getElementById("upper-case");
const lowerInput=document.getElementById("lower-case");
const numberInput=document.getElementById("numbers");
const symbolInput=document.getElementById("symbols");


//getting the random data
const getRandomData=(dataset)=>{
    return dataset[Math.floor(Math.random() * dataset.length)]
}

//passowrd generator
const generatePassword= (password = "")=>{     //donot give a space over here after the password it will consider as password
    //checking the upper input
    if(upperInput.checked){
        password += getRandomData(upperChar);
    }
   // console.log(password)

    //checking the lower input
    if(lowerInput.checked){
        password += getRandomData(lowerChar);
    }
   // console.log(password)   //individual password 

     //checking the number input
     if(upperInput.checked){
        password += getRandomData(numberSet);
    }
    //console.log(password)

     //checking the symbol input
     if(symbolInput.checked){
        password += getRandomData(symbolSet);
    }
   // console.log(password)
   if(password.length <= totalChar.value){
    return generatePassword(password)
   }
   passBox.innerText=truncateString(password,totalChar.value);
}
generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePassword();
    }
)


//trim the password

function truncateString(str, num) {
    if(str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    }
    else{
        return str;
    }
}