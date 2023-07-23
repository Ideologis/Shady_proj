const ham = document.querySelector(".hamburger");
const Bars = document.querySelector(".bars");
const closes = document.querySelector(".fa-xmark");
const info = document.querySelectorAll('.categories');

// console.log(info);
// Hamburger
ham.addEventListener('click', function () {
    Bars.classList.toggle('active');
});

closes.addEventListener('click', function () {
    Bars.classList.remove('active')
});

// information

info.forEach(function (item) {
    const plus = item.querySelector('.plus_icon');
    console.log(plus);

    plus.addEventListener('click', function () {
        info.forEach(function (content) {
            console.log(content);
            if (item !== content) {
                content.classList.remove('show-text');
            }
        })
        item.classList.toggle('show-text')
    })
})