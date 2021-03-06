// массив для вывода в график
var arr = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];

//функия анимирования
function animate () {
    //выбираем элементы
    var bars = document.getElementById("bar-chart").getElementsByClassName("vbar");
    var i = 0;
    //с помощью цикла добавляем для каждого выбранного элемента функционал
    for (var bar of bars) {
      //меняем высоту элемента соответственно его значению, шаг высоты(1) равен 20px. 
      bar.style.height = arr[i] * 2 + "0px";
      i++;
    }
}

//добавление необходимых по условию задачи цветов для колонок гистограммы
function addColor(bar) {
    //определяем цвета
    const green = "#00FF00";
    const yellow = "#FFFF00";
    const red = "#FF0000";
    const trans = "transparent";
    
    //по условию задания возвращаем сответствующий цвет 
    if(bar >= 0 && bar <= 5) {
        return green;
    } else if(bar >= 6 && bar <= 10) {
        return yellow;
    } else if(bar >= 11) {
        return red;
    } else {
        return trans;
    }
} 

//выводим на экран колонки
window.addEventListener("load", function(){
    //определяем контейнер для гистограммы
    container = document.getElementById("bar-chart");
    //с помощью цикла для каждого элемента массива создаем отдельную колонку гистограммы
    for(var i = 0; i < arr.length; i++) {
        var bar = document.createElement("div");
        bar.classList.add("vcell");
        //внутри добавлем колонку которая будет отображать необходимое нам значение
        var inbar = document.createElement("div");
        inbar.classList.add("vbar");
        //стилизируем соответсвующие колонки добавляя их цвет и значение
        inbar.style = "background: " + addColor(arr[i]) + "; height: 0;";
        inbar.innerHTML = arr[i];
        //выводим готовые колонки в гистограмму
        bar.appendChild(inbar);
        container.appendChild(bar);
    }
  
    //анимируем появление колонок 
    setTimeout(animate, 100);
});