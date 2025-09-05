document.addEventListener('DOMContentLoaded', function() {

    // --- 1. INISIALISASI LIBRARY ---
    AOS.init({
        duration: 1000,
        once: true,
        offset: 120,
        easing: 'ease-in-out',
    });


    // --- 2. LOGIKA INTERAKSI HALAMAN ---

    // Efek shadow pada Navbar saat di-scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Fungsi untuk menu Hamburger di tampilan mobile
    const hamburger = document.querySelector('.hamburger-menu');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });

        document.querySelectorAll('.navbar nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                if (navbar.classList.contains('active')) {
                    navbar.classList.remove('active');
                }
            });
        });
    }

    // Animasi mengetik (Typing Animation) di hero section
    const typingElement = document.querySelector('.typing-animation');
    if (typingElement) {
        const roles = ["Web Developer", "Software Engineer", "Problem Solver"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentRole = roles[roleIndex];
            let displayText = isDeleting ?
                currentRole.substring(0, charIndex - 1) :
                currentRole.substring(0, charIndex + 1);

            typingElement.textContent = displayText;
            isDeleting ? charIndex-- : charIndex++;

            let typeSpeed = isDeleting ? 80 : 150;

            if (!isDeleting && charIndex === currentRole.length) {
                typeSpeed = 2500;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 700;
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }
    
    // Sistem filter untuk galeri proyek
    const filterButtons = document.querySelectorAll('.project-filters .filter-btn');
    const projectCards = document.querySelectorAll('.projects-grid .project-card');
    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const filter = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    card.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
                    card.style.transform = 'scale(0.8)';
                    card.style.opacity = '0';
                    card.style.pointerEvents = 'none';

                    setTimeout(() => {
                        if (filter === 'all' || card.classList.contains(filter)) {
                            card.style.display = 'flex';
                            setTimeout(() => {
                                card.style.transform = 'scale(1)';
                                card.style.opacity = '1';
                                card.style.pointerEvents = 'auto';
                            }, 50);
                        } else {
                            card.style.display = 'none';
                        }
                    }, 400);
                });
            });
        });
    }


    // --- 3. INISIALISASI LIBRARY VISUAL (Lottie & Particles.js) ---

    // Inisialisasi Lottie Animation
    if (typeof lottie !== 'undefined') {
        lottie.loadAnimation({
            container: document.getElementById('programmer-lottie'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets2.lottiefiles.com/packages/lf20_qpwbijrx.json' // GANTI DENGAN PATH FILE JSON ANDA
        });
    } else {
        console.error('Lottie player (lottie-web) tidak ditemukan.');
    }

    // Inisialisasi Particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 }},
                "color": { "value": "#00ffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#00ffff", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 3, "direction": "none", "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "window",
                "events": { 
                    "onhover": { "enable": true, "mode": "grab" }, 
                    "onclick": { "enable": true, "mode": "push" }, // Klik dinonaktifkan
                    "resize": true 
                },
                "modes": {
                    "grab": { "distance": 180, "line_linked": { "opacity": 0.8 } },
                    "bubble": { "distance": 200, "size": 8, "duration": 2, "opacity": 8, "speed": 3 },
                    "repulse": { "distance": 100, "duration": 0.4 },
                    "push": { "particles_nb": 4 },
                    "remove": { "particles_nb": 2 }
                }
            },
            "retina_detect": true
        });
    } else {
        console.error('Particles.js tidak ditemukan.');
    }
});