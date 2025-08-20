// Função para mostrar o popup após 3 segundos
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('promo-popup').classList.add('show');
    }, 3000);
});

// Fechar popup
document.querySelector('.close-popup').addEventListener('click', function() {
    document.getElementById('promo-popup').classList.remove('show');
});

// Fechar popup clicando fora
document.getElementById('promo-popup').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('show');
    }
});

// Função para rolar até a oferta
function scrollToOffer() {
    document.getElementById('promo-popup').classList.remove('show');
    document.getElementById('offer').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Countdown Timer
function startCountdown() {
    // Define o tempo final (2 horas a partir de agora)
    const endTime = new Date().getTime() + (2 * 60 * 60 * 1000);
    
    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;
        
        if (timeLeft > 0) {
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            // Atualiza popup timer
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            
            // Atualiza main timer
            document.getElementById('main-hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('main-minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('main-seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            // Timer expirado - reinicia para mais 2 horas
            startCountdown();
        }
    }
    
    // Atualiza imediatamente
    updateTimer();
    
    // Atualiza a cada segundo
    setInterval(updateTimer, 1000);
}

// Inicia o countdown quando a página carrega
startCountdown();

// Adiciona efeito de hover nos botões CTA
document.querySelectorAll('.cta-button, .cta-button-main').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
});

// Adiciona animação aos testemunhos quando entram na viewport
function animateOnScroll() {
    const testimonials = document.querySelectorAll('.testimonial');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    testimonials.forEach(testimonial => {
        testimonial.style.opacity = '0';
        testimonial.style.transform = 'translateY(30px)';
        testimonial.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(testimonial);
    });
}

// Inicia animações quando a página carrega
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Adiciona efeito de pulsação no botão principal
setInterval(function() {
    const mainButton = document.querySelector('.cta-button-main');
    if (mainButton) {
        mainButton.style.animation = 'pulse 0.5s ease-in-out';
        setTimeout(() => {
            mainButton.style.animation = '';
        }, 500);
    }
}, 5000);

// Adiciona CSS para animação de pulsação
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Efeito de partículas no header
function createParticles() {
    const header = document.querySelector('.header');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 255, 255, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 10}s infinite linear`;
        particle.style.pointerEvents = 'none';
        header.appendChild(particle);
    }
}

// Cria partículas quando a página carrega
document.addEventListener('DOMContentLoaded', createParticles);

// Efeito de digitação no título principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplica efeito de digitação quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-text h2');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
});

// Adiciona efeito de shake nos elementos de garantia
function addShakeEffect() {
    const guaranteeItems = document.querySelectorAll('.guarantee-item');
    
    guaranteeItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                item.style.animation = '';
            }, 500);
        }, index * 200);
    });
}

// Adiciona CSS para animação de shake
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(shakeStyle);

// Executa efeito de shake a cada 10 segundos
setInterval(addShakeEffect, 10000);

// Adiciona efeito de brilho nos ícones de check
document.addEventListener('DOMContentLoaded', function() {
    const checkIcons = document.querySelectorAll('.benefits li i');
    
    checkIcons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.animation = 'glow 1s ease-in-out';
            setTimeout(() => {
                icon.style.animation = '';
            }, 1000);
        }, index * 300);
    });
});

// Adiciona CSS para animação de brilho
const glowStyle = document.createElement('style');
glowStyle.textContent = `
    @keyframes glow {
        0%, 100% { box-shadow: 0 0 5px rgba(39, 174, 96, 0.3); }
        50% { box-shadow: 0 0 20px rgba(39, 174, 96, 0.8), 0 0 30px rgba(39, 174, 96, 0.6); }
    }
`;
document.head.appendChild(glowStyle);

