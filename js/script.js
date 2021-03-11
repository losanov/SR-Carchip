'use strict';

window.addEventListener('DOMContentLoaded', function () {
  const body = document.querySelector('.body');

  function sliderBackGround(quantityImg, maxMobWidth) {
    let imgCount = 1;
    setInterval(() => {
      if (imgCount > quantityImg) {
        imgCount = 1;
      }
      let mobImg = screen.width > maxMobWidth ? '' : 'mob-';
      body.style.backgroundImage = `url(../img/${mobImg}wallpapers-cars-0${imgCount}.jpg)`;
      imgCount++;
    }, 2000);
  }

  sliderBackGround(3, 767);
  
  // генерироание меню

  const menuItems = [
    {link: '/', title: 'Вернуться на главную', name: 'Главная'},
    {link: 'diag', title: 'Что мы можем для вас сделать', name: 'Диагностика'},
    {link: 'katalizator', title: 'Физическое и программное удаление катализаторов. Перевод на Евро2', name: 'Катализатор'},
    {link: 'foto', title: 'Физическое и програмное удаление сажевого фильтра', name: 'Сажевый фильтр'},
    {link: 'egr', title: 'Отключение клапана EGR (ЕГР)', name: 'EGR'},
    {link: 'srs', title: 'Ремонт подушек безопасности', name: 'SRS AirBag'},
    {link: 'immo-off', title: 'Решения без Иммобилайзера', name: 'Immo Off'},
    {link: 'remont-ebu', title: 'Ремонт и замена блоков управления', name: 'Ремонт ЭБУ'},
    {link: 'tune', title: 'подменю', name: 'Чип Тюнинг'},
    {link: 'dsg', title: 'тюнинг коробок DSG', name: 'DSG'},
    {link: '', title: 'подменю Приборная панель', name: 'Приборная панель'},
    {link: 'kompjuternaja-diagnostika-motor-testerom', title: 'Осцилограф', name: 'Диагностика мотор-тестером'},
    {link: 'price', title: 'Цены', name: 'Цены'},
    {link: 'firmware', title: 'Прошивки на заказ', name: 'Прошивки на заказ'},
    {link: 'contacts', title: 'как с нами связатся', name: 'Контакты'},
    {link: 'about', title: 'Информация о компании', name: 'Среда обитания'},
    {link: 'dop-uslugi', title: 'Доп Услуги', name: 'програмное удаление...'},
  ]
  
  
  const menuList = document.querySelector('.menu_list');
  const str = menuItems.map((item) => {
    const {link, title, name} = item;
    return (`<li class='menu_list_item'>
          <span>
            <a class='span_menu_item' href="${link}" title='${title}'>${name}</a>
          </span>
        </li>`)
  }).join(' ');

  menuList.innerHTML = str;

})
