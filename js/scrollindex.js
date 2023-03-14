const scroll_nav__logo = document.getElementById('scroll_nav__logo');
const scroll_hero__title = document.getElementById('scroll_hero__title');
const scroll_hero__img = document.getElementById('scroll_hero__img');
const scroll_subtitle = document.getElementById('scroll_subtitle1');
const functions__card1 = document.getElementById('functions__card1');
const functions__card2 = document.getElementById('functions__card2');
const functions__card3 = document.getElementById('functions__card3');
const scroll_subtitle2 = document.getElementById('scroll_subtitle2');
const scroll_services__container_p = document.getElementById('scroll_services__container_p');
const scroll_services__img = document.getElementById('scroll_services__img');
const scroll_subtitle3 = document.getElementById('scroll_subtitle3');
const scroll_ourservices__main = document.getElementById('scroll_ourservices__main');
const scroll_subtitle4 = document.getElementById('scroll_subtitle4');
const scroll_whowesupport__main = document.getElementById('scroll_whowesupport__main');
const scroll_nav__link2 = document.getElementById('scroll_nav__link2');

const loadElement = (entries, observer) => {

    entries.forEach((entrie) => {
        if (entrie.isIntersecting) {
            entrie.target.classList.add('visible');
        }
    });
}

const observer = new IntersectionObserver(loadElement, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.25
});

observer.observe(scroll_nav__logo);
observer.observe(scroll_hero__title)
observer.observe(scroll_hero__img);
observer.observe(scroll_subtitle);
observer.observe(functions__card1);
observer.observe(functions__card2);
observer.observe(functions__card3);
observer.observe(scroll_subtitle2);
observer.observe(scroll_services__container_p);
observer.observe(scroll_services__img);
observer.observe(scroll_subtitle3);
observer.observe(scroll_ourservices__main);
observer.observe(scroll_subtitle4);
observer.observe(scroll_whowesupport__main);
observer.observe(scroll_nav__link2);