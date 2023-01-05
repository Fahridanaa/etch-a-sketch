
function boxsize(size = 40){
    let wid = 640/size;
    for(let i = 1; i <= size**2; i++){
        let div = document.createElement('div');
        div.className = "grid";
        div.style.width = wid + "px";
        div.style.height = wid + "px";
        div.style.boxSizing = "border-box";
        div.style.border = "1px gray solid";
        document.querySelector(".container").appendChild(div);
    }
    let reset = document.querySelector('.reset');
    let grid = document.querySelectorAll('.grid');
    grid.forEach(becomeBlack)
    reset.addEventListener('click', () => {
    grid.forEach(box => box.classList.remove('black'));
});
}

let resizeButton = document.querySelector('.resize');
resizeButton.addEventListener('click', () => {
    resize();
})

function resize(){
    let container = document.querySelector('.container');
    let size = prompt("banyak box(maks 100)")
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    boxsize(size);
}


function becomeBlack(items){
    items.addEventListener('mouseover',(e) => {
    e.target.classList.add('black')
})
}

function becomeWhite(items){
    items.addEventListener('click', (e) => {
        console.log(e.target);
    })
}


boxsize();