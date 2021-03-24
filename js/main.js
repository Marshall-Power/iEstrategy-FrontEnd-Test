//----------------------------------- Function to hide/show each FAQ question
function showQuestions() {
    const crosses = document.querySelectorAll('.js-cross');

    crosses.forEach(function(cross){
        cross.addEventListener('click', function(){
            cross.parentElement.parentElement.classList.toggle('show-question');
            cross.childNodes[3].classList.toggle('block-cross-rotated');
        });
    })
}

showQuestions();

//----------------------------------- Function to hide/show more FAQ questions
function seeMore() {
    const faqSection = document.querySelector('.js-faq-section'),
          overlay = document.querySelector('.js-faq-overlay'),
          btns = document.querySelectorAll('.js-see-button'),
          btn_plus = document.querySelector('.js-see-more'),
          btn_less = document.querySelector('.js-see-less');

    btns.forEach(function(btn){
        btn.addEventListener('click', function(){
            btn_plus.classList.toggle('display-none');
            btn_less.classList.toggle('display-none');
            faqSection.classList.toggle('section-faq-full');
            overlay.classList.toggle('position-relative');
        });
    })
}

seeMore();

//----------------------------------- Function switch quotes

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("quote-slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
