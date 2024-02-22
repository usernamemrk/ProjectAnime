const controll = document.querySelectorAll('.control-control');
let currentItemm = 0;
const itemss = document.querySelectorAll('.itemitem');
const maxItemss = itemss.length;

controll.forEach(controll => {
    controll.addEventListener('click', () => {
        const isLeft=
        controll.classList.contains("arrowleft");

        if (isLeft){
            currentItemm -= 1;
        }else{
            currentItemm += 1;
        }

        if(currentItemm >= maxItemss) {
            currentItemm  = 0
        }

        if (currentItemm  < 0){
            currentItemm = maxItems - 1;
        }

        itemss.forEach(itemitem => itemitem.classList.remove('currentitem'));

        itemss[currentItemm].scrollIntoView({
            behavior: "smooth"
        });

        itemss[currentItemm].classList.add('currentitem');
    });
});