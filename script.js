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
const formMessage = document.getElementById('formMessage');

// Character counter for message
const messageTextarea = document.getElementById('message');
const charCount = document.querySelector('.char-count');

if (messageTextarea && charCount) {
    messageTextarea.addEventListener('input', () => {
        const count = messageTextarea.value.length;
        charCount.textContent = `${count} / 1000`;
        charCount.style.color = count > 950 ? '#ef4444' : count > 900 ? '#f59e0b' : '#94a3b8';
    });
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Show error message
function showError(input, message) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    input.classList.add('invalid');
}

// Clear error message
function clearError(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    input.classList.remove('invalid');
}

// Show form message
function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Validate name
function validateName(name) {
    if (!name || name.length < 2) {
        return 'Name must be at least 2 characters long';
    }
    if (name.length > 50) {
        return 'Name must not exceed 50 characters';
    }
    if (!/^[a-zA-Z\s'-]+$/.test(name)) {
        return 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }
    return null;
}

// Validate email
function validateEmail(email) {
    if (!email) {
        return 'Email is required';
    }
    if (email.length > 100) {
        return 'Email must not exceed 100 characters';
    }
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email address';
    }
    return null;
}

// Validate subject
function validateSubject(subject) {
    if (!subject || subject.length < 5) {
        return 'Subject must be at least 5 characters long';
    }
    if (subject.length > 100) {
        return 'Subject must not exceed 100 characters';
    }
    return null;
}

// Validate message
function validateMessage(message) {
    if (!message || message.length < 10) {
        return 'Message must be at least 10 characters long';
    }
    if (message.length > 1000) {
        return 'Message must not exceed 1000 characters';
    }
    return null;
}

// Real-time validation on blur
contactForm.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('blur', () => {
        const value = input.value.trim();
        let error = null;
        
        switch(input.id) {
            case 'name':
                error = validateName(value);
                break;
            case 'email':
                error = validateEmail(value);
                break;
            case 'subject':
                error = validateSubject(value);
                break;
            case 'message':
                error = validateMessage(value);
                break;
        }
        
        if (error) {
            showError(input, error);
        } else {
            clearError(input);
        }
    });
    
    // Clear error on input
    input.addEventListener('input', () => {
        if (input.classList.contains('invalid')) {
            clearError(input);
        }
    });
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();
    
    // Clear all previous errors
    contactForm.querySelectorAll('input, textarea').forEach(input => clearError(input));
    
    // Validate all fields
    let isValid = true;
    const errors = {};
    
    errors.name = validateName(name);
    errors.email = validateEmail(email);
    errors.subject = validateSubject(subject);
    errors.message = validateMessage(message);
    
    // Show errors
    if (errors.name) {
        showError(nameInput, errors.name);
        isValid = false;
    }
    if (errors.email) {
        showError(emailInput, errors.email);
        isValid = false;
    }
    if (errors.subject) {
        showError(subjectInput, errors.subject);
        isValid = false;
    }
    if (errors.message) {
        showError(messageInput, errors.message);
        isValid = false;
    }
    
    // If validation fails, scroll to first error
    if (!isValid) {
        const firstError = contactForm.querySelector('.invalid');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstError.focus();
        }
        showFormMessage('Please fix the errors above before sending.', 'error');
        return;
    }
    
    // Compose email body from client's perspective
    const emailBody = `Hi Arpan,

${message}

---

Best regards,
${name}

Contact me at: ${email}`;
    
    // Create mailto link with pre-filled data
    const mailtoLink = `mailto:arpan.g2102@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Show success message
    showFormMessage('Opening your email client...', 'success');
    
    // Open email client with pre-filled form
    window.location.href = mailtoLink;
    
    // Reset form after a delay
    setTimeout(() => {
        contactForm.reset();
        charCount.textContent = '0 / 1000';
        charCount.style.color = '#94a3b8';
        showFormMessage('Form reset! Email client should be open.', 'success');
    }, 1000);
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

// =====================
// Sticky CTA Button
// =====================
const stickyCta = document.getElementById('stickyCta');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        stickyCta.classList.add('visible');
    } else {
        stickyCta.classList.remove('visible');
    }
});
