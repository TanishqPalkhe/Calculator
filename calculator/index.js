let input = document.getElementById("pop")
button=document.querySelectorAll("button")
let popValue=""
for(item of button){
    item.addEventListener("click",(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText=="="){
            input.value=eval(popValue)
        }
        else if(buttonText=="c"){
            popValue=""
            input.value=popValue    
        }
        else{
            popValue+=buttonText
            input.value=popValue
        }
    })
    
}