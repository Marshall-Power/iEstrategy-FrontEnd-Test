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