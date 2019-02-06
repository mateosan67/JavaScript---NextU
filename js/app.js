var teclas= document.getElementsByClassName('tecla');
var pantalla= document.getElementById('display');
var valorsum;
var valores;
var valorsmul;
var valordiv;
var valor2;
var resultado;
for(var i=0; i<12; i++){
    teclas[i].onmouseout = function() {
        this.style.width="22%";
    }
}
for(var i=12; i<18; i++){
    teclas[i].onmouseout = function() {
        this.style.width="29%";
    }
}
document.getElementById('mas').onmouseout= function(){
    this.style.width="90%";
}
//Hata ahora el codigo de arriba es solo para regrar al tamano normal de las teclas cuando se sueltan

document.getElementById('9').onclick= function(){
    this.style.width="18%";
    if(pantalla.innerHTML.length<9){
        if(pantalla.innerHTML == '0'){
            pantalla.innerHTML= "9";
        }else if(pantalla.innerHTML != "0"){
            pantalla.innerHTML = pantalla.innerHTML + "9";
        }
    }
}
document.getElementById('8').onclick= function(){
    this.style.width="18%";
    if(pantalla.innerHTML.length<9){
        if(pantalla.innerHTML == '0'){
            pantalla.innerHTML= "8";
        }else if(pantalla.innerHTML != "0"){
            pantalla.innerHTML = pantalla.innerHTML + "8";
        }
    }
}
document.getElementById('7').onclick= function(){
    this.style.width="18%";
    if(pantalla.innerHTML.length<9){
        if(pantalla.innerHTML == '0'){
            pantalla.innerHTML= "7";
        }else if(pantalla.innerHTML != "0"){
            pantalla.innerHTML = pantalla.innerHTML + "7";
        }
    }
}
document.getElementById('6').onclick= function(){
    this.style.width="18%";
    if(pantalla.innerHTML.length<9){
        if(pantalla.innerHTML == '0'){
            pantalla.innerHTML= "6";
        }else if(pantalla.innerHTML != "0"){
            pantalla.innerHTML = pantalla.innerHTML + "6";
        }
    }
}
document.getElementById('5').onclick= function(){
    this.style.width="18%";
    if(pantalla.innerHTML.length<9){
        if(pantalla.innerHTML == '0'){
            pantalla.innerHTML= "5";
        }else if(pantalla.innerHTML != "0"){
            pantalla.innerHTML = pantalla.innerHTML + "5";
        }
    }
}
document.getElementById('4').onclick= function(){
    this.style.width="18%";
    if(pantalla.innerHTML.length<9){
        if(pantalla.innerHTML == '0'){
            pantalla.innerHTML= "4";
        }else if(pantalla.innerHTML != "0"){
            pantalla.innerHTML = pantalla.innerHTML + "4";
        }
    }
}
document.getElementById('3').onclick= function(){
    this.style.width="23%";
    if(pantalla.innerHTML.length<9){
        if(pantalla.innerHTML == '0'){
            pantalla.innerHTML= "3";
        }else if(pantalla.innerHTML != "0"){
            pantalla.innerHTML = pantalla.innerHTML + "3";
        }
    }
}
document.getElementById('2').onclick= function(){
    this.style.width="23%";
    if(pantalla.innerHTML.length<9){
        if(pantalla.innerHTML == '0'){
            pantalla.innerHTML= "2";
        }else if(pantalla.innerHTML != "0"){
            pantalla.innerHTML = pantalla.innerHTML + "2";
        }
    }
}
document.getElementById('1').onclick= function(){
    this.style.width="23%";
    if(pantalla.innerHTML.length<9){
        if(pantalla.innerHTML == '0'){
            pantalla.innerHTML= "1";
        }else if(pantalla.innerHTML != "0"){
            pantalla.innerHTML = pantalla.innerHTML + "1";
        }
    }
}
document.getElementById('0').onclick= function(){
    this.style.width="23%";
    if(pantalla.innerHTML.length<9){
        if(pantalla.innerHTML == '0'){
            pantalla.innerHTML= "0";
        }else if(pantalla.innerHTML != "0"){
            pantalla.innerHTML = pantalla.innerHTML + "0";
        }
    }
}
//Con el codigo de arriba hago que se muestre en pantalla los elmentos seleccionados

document.getElementById('on').onclick= function(){
    this.style.width="18%";
    pantalla.innerHTML = "0";
    valorsum = null;
    valor2 = null;
    valordiv = null;
    valorsmul= null;
    valores=null;
}
//Reinicio la calculadora con el codigo de arriba

document.getElementById('mas').onclick= function(){
    this.style.width="84%";
    valorsum = parseInt(pantalla.innerHTML);
    pantalla.innerHTML = null;
}
document.getElementById('menos').onclick= function(){
    this.style.width="18%";
    valores = parseInt(pantalla.innerHTML);
    pantalla.innerHTML = null;
}
document.getElementById('por').onclick= function(){
    this.style.width="18%";
    valorsmul = parseInt(pantalla.innerHTML);
    pantalla.innerHTML = null;
}
document.getElementById('dividido').onclick= function(){
    this.style.width="18%";
    valordiv = parseInt(pantalla.innerHTML);
    pantalla.innerHTML = null;
}
document.getElementById('igual').onclick= function(){
    this.style.width="23%";
    if(valorsum){
        valor2 = parseFloat(pantalla.innerHTML);
        resultado = valorsum+valor2;
        pantalla.innerHTML= resultado.toString();
        valorsum=0;
    }else if(valores){
        valor2 = parseFloat(pantalla.innerHTML);
        resultado = valores-valor2;
        pantalla.innerHTML= resultado.toString();
        valores=0;
    }else if(valorsmul){
        valor2 = parseFloat(pantalla.innerHTML);
        resultado = valorsmul*valor2;
        pantalla.innerHTML= resultado.toString();
        valorsmul=0;
    }else if(valordiv){
        valor2 = parseFloat(pantalla.innerHTML);
        resultado = valordiv/valor2;
        pantalla.innerHTML= resultado.toString();
        valordiv=0;
    }
}
//Hago las cuatro operaciones basicas con los bloque de codigos de arriba

document.getElementById('punto').onclick= function(){
    this.style.width="22%";
    if(pantalla.innerHTML.indexOf(".")>-1){ 
    }else{
        pantalla.innerHTML = pantalla.innerHTML + ".";
    }
}
//Agrego un punto siempre y cuando no haya uno ya en pantalla

document.getElementById('sign').onclick= function(){
    this.style.width="18%";
    if(pantalla.innerHTML.indexOf("-")>-1){
        var masmenos = parseFloat(pantalla.innerHTML);
        var cambio= 0 - masmenos;
        pantalla.innerHTML= cambio.toString();
    }else{
        pantalla.innerHTML= "-" + pantalla.innerHTML;
    }

}
//CAmbio de signo entre + -