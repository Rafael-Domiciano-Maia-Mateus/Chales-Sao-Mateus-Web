const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const imagensFundo = ['img/homeImg/home.png', 'img/homeImg/home2.png', 'img/homeImg/home3.png', 'img/homeImg/home4.png'];
const homeSection = document.querySelector('.home');

if (homeSection) {
    imagensFundo.forEach((img, index) => {
        const div = document.createElement('div');
        div.classList.add('home-bg');
        if (index === 0) div.classList.add('active');
        div.style.backgroundImage = `url(${img})`;
        homeSection.appendChild(div);
    });

    const bgDivs = document.querySelectorAll('.home-bg');
    let i = 0;

    setInterval(() => {
        bgDivs[i].classList.remove('active');
        i = (i + 1) % bgDivs.length;
        bgDivs[i].classList.add('active');
    }, 5000);
}
