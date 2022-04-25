const loadText = document.querySelector('.loading-text');
const bgCover = document.querySelector('.bg-cover');

let load = 0;
let int = setInterval(blurring, 30);


function blurring(){
    load++;

    if(load > 99){
        clearInterval(int);
    }

    loadText.innerText = `${load}%`
}
