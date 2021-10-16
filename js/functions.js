const rotateSelector = (deg) => {
    const selector = document.querySelector('.fa-caret-down');
    selector.style.transition = ".3s";

    selector.style.transform = `rotate(${deg}deg)`;
}

const dropdown = () => {
    const dropdown = document.querySelector('#dropdown');
    
    if(dropdown.style.display == 'none'){
        dropdown.style.display = 'flex';
        rotateSelector(180);
    }else{
        dropdown.style.display = 'none';
        rotateSelector(0);
    }
}

(() => {
    const header = document.querySelector('[data-anime]');
    const animationClass = 'animated';

    function headerAnimation(){
        let windowTop = window.pageYOffset;

        if(windowTop >= 100){
            header.classList.add(animationClass)
        }else{
            header.classList.forEach((e) => {
                console.log(e)
                if(e == animationClass){
                    header.classList.remove(animationClass);
                }
            });
        }
    }

    window.addEventListener('scroll', () => {
        headerAnimation();
    });
})()