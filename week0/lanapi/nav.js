
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault(); 

        navItems.forEach(i => i.classList.remove('enlarged'));

        this.classList.add('enlarged');
        
        setTimeout(() => {
            this.classList.remove('enlarged');
        }, 3000);
    });
});