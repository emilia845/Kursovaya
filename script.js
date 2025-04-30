// Плавная прокрутка по клику на ссылку в меню
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Проверка формы бронирования
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Отменяем стандартную отправку формы

    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let people = document.getElementById('people').value;

    if (name && date && time && people) {
        alert('Ваш столик забронирован!');
        document.getElementById('formMessage').style.display = 'none';
    } else {
        document.getElementById('formMessage').style.display = 'block';
    }
});

// Валидация формы бронирования (дублирование — можно объединить с предыдущей функцией)
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let people = document.getElementById('people').value;

    if (!name || !date || !time || !people) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

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

