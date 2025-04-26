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
// Валидация формы бронирования
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значения из полей формы
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var people = document.getElementById('people').value;

    // Проверка на пустые поля
    if (!name || !date || !time || !people) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    // Если все поля заполнены, показываем успешное уведомление
    alert("Спасибо за бронирование! Мы ждем вас " + date + " в " + time + ".");
    
    // Очищаем форму после отправки
    document.getElementById('bookingForm').reset();
});
// Получаем кнопку
var mybutton = document.getElementById("scrollToTopBtn");

// Когда пользователь прокручивает страницу на 20px вниз от верхней части документа, кнопка появляется
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// Когда пользователь кликает на кнопку, прокрутка страницы возвращается наверх
mybutton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
