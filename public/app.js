"use strict";
//para extraer atributos del elemeto html se agrega un signo de interrogacion
//en el momento de la extraccion del atributo
// const anchor = document.querySelector('a');
// console.log(anchor?.href)
//otra extraer atributo del elemento es agregando signo de admiracion invertido
// como se muestra acontinuacion
// console.log(form.className)
//Otra forma de extraer todos los atributos y metodos es de la siguiente manera
// const form_ = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form_.children)
var form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber //AsNumber to convert it to number type
    );
});
