let div = document.createElement('div');
div.innerText = 'Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.';
div.style.border = 'solid 2px';
div.style.width = div.style.height = '300px';
div.style.cursor = 'se-resize';
document.querySelector('body').prepend(div);

div.addEventListener('mousedown', initResize, false);

function initResize() {
    window.addEventListener('mousemove', Resize, false);
    window.addEventListener('mouseup', stopResize, false);
}

function Resize(e) {
    div.style.width = (e.clientX - div.offsetLeft) + 'px';
    div.style.height = (e.clientY - div.offsetTop) + 'px';
}

function stopResize() {
    window.removeEventListener('mousemove', Resize, false);
    window.removeEventListener('mouseup', stopResize, false);
}