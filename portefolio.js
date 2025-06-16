// Gestion de la lampe de lave (bulles)
const lavaLamp = document.getElementById('lava-lamp');
if (lavaLamp) {
  // Couleurs de dégradé pour les bulles
  const gradients = [
    'linear-gradient(to right,rgb(244, 248, 0),rgb(255, 168, 7),rgb(232, 156, 4))',
    'linear-gradient(to right,rgb(255, 164, 26),rgb(252, 105, 0),rgb(255, 0, 0))',
    'linear-gradient(to right, #facc15, #f97316, #ef4444)',
  ];

  function createBubble() {
    const bubble = document.createElement('div');
    const size = Math.random() * 80 + 40;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.position = 'absolute';
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.bottom = '-100px';
    bubble.style.borderRadius = '50%';
    bubble.style.background = gradients[Math.floor(Math.random() * gradients.length)];
    bubble.style.opacity = 0.5 + Math.random() * 0.5;
    bubble.style.filter = 'blur(2px)';
    bubble.style.transition = 'transform 8s linear, opacity 8s linear';
    lavaLamp.appendChild(bubble);

    setTimeout(() => {
      bubble.style.transform = `translateY(-110vh) scale(${0.7 + Math.random() * 0.6})`;
      bubble.style.opacity = 0;
    }, 10);

    setTimeout(() => {
      bubble.remove();
    }, 8000);
  }

  setInterval(createBubble, 500);
}

// Gestion du bouton "back to top"
const btn = document.getElementById('backToTop');
if (btn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100');
    }
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Gestion du menu mobile responsive
document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('opacity-0');
      mobileMenu.classList.toggle('pointer-events-none');
      mobileMenu.classList.toggle('opacity-100');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        mobileMenu.classList.remove('opacity-100');
      });
    });
  }
});

// Gestion de l'animation fade-in (.pre-hidden)
document.querySelectorAll('.pre-hidden').forEach(el => {
  const delay = parseFloat(el.style.animationDelay) || 0;
  setTimeout(() => {
    el.classList.remove('pre-hidden');
  }, (delay + 1) * 1000); // 1s = durée de l'animation
});

// Initialisation de Swiper si besoin
document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper !== "undefined" && document.querySelector('.mySwiper')) {
    new Swiper(".mySwiper", {
      // ... tes options Swiper ici ...
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
    });
  }
});

// Initialisation de EmailJS pour le formulaire de contact
document.addEventListener("DOMContentLoaded", function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init("2Hti114YnD_IYsuUY"); // Remplace par ta clé publique
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (form && status) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        status.textContent = "Envoi en cours...";
        emailjs.sendForm('service_236uqhe', 'modèle_hoji2mr', form)
          .then(() => {
            status.textContent = "Message envoyé !";
            form.reset();
          })
          .catch(() => {
            status.textContent = "Erreur lors de l'envoi.";
          });
      });
    }
  }
});