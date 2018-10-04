import './style.css';
import printMe from './print';
var app = document.getElementById('app');

var btns = document.getElementById('btns');
btns.addEventListener('click', function(event) {
    var clickBtn = event.srcElement.innerText;
    switch(clickBtn) {
        case 'test':
            import('./test/test.js').then(({test, testhtml}) => {
                app.innerHTML = testhtml;
                test();
            });
            break;
        default: 
            break;
    }
});
var button = document.getElementById('button');
button.addEventListener('click', ()=> {
    printMe();
    import('./abc').then((module) => {
        module.default()
    });
})