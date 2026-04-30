// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const navToggle = document.getElementById('navToggle');
    const navClose = document.getElementById('navClose');
    const navOverlay = document.getElementById('navOverlay');
    const mobileLinks = document.querySelectorAll('.nav-mobile a');
    const backToTop = document.getElementById('backToTop');

    // Header scroll effect
    function handleScroll() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Mobile menu toggle
    function openMenu() {
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    navToggle.addEventListener('click', openMenu);
    navClose.addEventListener('click', closeMenu);

    // Close menu when clicking a link
    mobileLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });

    // Back to top
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
