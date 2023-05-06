// selecting elements
const number = document.querySelector("#number");
const plus = document.querySelector("#increase");
const minus = document.querySelector("#decrease");
const number1 = document.querySelector("#number1");
const plus1 = document.querySelector("#increase1");
const minus1 = document.querySelector("#decrease1");
const reset = document.querySelector("#reset");
//creating functions
reset.addEventListener('click', (e) => {
    number.value = 0;
    number1.value = 0 ;
    localStorage.setItem('number',number.value);
    localStorage.setItem('number1',number1.value);
    revert();
    
});

plus.addEventListener('click', (e) => {
        number.value++;
    localStorage.setItem('number',number.value);
    checkValues();
} );

minus.addEventListener('click', (e) => {
    if(!(number.value<=0)){
    number.value--;
    localStorage.setItem('number',number.value);
    }
} );

number.value = localStorage.getItem('number');

plus1.addEventListener('click', (e) => {
    number1.value++;
    localStorage.setItem('number1',number1.value);
    checkValues();
} );

minus1.addEventListener('click', (e) => {
    if(!(number1.value<=0)){
    number1.value--;
    localStorage.setItem('number1',number1.value);
    }
} );
if(number.value === 5 || number1.value === 5){
    plus.setAttribute('disabled','true');

}
number.value = localStorage.getItem('number');
number1.value = localStorage.getItem('number1');

function revert(){
    plus.disabled = false;
    minus.disabled = false;
    plus1.disabled = false;
    minus1.disabled = false;
    plus.style.backgroundColor = '';
    minus.style.backgroundColor = '';
    plus1.style.backgroundColor = '';
    minus1.style.backgroundColor = '';
}

function checkValues() {
    if (number.value >= 5 || number1.value >= 5) {
        plus.disabled = true;
        minus.disabled = true;
        plus1.disabled = true;
        minus1.disabled = true;
        plus.style.backgroundColor = 'red';
        minus.style.backgroundColor = 'red';
        plus1.style.backgroundColor = 'red';
        minus1.style.backgroundColor = 'red';
    }
}

