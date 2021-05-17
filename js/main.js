let submitBtn=document.getElementById('submitBtn');
let number=document.getElementById('number');
let numbers;
let span =document.getElementById("span");
let res=document.getElementById("res");
let result=document.getElementById("result");
let msg;

if(localStorage.getItem('list')==null)
{
    let randomNumber=Math.floor(Math.random() * 100) + 1;
    localStorage.setItem('randNum',JSON.stringify(randomNumber));
    numbers=[];
}
else {
    numbers=JSON.parse(localStorage.getItem('list'));
    display();
    
    displayMsg(JSON.parse(localStorage.getItem('msg')));
    
}

if(numbers.length==10){
    number.disabled="true";
    submitBtn.disabled="true";
    result.innerHTML="You Loss!";
    
  }
else{
    startBtn.style.display="none";
   // result.style.display="none";
}

startBtn.onclick=function(){
      numbers=[];
      localStorage.removeItem("list");
      localStorage.removeItem("randNum");
      number.removeAttribute("disabled");
      submitBtn.removeAttribute("disabled");
      startBtn.style.display="none";
      result.innerHTML=" ";

      display();
      let randomNumber=Math.floor(Math.random() * 100) + 1;
    localStorage.setItem('randNum',JSON.stringify(randomNumber));
   
      
      
     
  }
submitBtn.onclick=function(){
    add()
    display();
    
}



function add(){
    var num=Number(number.value);
    numbers.push(num);
    localStorage.setItem('list',JSON.stringify(numbers));
    game();
}

function game(){
    let num=Number(number.value);
    let rand=JSON.parse(localStorage.getItem("randNum"));
    if(num==rand){
        number.disabled="true";
    submitBtn.disabled="true";
    startBtn.style.display="block";
    result.innerHTML="Congratulations! You got it right!";
    result.style.cssText="background-color:green !important";
    }else if(num<rand){
        m="Last guess was too low!";
       localStorage.setItem('msg',JSON.stringify(m));
        displayMsg(msg);
        
    }
    else{
        m="Last guess was too high!";
        localStorage.setItem('msg',JSON.stringify(m));
        displayMsg(msg);
        
    }
}

function display(){
   
    var ts="";
    for(var i=0;i<numbers.length;i++){
        ts+=` `+numbers[i];
    }
    span.innerHTML=ts;

    

   
}

function displayMsg(msg){
    if(msg!=null){
    result.innerHTML=msg; }
}
