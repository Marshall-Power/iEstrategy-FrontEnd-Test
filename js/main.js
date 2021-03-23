//----------------------------------- Function to hide/show FAQ questions
function showQuestions() {
    let crosses = document.querySelectorAll('.js-cross');

    crosses.forEach(function(cross){
        cross.addEventListener('click', function(){
            cross.parentElement.parentElement.classList.toggle('show-question');
            cross.childNodes[3].classList.toggle('block-cross-rotated');
        });
    })
}

showQuestions();