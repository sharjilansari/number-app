// selecting elements
const number = document.querySelector("#number");
const reset = document.querySelector("#reset");
const plus = document.querySelector("#increase");
const minus = document.querySelector("#decrease");

//creating functions
reset.addEventListener('click', (e) => {
    number.value = 0 ;
    localStorage.setItem('number',number.value);
});

plus.addEventListener('click', (e) => {
    number.value++;
    localStorage.setItem('number',number.value);
} );

minus.addEventListener('click', (e) => {
    if(!(number.value<=0)){
    number.value--;
    localStorage.setItem('number',number.value);
    }
} );

number.value = localStorage.getItem('number');



