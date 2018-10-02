import test from './test.css';
import testhtml from './test.html';
document.body.innerHTML = testhtml;
const nihao = document.getElementById('nihao');
console.log(nihao)
nihao.addEventListener('click', () => {
    console.log('click');
})
