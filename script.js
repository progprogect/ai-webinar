// Simple JavaScript for the landing page

// Survey Form Logic
function nextStep() {
    const idea = document.getElementById('automationIdea').value.trim();
    
    if (!idea) {
        alert('Пожалуйста, опишите ваши задачи');
        return;
    }
    
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
}

// Main functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Survey form submission
    const surveyForm = document.getElementById('surveyForm');
    if (surveyForm) {
        surveyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const idea = document.getElementById('automationIdea').value.trim();
            const contact = document.getElementById('telegramContact').value.trim();
            
            if (!contact) {
                alert('Пожалуйста, укажите ваш Telegram');
                return;
            }
            
            // Show success step
            document.getElementById('step2').classList.add('hidden');
            document.getElementById('step3').classList.remove('hidden');
            
            // In real app would send to server
            console.log('Survey data:', { idea, contact });
        });
    }
    
    // Smooth animations on scroll
    const animatedElements = document.querySelectorAll('.case, .stats, .highlight-box, .conclusion, .total-savings');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Apply animations
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Optional countdown timer
    function createCountdown() {
        const eventDate = new Date('2025-06-15T16:00:00+03:00');
        const countdownElement = document.getElementById('countdown');
        
        if (!countdownElement) return;
        
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = eventDate - now;
            
            if (distance < 0) {
                countdownElement.innerHTML = 'Вебинар начался!';
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            
            countdownElement.innerHTML = `${days}д ${hours}ч ${minutes}м`;
        };
        
        updateCountdown();
        setInterval(updateCountdown, 60000); // Update every minute
    }
    
    createCountdown();
}); 