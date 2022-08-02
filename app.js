let count = 0;
let change = document.getElementById('count-tracker');
let saveEl = document.getElementById('save-el');


const increment = () => {
    count = count + 1;
    
    change.innerHTML = count;
    return change;
};

const decrement = () => {
    count = count - 1;
    change.innerHTML = count;

    return change;
};

const save = () =>{
    let toString = "( "+count+" )"+" ";
    saveEl.innerHTML += toString;

    change.innerHTML = 0;
    count = 0;
    return saveEl;
}