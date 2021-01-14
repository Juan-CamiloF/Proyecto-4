
let resul = document.getElementById('resul');

let alertaN1 = document.getElementById('alertaN1');
let alertaN2 = document.getElementById('alertaN2');
function operacion(op){
    let n1=parseInt(document.getElementById('n1').value);
    let n2=parseInt(document.getElementById('n2').value);
    switch(op){
        case "suma":
            resul.innerText=n1+n2;
            break;
        case "resta":
            resul.innerText=n1-n2;
            break;
        case "multi":
            resul.innerText=n1*n2;
            break;
        case "divi":
            if(n2==0){
                resul.innerText ="Error"
            }else{
                resul.innerText=n1/n2;
            }
            break;
        default:
           
    }
}
