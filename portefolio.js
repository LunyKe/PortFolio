const lavaLamp = document.getElementById('lava-lamp');

// Couleurs de dégradé pour les bulles
const gradients = [
  'linear-gradient(to right,rgb(244, 248, 0),rgb(255, 168, 7),rgb(232, 156, 4))',
  'linear-gradient(to right,rgb(255, 164, 26),rgb(252, 105, 0),rgb(255, 0, 0))',
  'linear-gradient(to right, #facc15, #f97316, #ef4444)',
];

// Fonction pour créer une bulle
function createBubble() {
  const bubble = document.createElement('div');
  const size = Math.random() * 100 + 50; // Taille aléatoire entre 50 et 150px
  const position = Math.random() * window.innerWidth; // Position horizontale
  const duration = Math.random() * 5 + 3; // Durée d'animation entre 3 et 8 secondes
  const delay = Math.random() * 3; // Délai aléatoire jusqu'à 3 secondes
  const gradient = gradients[Math.floor(Math.random() * gradients.length)]; // Couleur aléatoire

  // Appliquer les styles
  bubble.classList.add('bubble');
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${position}px`;
  bubble.style.animationDuration = `${duration}s`;
  bubble.style.animationDelay = `${delay}s`;
  bubble.style.background = gradient;
  bubble.style.opacity = `${Math.random() * 0.2 + 0.4}`; // Opacité aléatoire
  bubble.style.borderRadius = '50%';
  bubble.style.position = 'absolute';
  bubble.style.bottom = `-${size}px`;
  bubble.style.filter = 'blur(2px)';

  lavaLamp.appendChild(bubble);

  // Supprime la bulle après son animation pour éviter une surcharge
  setTimeout(() => {
    bubble.remove();
  }, (duration + delay) * 1000);
}

// Ajouter une boucle continue pour générer des bulles
setInterval(createBubble, 500); // Une nouvelle bulle toutes les 500ms

// Ajouter l'animation des bulles
const style = document.createElement('style');
style.innerHTML = `
  .bubble {
    animation: floatUp ease-in-out infinite;
  }

  @keyframes floatUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-150vh);
    }
  }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    loop: true, // Permet un défilement infini
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000, // Change de slide toutes les 3 secondes
      disableOnInteraction: false,
    },
    effect: "slide", // Effet fluide de glissement
    speed: 500, // Durée de transition
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.pre-hidden').forEach(el => {
    // Quand l’animation commence, on retire la classe qui cache l’élément
    el.addEventListener('animationstart', () => {
      el.classList.remove('pre-hidden');
    }, { once: true });
  });
});

// Affiche le bouton après un certain scroll
const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btn.classList.remove('opacity-0', 'pointer-events-none');
    btn.classList.add('opacity-100');
  } else {
    btn.classList.add('opacity-0', 'pointer-events-none');
    btn.classList.remove('opacity-100');
  }
});
// Scroll vers le haut au clic
btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  if (burgerBtn && mobileMenu && closeMenu) {
    burgerBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100');
    });
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.add('opacity-0', 'pointer-events-none');
      mobileMenu.classList.remove('opacity-100');
    });
  }
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
    mobileMenu.classList.remove('opacity-100');
  });
});

document.querySelectorAll('.pre-hidden').forEach(el => {
    const delay = parseFloat(el.style.animationDelay) || 0;
    setTimeout(() => {
      el.classList.remove('pre-hidden');
    }, (delay + 1) * 1000); // 1s = durée de l'animation
  });

// Initialisation de EmailJS pour le formulaire de contact
document.addEventListener("DOMContentLoaded", function () {
  // Initialisation EmailJS (remplace par ta clé publique)
  emailjs.init("2Hti114YnD_IYsuUY");

  // Gestion du formulaire de contact
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
});