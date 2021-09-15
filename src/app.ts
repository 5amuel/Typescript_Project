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
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children)
//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value, 
        tofrom.value, 
        details.value, 
        amount.valueAsNumber //AsNumber to convert it to number type
    );
})
