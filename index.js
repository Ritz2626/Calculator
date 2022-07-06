let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
let screenValue="";let buttonText;
screen.value="";
for(item of buttons)
{
    
    item.addEventListener('click',(e)=>
    {
        buttonText=e.target.innerText;
       
    
    if(buttonText==='C')
    {
    screen.value="";
    screenValue="";

}
    else if(buttonText==='=')
    {
       screen.value=eval(screenValue);
       console.log(screen.value);
    }
    else if(buttonText=='BackSp')
    {
        screenValue=screenValue.substring(0,screenValue.length-1);
        screen.value=screenValue;
    }
    else{
        screenValue+=buttonText;
        screen.value=screenValue;
        
    }});
}