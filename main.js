const tab = document.getElementsByClassName('features__tabs_button');
var e = 0;

var img = document.getElementById('features__img');
var h2 = document.getElementById('features__h2');
var p = document.getElementById('features__p');

function tabClick(e) {    
    //tab[e].classList.add('features__tabs_button-active');

    for(var i = 0; i < tab.length; i++) {
        if (i == e) {
            tab[e].classList.add('features__tabs_button-active');       
        } else {
            tab[i].classList.remove('features__tabs_button-active');
        }
    };

    if (e == 0) {
        img.src = 'images/illustration-features-tab-1.svg';
        h2.innerHTML = 'Bookmark in one click';
        p.innerHTML = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    }

    if (e == 1) {
        img.src = 'images/illustration-features-tab-2.svg';
        h2.innerHTML = 'Intelligent search';
        p.innerHTML = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    }

    if (e == 2) {
        img.src = 'images/illustration-features-tab-3.svg';
        h2.innerHTML = 'Share your bookmarks';
        p.innerHTML = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }

}

const burger = document.getElementById('bigmac');
const burWrap = document.getElementById('bigmac-wrap');
const close = document.getElementById('mo-close');
const menu = document.getElementById('mo-menu');

function noScroll() {
    window.scrollTo(0,0);
}

burger.addEventListener('click', function(){
    menu.classList.toggle('nav__mobile_active');
    burWrap.classList.toggle('nav__hamburger-hidden');
    window.addEventListener('scroll', noScroll);
})

close.addEventListener('click',function(){
    menu.classList.toggle('nav__mobile_active');
    burWrap.classList.toggle('nav__hamburger-hidden');
    window.removeEventListener('scroll', noScroll);
});
