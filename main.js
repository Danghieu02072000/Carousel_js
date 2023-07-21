const carousel = document.querySelector('.carousel')

let isDragStart = false;
let prevPageX, prevScrollLeft;
const  dragStart  = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
        if(!isDragStart) return
        e.preventDefault();
        let position = e.pageX - prevPageX;
       carousel.scrollLeft = prevScrollLeft - position;
    
}

const dragStop = (e) => {
        isDragStart = false;
}
carousel.addEventListener('mousemove' ,dragging )
carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('mouseup', dragStop)