const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.navbar ul');

// 햄버거 메뉴 클릭 시 메뉴를 토글
menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
