// 반짝임을 동적으로 생성하는 스크립트
const sparkleContainer = document.querySelector('.sparkle');

for (let i = 0; i < 50; i++) {
    const sparkle = document.createElement('div');
    sparkle.style.left = Math.random() * 100 + 'vw'; // 랜덤한 x 위치
    sparkle.style.top = Math.random() * 100 + 'vh'; // 랜덤한 y 위치
    sparkle.style.animationDuration = Math.random() * 1 + 1 + 's'; // 랜덤한 애니메이션 지속 시간
    sparkleContainer.appendChild(sparkle);
}

// 햄버거 메뉴 토글 기능
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('show'); // show 클래스 토글
});
