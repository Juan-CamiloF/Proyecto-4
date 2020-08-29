let resul = document.getElementById('resul')
function operacion(op){
    let n1=parseInt(document.getElementById('n1').value)
    let n2=parseInt(document.getElementById('n2').value)
    console.log(resul)
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
            resul.innerText=n1/n2;
            break;
        default:
            resul.innerText="No resuelto"
            alert("No tengo tu operación debiste usar un simbolo diferente")
    }
}