document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Toggle icon
        const icon = mobileToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Sticky Header Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
        } else {
            navbar.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
        }
    });

    // Smooth Scroll for Anchor Links (Polishing native behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Simple Form Submission Handler (Visual only)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Sending...';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                btn.innerText = 'Message Sent!';
                btn.classList.add('btn-primary'); // Ensure style stays
                contactForm.reset();

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // --- SCROLL REVEAL ANIMATION ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- NUMBER COUNTER ANIMATION ---
    const statsSection = document.querySelector('.stats');
    const statNumbers = document.querySelectorAll('.stat-card h3');
    let startedStats = false;

    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !startedStats) {
            startedStats = true;
            statNumbers.forEach(num => {
                const targetText = num.innerText;
                const targetValue = parseInt(targetText.replace(/\D/g, '')); // Remove non-digits like + or %
                const suffix = targetText.replace(/[0-9]/g, ''); // Keep suffix

                let startValue = 0;
                let duration = 2000;
                let startTime = null;

                function step(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    const percentage = Math.min(progress / duration, 1);

                    // Ease out quart
                    const ease = 1 - Math.pow(1 - percentage, 4);

                    const currentValue = Math.floor(ease * targetValue);
                    num.innerText = currentValue + suffix;

                    if (progress < duration) {
                        window.requestAnimationFrame(step);
                    } else {
                        num.innerText = targetText; // Ensure exact final value
                    }
                }

                window.requestAnimationFrame(step);
            });
        }
    });

    if (statsSection) {
        statsObserver.observe(statsSection);
    }

});
