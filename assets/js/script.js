function stepForm() {
    const steps = document.querySelectorAll('.form__step');
    const prevBtn = document.querySelector('.prev__step');
    const nextBtn = document.querySelector('.next__step');
    const stepNumber = document.querySelectorAll('.step__number');
    const form = document.querySelector('.steps__form');
    const finishBlock = document.querySelector('.finish');

    form.addEventListener('submit', (e) => e.preventDefault());

    let formStep = 0;

    prevBtn.addEventListener('click', () => {
        formStep--
        stepNumber[formStep + 1].classList.remove('active__number');
        updateFormSteps()
    })
    nextBtn.addEventListener('click', () => {
        if (formStep < steps.length - 1) {
            formStep++
            updateFormSteps()
        } else {
            nextBtn.addEventListener('click', () => {
                finishBlock.style.display = 'flex';
                form.style.display = 'none';
            })
        }
    })


    function updateFormSteps() {
        steps.forEach((step) => {
            step.classList.contains('active') && step.classList.remove('active');
        })

        steps[formStep].classList.add('active');
        stepNumber[formStep].classList.add('active__number');

        if(formStep === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }

        if(formStep === steps.length - 1) {
            nextBtn.innerHTML = 'Отправить';
        } else {
            nextBtn.innerHTML = 'Далее';
            finishBlock.style.display = 'none';
        }



    }

    updateFormSteps()


}
if(document.querySelector('.form__step')) {
    stepForm()
}


// Scroll Animate


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart; 
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }    
    }
    
    setTimeout(() => {
        animOnScroll();
    }, 300);
}


// Burger Menu

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu){
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
