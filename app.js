let count = 0;


const increment = () => {
    count = count + 1;

    let change = document.getElementById('count-tracker').innerHTML = count;
    return change;
};

const decrement = () => {
    count = count - 1;

    let change = document.getElementById('count-tracker').innerHTML = count;
    return change;
};

const save = () =>{
    let toString = "( "+count+" )"+" ";
    let saveEl = document.getElementById('save-el').innerHTML += toString;

    return saveEl;
}