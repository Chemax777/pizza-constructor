export const dropZone = document.querySelector('.table');
export const saucesImg = document.querySelectorAll('.sauce img');
export const toppingsImg = document.querySelectorAll('.topping img');


dropZone.addEventListener("dragover", e => {
    e.preventDefault();
})

saucesImg.forEach(el => {
    el.addEventListener("dragstart", e => {
        e.dataTransfer.setData('src', e.target.src);
    })
})

toppingsImg.forEach(el => {
    el.addEventListener("dragstart", e => {
        e.dataTransfer.setData('src', e.target.src);
    })
})

dropZone.addEventListener("drop", e => {
    let itemId = e.dataTransfer.getData('src');
    const copy = document.createElement('img');
    copy.src = itemId
    e.target.after(copy)
})