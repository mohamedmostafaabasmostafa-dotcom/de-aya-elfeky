document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        loadingOverlay.style.opacity = '0';
        
        setTimeout(function() {
            loadingOverlay.style.display = 'none';
            const card = document.querySelector('.card');
            card.classList.add('fade-in');
        }, 500);
    }, 2000);
    
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        link.style.animationDelay = `${0.1 * index}s`;
        link.classList.add('fade-in');
    });
    
    const shareBtn = document.getElementById('shareBtn');
    const tooltipText = document.getElementById('tooltipText');
    
    shareBtn.addEventListener('click', function() {
        const currentURL = window.location.href;
        
        navigator.clipboard.writeText(currentURL).then(() => {
            shareBtn.innerHTML = '<i class="fas fa-check"></i> تم النسخ';
            
            setTimeout(() => {
                shareBtn.innerHTML = '<i class="fas fa-share-alt"></i> مشاركة الرابط';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
    
    window.addEventListener('scroll', function() {
        const card = document.querySelector('.card');
        const scrollPosition = window.scrollY;
        
        card.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    });
});
