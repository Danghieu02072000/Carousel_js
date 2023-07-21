const carousel = document.querySelector('.carousel')
const btnNext = document.querySelectorAll('.wrapper i');
const firstImg = document.querySelectorAll('.img-carousel')[0];
const widthImg = firstImg.clientWidth + 12;
const scollwidth = carousel.scrollWidth - carousel.clientWidth;
function hideIcon(){
    btnNext[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'block'
    btnNext[1].style.display = carousel.scrollLeft == scollwidth ? 'none' : 'block'
}
btnNext.forEach(function(btn){
    btn.onclick = function(e) {
        carousel.scrollLeft += btn.id == 'left' ? - widthImg : widthImg;
        setTimeout(() => {
            hideIcon()
        },60)
    }
})
let isDragStart = false;
let prevPageX, prevScrollLeft;
const  dragStart  = (e) => {
    carousel.classList.add('dragging')
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
    setTimeout(() => {
        hideIcon()
    },60)
}

const dragging = (e) => {
        if(!isDragStart) return
        e.preventDefault();
        let position = e.pageX - prevPageX;
       carousel.scrollLeft = prevScrollLeft - position;
    
}

const dragStop = (e) => {
    carousel.classList.remove('dragging')
        isDragStart = false;
}
carousel.addEventListener('mousemove' ,dragging )
carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('mouseup', dragStop)