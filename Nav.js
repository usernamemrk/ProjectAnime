const control = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

control.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft=
        control.classList.contains("arrow-left");

        if (isLeft){
            currentItem -= 1;
        }else{
            currentItem += 1;
        }

        if(currentItem >= maxItems) {
            currentItem  = 0
        }

        if (currentItem  < 0){
            currentItem = maxItems - 1;
        }

        items.forEach(item => item.classList.remove('current-item'));

        items[currentItem ].scrollIntoView({
            behavior: "smooth"
        });

        items[currentItem].classList.add('current-item');
    });
});