const list = document.querySelectorAll(".covers-list");
const covers = document.querySelector(".covers");

window.addEventListener('scroll', checkCover);
checkCover

function checkCover(){
    list.forEach((li) => {
        const coversTop = covers.getBoundingClientRect().top;
        const coversBottom = covers.getBoundingClientRect().bottom;

        if(coversTop < window.innerHeight && coversBottom >= 0) {
            li.classList.add('animate');
        } else {
            li.classList.remove('animate');
        }
    });
}