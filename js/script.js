/*var texto, resultado;
texto = prompt("Ingrese numero: ")
resultado=Math.sqrt(texto)
document.write(resultado);
console.log(resultado);
alert(resultado);
*/
/*
var y=1,x,op=0;
x=parseFloat(prompt("n1: "))
y=parseFloat(prompt("n2: "))
op=parseInt(prompt("Op: "))
if (a>b) {
    mostrar(a)
}else{
mostrar(b)
}

switch(op){
    case 1:mostrar(suma());
    break;
    case 2:mostrar(resta());
    break;
    case 3:mostrar(multi());
    break;
    case 4:mostrar(div());
    break;

    default: break;
}
*/
function suma(){
return (x+y);
}
function resta(){
return (x-y);
}
function multi(){
return (x*y);
}
function divi(){
if (y==0) {
    return "no se puede dividir"
}
return (x/y);
}

/*
while(x>0){
op=op+(x*x);
x--;
mostrar(op)
}
mostrar(op)
function mostrar(resultado){
     document.write(resultado);
     console.log(resultado);
     alert(resultado);
}
*/
var x,y,op;
var res=document.getElementById("result");
function calcular(){
    x=parseInt(document.getElementById("n1").value);
    y=parseInt(document.getElementById("n2").value);
    op=document.getElementById("oper").value;

    switch(op){
case '1': res.value =suma(); break;
case '2': res.value =resta(); break;
case '3': res.value =multi(); break;
case '4': res.value =divi(); break;
    }

}