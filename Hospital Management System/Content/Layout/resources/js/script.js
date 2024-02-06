document.addEventListener('DOMContentLoaded', () => {

    // Sticky Navigation using Intersection Observer
    const nav = document.querySelector('nav');
    const sectionFeatures = document.querySelector('.js-section-features');
    const observerOptions = {
        rootMargin: '-60px 0px 0px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                nav.classList.add('sticky');
            } else {
                nav.classList.remove('sticky');
            }
        });
    }, observerOptions);

    observer.observe(sectionFeatures);

    // Smooth Scroll for buttons
    const scrollToElement = (selector, duration = 1000) => {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    document.querySelector('.js-scroll-to-plan').addEventListener('click', () => scrollToElement('.js-section-plans', 1500));
    document.querySelector('.js-scroll-to-start').addEventListener('click', () => scrollToElement('.js-section-features', 1200));

    // Navigation scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToElement(targetId);
        });
    });

    // Animation on scroll with Intersection Observer
    const animateOnScroll = (targets, animationClass) => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        targets.forEach(target => {
            observer.observe(target);
        });
    };

    animateOnScroll(document.querySelectorAll('.js-wp-1'), 'animated fadeIn');
    animateOnScroll(document.querySelectorAll('.js-wp-2'), 'animated fadeInUp');
    animateOnScroll(document.querySelectorAll('.js-wp-3'), 'animated fadeIn');
    animateOnScroll(document.querySelectorAll('.js-wp-4'), 'animated pulse');

    // Mobile navigation
    document.querySelector('.js-mobile-nav-icon').addEventListener('click', () => {
        const nav = document.querySelector('.js-main-nav');
        const icon = document.querySelector('.js-mobile-nav-icon i');

        nav.classList.toggle('nav-open');
        icon.classList.toggle('ion-ios-menu');
        icon.classList.toggle('ion-ios-close');
    });

});
