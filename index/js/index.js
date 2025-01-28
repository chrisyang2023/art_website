document.addEventListener("DOMContentLoaded", function() {
    var floatingText = document.querySelector('.floating-text');
    floatingText.style.opacity = '0'; 
    floatingText.addEventListener('click', function() {
        floatingText.style.animation = 'fadeIn 3s ease-in-out forwards';
    });
});