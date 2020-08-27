

let op=document.getElementById('op')

op.addEventListener('click',()=>{
    let n1=parseInt(document.getElementById('n1').value,10);
    let n2=parseInt(document.getElementById('n2').value,10);
    let resul=document.getElementById('resul')

    let operacion=prompt("Dime el simbolo de la operación [+ , - , * , / ]")
    switch(operacion){
        case "+":
            resul.innerText=n1+n2;
            break;
        case "-":
            resul.innerText=n1-n2;
            break;
        case "*":
            resul.innerText=n1*n2;
            break;
        case "/":
            resul.innerText=n1/n2;
            break;
        default:
            resul.innerText="No resuelto"
            alert("No tengo tu operación debiste usar un simbolo diferente")
    }
})




