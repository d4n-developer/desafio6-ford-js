const slides = document.querySelectorAll('.slide');

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slides[index].classList.add('active');
}

nextButton.addEventListener('click', () => {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

prevButton.addEventListener('click', () => {

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});

let autoSlideInterval = setInterval(() => {
    currentSlide++;
    if(currentSlide >= slides.length){
        currentSlide = 0;
    }
    showSlide(currentSlide);
}, 5000);