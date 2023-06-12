const items = [{
        title: "Игрушка мячик",
        description: "Ваш питомец будет счастлив!",
        tags: ["cat", "dog"],
        price: 500,
        img: "./img/1.jpeg",
    },
    {
        title: "Игрушка лабиринт",
        description: "Поможет в развитии интеллекта!",
        tags: ["cat", "dog"],
        price: 900,
        img: "./img/2.jpeg",
    },
    {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
    },
    {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
    },
    {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
    },
    {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
    },
    {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
    },
    {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
    },
    {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
    },
    {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
    },
    {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
    },
    {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
    },
];

const itemTemplate = document.querySelector('#item-template'); //поиск в DOM шаблона
const shopItems = document.querySelector('#shop-items'); //обёртка для карточек с товарами
const searchBtn = document.querySelector('#search-btn'); //поиск кнопки в DOM
const searchInput = document.querySelector('#search-input'); //поиск текстового поля DOM
const nothingFound = document.querySelector('#nothing-found'); //поиск параграфа в DOM 


//Событие клика
searchBtn.addEventListener('click', function() {
    const textInput = searchInput.value; //чтение текста из input

    const filterElement = items.filter(item => item.title.trim().toLowerCase() == textInput.trim().toLowerCase()); //поиск карточек товара, подходящих под условие
    nothingFound.textContent = '';
    shopItems.innerHTML = ''; //очистка контейнера

    if (filterElement.length == 0) { // если filter вернул пустой массив, то вывести текст
        nothingFound.textContent = 'Ничего не найдено';
    } else {
        //отобразить массив результатов в элементе с id="shop-items" 
        filterElement.forEach(function(item) { //перебор коллекции
            const card = makeСardByTemplate(item.title, item.description, item.tags, item.price, item.img); //вызов функции
            shopItems.append(card); //добавление карточки с товаром в обёртку shopItems
        });
    }
});

/* Функция добавления отрисованных объектов через шаблон item-template */
function makeСardByTemplate(title, description, tags, price, img) {

    const myItem = itemTemplate.content.cloneNode(true); //клонируем теги в шаблоне
    myItem.querySelector('h1').textContent = title; //поиск в DOM элемента по селектору
    myItem.querySelector('p').textContent = description; //поиск в DOM элемента по селектору
    for (let tag of tags) {
        const elem = document.createElement("span");
        elem.textContent = tag;
        elem.classList.add("tag");
        myItem.querySelector('.tags').append(elem);
    }
    myItem.querySelector('.price').textContent = price; //поиск в DOM элемента по классу
    myItem.querySelector('img').src = img; //поиск в DOM элемента по селектору

    return myItem; //вернём готовую карточку с товаром
}

items.forEach(function(item) { //перебор коллекции
    const card = makeСardByTemplate(item.title, item.description, item.tags, item.price, item.img); //вызов функции
    shopItems.append(card); //добавление карточки с товаром в обёртку shopItems
});