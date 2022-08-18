const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let idx = 0;

const btnBack = document.querySelector('#reBack');
const btnAdd = document.querySelector('#reAdd');

function backStart(){
    idx--
    if(idx < 0 && idx <= img.length ){
        idx = 0
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
    console.log(idx)
}

btnBack.addEventListener('click',backStart);

function AddStart(){
    idx++
    if(idx > img.length - 1){
    idx = 3
}
imgs.style.transform = `translateX(${-idx * 500}px)`
console.log(idx)
}

btnAdd.addEventListener('click',AddStart)
