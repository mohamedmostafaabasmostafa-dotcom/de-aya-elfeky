    document.addEventListener('DOMContentLoaded', function() {
      function createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');
          
          const size = Math.random() * 10 + 5;
          const colors = [
            'rgba(63, 188, 187, 0.6)',
            'rgba(99, 198, 197, 0.6)',
            'rgba(150, 216, 214, 0.6)',
            'rgba(229, 243, 243, 0.6)'
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.background = color;
          
          const left = Math.random() * 100;
          const animationDelay = Math.random() * 15;
          const animationDuration = Math.random() * 10 + 15;
          
          particle.style.left = `${left}%`;
          particle.style.animationDelay = `${animationDelay}s`;
          particle.style.animationDuration = `${animationDuration}s`;
          
          particlesContainer.appendChild(particle);
        }
      }
      
      createParticles();
      
      setTimeout(function() {
          const loadingOverlay = document.getElementById('loadingOverlay');
          loadingOverlay.style.opacity = '0';
          
          setTimeout(function() {
              loadingOverlay.style.display = 'none';
              const card = document.querySelector('.card');
              card.classList.add('fade-in');
          }, 500);
      }, 2000);
      
      const socialLinks = document.querySelectorAll('.social-link, .group-link');
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
          
          card.style.transform = `translateY(${scrollPosition * 0.05}px) scale(1)`;
      });
      
      const tabs = document.querySelectorAll('.section-tab');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          
          tab.classList.add('active');
          
          document.querySelectorAll('.section-content').forEach(content => {
            content.classList.remove('active');
          });
          
          const contentId = `${tab.dataset.tab}-content`;
          const activeContent = document.getElementById(contentId);
          activeContent.classList.add('active');
          
          if (tab.dataset.tab === 'communication') {
            activeContent.classList.add('fadeInRight');
            activeContent.classList.remove('fadeInLeft');
          } else {
            activeContent.classList.add('fadeInLeft');
            activeContent.classList.remove('fadeInRight');
          }
        });
      });
    });
