const mediaQuery = window.matchMedia('(max-width: 500px)');

function change(e){

    const menuItems = document.querySelectorAll('.item');
    if (e.matches) { // 400px 이하일 때
        menuItems.forEach(item => {
            item.innerHTML = '<img src="menu.png">'; 
        });
    } else { 
        menuItems[0].textContent = '소개';
        menuItems[1].textContent = '프로젝트';
        menuItems[2].textContent = 'Q&A';
        menuItems[3].textContent = 'UMC FramePhoto';
        menuItems[4].textContent = '지원하기';
    }
}

updateMenuItems(mediaQuery);