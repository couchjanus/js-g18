'use strict';
function loopedColor() {
    let el = document.querySelector('.anim-rainbow');
    el.animate([
        { background: '#ff004d', offset: 0 },
        { background: '#ff77ab', offset: 0.20 },
        { background: '#00e756', offset: 0.5 },
        { background: '#29adff', offset: 0.80 },
        { background: '#ff77ab', offset: 1 }
    ], {
        duration: 2000,
        direction: 'alternate',
        iterations: Infinity
    });
}

function eventsTransform() {
    let el = document.querySelector('.anim-btn-events');
    el.addEventListener('mouseover', function () {
        let anim = el.animate({
            transform: ['scale(1)', 'scale(1.25)']
        }, 300);
        el.style.transform = 'scale(1.25)';
    });
    el.addEventListener('mouseout', function () {
        let anim = el.animate({
            transform: ['scale(1.25)', 'scale(1)']
        }, 300);
        el.style.transform = '';
    });
}
( function (){
    loopedColor();
    eventsTransform();

    // получить сумму всех элементов массива.
    var arr = [1, 2, 3, 4, 5]
    // для каждого элемента массива запустить функцию, где
    // промежуточный результат передавать первым аргументом далее
    var result = arr.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    console.log(result); // 15
    
    // При первом запуске sum – исходное значение, с которого начинаются вычисления, равно нулю (второй аргумент reduce).
    // Сначала анонимная функция вызывается с начальным значением и первым элементом массива, результат запоминается и передаётся в следующий вызов, уже со вторым аргументом массива, затем новое значение участвует в вычислениях с третьим аргументом и так далее.
    // при отсутствии initialValue в качестве первого значения берётся первый элемент массива, а перебор стартует со второго.

    // Поток вычислений
    // первый вызов	0	1	1
    // второй вызов	1	2	3
    // третий вызов	3	3	6
    // четвёртый вызов	6	4	10
    // пятый вызов	10	5	15
})();


