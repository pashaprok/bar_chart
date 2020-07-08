// массив для вывода в график
var arr = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];

//функия анимирования
function animate () {
    var bars = document.getElementById("bar-chart").getElementsByClassName("vbar");
    var i = 0;
    for (var bar of bars) {
      bar.style.height = arr[i] * 2 + "0px";
      i++;
    }
}

//добавление необходимых по условию задачи цветов для колонок гистограммы
function addColor(bar) {
    const green = "#00FF00";
    const yellow = "#FFFF00";
    const red = "#FF0000";
    if(bar >= 0 && bar <= 5) {
        return green;
    } else if(bar >= 6 && bar <= 10) {
        return yellow;
    } else if(bar >= 11) {
        return red;
    } 
} 

window.addEventListener("load", function(){
    //выводим на экран колонки
    container = document.getElementById("bar-chart");
    for(var i = 0; i < arr.length; i++) {
        var bar = document.createElement("div");
        bar.classList.add("vcell");
        
        var inbar = document.createElement("div");
        inbar.classList.add("vbar");
        inbar.style = "background: " + addColor(arr[i]) + "; height: 0;";
        inbar.innerHTML = arr[i];
  
        bar.appendChild(inbar);
        container.appendChild(bar);
    }
  
    //анимируем появление колонок 
    setTimeout(animate, 100);
});