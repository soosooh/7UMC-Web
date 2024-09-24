function changeHeader() {
    const container = document.querySelector('.container1');
    const menu = document.querySelector('#menu');
    if (window.innerWidth < 1024) {
        container.style.display = 'none';
        menu.style.display = 'flex';
    } else {
        container.style.display = 'flex';
        menu.style.display = 'none';
    }
}

window.addEventListener('resize', changeHeader);
window.addEventListener('load', changeHeader);
