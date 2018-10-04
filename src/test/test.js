import './test.css';
import testhtml from './test.html';
var test = function() {
    const nihao = document.getElementById('nihao');
    console.log(nihao)
    nihao.addEventListener('click', () => {
        console.log('click');
    })
};
export {
    testhtml,
    test
};