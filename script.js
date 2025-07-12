// =======================Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// =======================Scroll to Top Button Show/Hide
 const scrollTopBtn = document.querySelector('.scroll-top'); // =====================after changed

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

// =========================Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

        //=========================scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // =============================Animate skill bars on scroll
        const skillBars = document.querySelectorAll('.skill-progress');
        
        function animateSkillBars() {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }

        // ==================Intersection Observer for skill bars animation
        const skillsSection = document.querySelector('#education-skills');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(skillsSection);

        // =======================================Form submission (demo only)
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! This is a demo form.');
            contactForm.reset();
        });







// ScrollReveal base options
const scrollRevealOption = {
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  origin: "bottom",
  reset: false,
};

// Header and navbar
ScrollReveal().reveal(".header-container", {
  ...scrollRevealOption,
  origin: "top",
});

// Hero section
ScrollReveal().reveal(".hero-content", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".hero-content h1 span", {
  ...scrollRevealOption,
  origin: "left",
  delay: 300,
});
ScrollReveal().reveal(".hero-content p ", {
  ...scrollRevealOption,
  origin: "rigth",
  delay: 100,
});
ScrollReveal().reveal(".hero-img", {
  ...scrollRevealOption,
  origin: "right",
  delay: 300,
});

// About section
ScrollReveal().reveal(".about-img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about-text", {
  ...scrollRevealOption,
  origin: "right",
  delay: 200,
});

// Education section
ScrollReveal().reveal(".education-container", {
  ...scrollRevealOption,
   origin: "bottom",
  interval: 2000,
  delay: 400,
});
ScrollReveal().reveal(".education-content", {
  ...scrollRevealOption,
   origin: "bottom",
  interval: 600,
  delay: 400,
});

ScrollReveal().reveal(".about-text", {
  ...scrollRevealOption,
  origin: "right",
  delay: 200,
});
ScrollReveal().reveal("#about h2", {
  ...scrollRevealOption,
  origin: "left",
  delay: 400,
});

// Skills section
ScrollReveal().reveal(".skill", {
  ...scrollRevealOption,
  interval: 150,
});

// Activities section
ScrollReveal().reveal(".activity", {
  ...scrollRevealOption,
  interval: 200,
});
ScrollReveal().reveal(".activity h4", {
  ...scrollRevealOption,
  interval: 200,
});
ScrollReveal().reveal(".activity ul", {
  ...scrollRevealOption,
  interval: 200,
});
//gallery section
ScrollReveal().reveal(".gallery", {
  ...scrollRevealOption,
  interval: 400,
});

// Achievements section
ScrollReveal().reveal(".achievements__header", {
  ...scrollRevealOption,
  interval: 200,
});

ScrollReveal().reveal(".achievements__description", {
  ...scrollRevealOption,
  interval: 200,
});
ScrollReveal().reveal(".steps__box h4", {
  ...scrollRevealOption,
  interval: 200,
});

// Projects section
ScrollReveal().reveal(".project", {
  ...scrollRevealOption,
  interval: 250,
});
ScrollReveal().reveal(".project-content", {
  ...scrollRevealOption,
  interval: 250,
});
ScrollReveal().reveal(".project-content h3", {
  ...scrollRevealOption,
  interval: 250,
});
ScrollReveal().reveal(".project-content p", {
  ...scrollRevealOption,
  interval: 250,
});
ScrollReveal().reveal(".project-tech", {
  ...scrollRevealOption,
  interval: 250,
});


// Contact section
ScrollReveal().reveal(".contact-item", {
  ...scrollRevealOption,
  origin: "left",
  interval: 150,
});
ScrollReveal().reveal(".form-group label", {
  ...scrollRevealOption,
  origin: "left",
  interval: 150,
});
ScrollReveal().reveal(".contact-form", {
  ...scrollRevealOption,
  origin: "right",
  delay: 200,
});

// Footer section
ScrollReveal().reveal(".containerF", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 300,
});


