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