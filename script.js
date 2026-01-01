// =====================
// Mobile Navigation Toggle
// =====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// =====================
// Smooth Scrolling for Navigation Links
// =====================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// =====================
// Active Navigation Link on Scroll
// =====================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// =====================
// Navbar Background Change on Scroll
// =====================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// =====================
// Animated Counters for Stats
// =====================
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 30);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statElements = entry.target.querySelectorAll('.stat h4');
            statElements.forEach(stat => {
                const targetValue = parseInt(stat.textContent);
                animateCounter(stat, targetValue);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// =====================
// Scroll Reveal Animation
// =====================
const revealElements = document.querySelectorAll('.skill-card, .project-card, .info-item');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px'
});

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(element);
});

// =====================
// Contact Form Handling
// =====================
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simple validation
    if (name && email && subject && message) {
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send this data to a server
        console.log({
            name: name,
            email: email,
            subject: subject,
            message: message
        });
    } else {
        alert('Please fill in all fields.');
    }
});

// =====================
// Typing Effect for Hero Title
// =====================
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            if (text.substring(index, index + 6) === '<span ') {
                const spanEnd = text.indexOf('</span>', index) + 7;
                heroTitle.innerHTML += text.substring(index, spanEnd);
                index = spanEnd;
            } else {
                heroTitle.innerHTML += text.charAt(index);
                index++;
            }
            setTimeout(typeWriter, 50);
        }
    }

    // Start typing effect after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// =====================
// Parallax Effect for Hero Section
// =====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// =====================
// Dynamic Year in Footer
// =====================
const footerText = document.querySelector('.footer p');
if (footerText) {
    const currentYear = new Date().getFullYear();
    footerText.textContent = footerText.textContent.replace('2026', currentYear);
}

// =====================
// Cursor Trail Effect (Optional)
// =====================
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 500);
});

// Add cursor trail styles dynamically
const style = document.createElement('style');
style.textContent = `
    .cursor-trail {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(99, 102, 241, 0.5);
        pointer-events: none;
        animation: fadeTrail 0.5s ease-out forwards;
        z-index: 9999;
    }
    
    @keyframes fadeTrail {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(style);

// =====================
// Project Cards Tilt Effect
// =====================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// =====================
// Skills Cards Hover Effect
// =====================
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.3s ease';
    });
});

// =====================
// Page Load Animation
// =====================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// =====================
// Console Message
// =====================
console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cInterested in working together? Feel free to reach out!', 'font-size: 14px; color: #22d3ee;');
