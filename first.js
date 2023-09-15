let input=document.getElementById('result').value;
let buttons=document.getElementsByClassName("button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            input=eval(input);
            document.getElementById('result').value=input; 
        }else if(e.target.innerHTML=='c'){
            input='';
            document.getElementById('result').value=input;
        }else{
            input=input+(e.target.innerHTML);
            document.getElementById('result').value=input;
        }
    })
})