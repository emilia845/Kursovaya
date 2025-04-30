// Плавная прокрутка по клику на ссылку в меню
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку

    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let people = document.getElementById('people').value;

    let formMessage = document.getElementById('formMessage');

    if (!name || !date || !time || !people) {
        if (formMessage) formMessage.style.display = 'block';
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    if (formMessage) formMessage.style.display = 'none';
    alert("Спасибо за бронирование! Мы ждем вас " + date + " в " + time + ".");
    document.getElementById('bookingForm').reset();
});


// Кнопка "наверх"
const mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

mybutton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
