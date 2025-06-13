const boardButton = document.querySelector(".board");
const overlayBoard = document.querySelector(".overlay-board");
const invisibleClose = document.querySelector(".invisible-close");

function openOverlay() {
  overlayBoard.classList.add("active");
}

function closeOverlay() {
  overlayBoard.classList.remove("active");
}

boardButton.addEventListener("click", openOverlay);
invisibleClose.addEventListener("click", closeOverlay);

const desk1_4 = document.querySelector(".desk1-4");

desk1_4.addEventListener("mousedown", () => {
  const screamerOverlay = document.createElement("div");
  screamerOverlay.classList.add("screamer-overlay");

  const screamerImg = document.createElement("img");
  screamerImg.src = "assets/screamer/screammer.png";
  screamerImg.alt = "Screamer";

  screamerOverlay.appendChild(screamerImg);
  document.body.appendChild(screamerOverlay);
});

document.addEventListener("mouseup", () => {
  const screamerOverlay = document.querySelector(".screamer-overlay");
  if (screamerOverlay) {
    screamerOverlay.remove();
  }
});

const heatButton = document.querySelector(".heat");
const dorianOverlay = document.querySelector(".overlay-dorian");
const invisibleCloseDorian = document.querySelector(".invisible-close-dorian");
const videoDorian = document.querySelector(".video-dorian");

function closeDorianOverlay() {
  dorianOverlay.classList.remove("active");
  if (videoDorian) {
    videoDorian.pause();
    videoDorian.currentTime = 0;
  }
}

heatButton.addEventListener("click", () => {
  dorianOverlay.classList.add("active");
  if (videoDorian) {
    videoDorian.play();
  }
});

invisibleCloseDorian.addEventListener("click", closeDorianOverlay);

dorianOverlay.addEventListener("click", (e) => {
  if (e.target === dorianOverlay) {
    closeDorianOverlay();
  }
});

const githubButton = document.querySelector(".github");
const overlayGithub = document.querySelector(".overlay-github");
const invisibleCloseGithub = document.querySelector(".invisible-close-github");
const githubOverlayImg = document.querySelector(".github-overlay-img");
const githubQrImg = document.querySelector(".github-qr-img");
const invisibleCloseQr = document.querySelector(".invisible-close-qr");

githubButton.addEventListener("click", () => {
  overlayGithub.classList.add("active");
});

invisibleCloseGithub.addEventListener("click", () => {
  overlayGithub.classList.remove("active");
  githubQrImg.classList.remove("active");
  invisibleCloseQr.classList.remove("active");
});

document.addEventListener("keydown", (event) => {
  if (overlayGithub.classList.contains("active") && event.key === "Enter") {
    githubQrImg.classList.add("active");
    invisibleCloseQr.classList.add("active");
  }
});

invisibleCloseQr.addEventListener("click", () => {
  githubQrImg.classList.remove("active");
  invisibleCloseQr.classList.remove("active");
});

const instaButton = document.querySelector(".insta");
const overlayInsta = document.querySelector(".overlay-insta");
const invisibleCloseInsta = document.querySelector(".invisible-close-insta");
const instaSoloImg = document.querySelector(".insta-solo-img");
const instaPhotoImg = document.querySelector(".insta-photo-img");
const instaSoloClickableBottom = document.querySelector(
  ".insta-solo-clickable-bottom"
);

instaButton.addEventListener("click", () => {
  overlayInsta.classList.add("active");
});

invisibleCloseInsta.addEventListener("click", () => {
  overlayInsta.classList.remove("active");
  instaPhotoImg.classList.remove("active"); // Hide photo.png when closing
});

instaSoloClickableBottom.addEventListener("click", () => {
  instaPhotoImg.classList.add("active"); // Show photo.png
});

const bsButton = document.querySelector(".image-54");
const overlayBS = document.querySelector(".overlay-BS");
const invisibleCloseBS = document.querySelector(".invisible-close-BS");

bsButton.addEventListener("click", () => {
  overlayBS.classList.add("active");
});

invisibleCloseBS.addEventListener("click", () => {
  overlayBS.classList.remove("active");
});

// Add click event to all BS images to close overlay
const bsImages = document.querySelectorAll('.overlay-BS-content img[class^="bs-"]');
bsImages.forEach(img => {
  img.addEventListener('click', () => {
    overlayBS.classList.remove('active');
  });
});

const discogButton = document.querySelector(".discog");
const overlayDiscog = document.querySelector(".overlay-discog");
const invisibleCloseDiscog = document.querySelector(".invisible-close-discog");
const discogVinilImg = document.querySelector(".discog-vinil-img");

let isDragging = false;
let startX;
let currentX = 0;
let maxX = 160; // Define el límite máximo de arrastre en píxeles

discogButton.addEventListener("click", () => {
  overlayDiscog.classList.add("active");
});

invisibleCloseDiscog.addEventListener("click", () => {
  overlayDiscog.classList.remove("active");
  discogVinilImg.style.transition = "transform 0.3s ease";
  discogVinilImg.style.transform = `translateX(0px)`; // Reset position
  currentX = 0;
});

// Inicia el arrastre
discogVinilImg.addEventListener("mousedown", (e) => {
  e.preventDefault(); // <- previene selección de texto
  isDragging = true;
  startX = e.clientX - currentX;
  discogVinilImg.style.cursor = "grabbing";
  discogVinilImg.style.transition = "none"; // quita transiciones mientras se arrastra
});

// Movimiento del mouse
document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();

  const newX = e.clientX - startX;

  // Solo permite mover hacia la derecha (valores positivos) y hasta el límite maxX
  if (newX >= 0 && newX <= maxX) {
    currentX = newX;
    discogVinilImg.style.transform = `translateX(${currentX}px)`;
  }
});

// Suelta el disco
document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    discogVinilImg.style.cursor = "grab";
    discogVinilImg.style.transition = "transform 0.2s ease"; // animación al soltar
  }
});

const myTrinityButton = document.querySelector('.my-trinity');
const overlayTrinity = document.querySelector('.overlay-trinity');
const trinityCloseBtn = document.querySelector('.trinity-close-btn');

myTrinityButton.addEventListener('click', () => {
  overlayTrinity.classList.add('active');
});

if (trinityCloseBtn) {
  trinityCloseBtn.addEventListener('click', () => {
    overlayTrinity.classList.remove('active');
  });
}

const papiBladesButton = document.querySelector('.ruben-blades-1');
const overlayPapiBlades = document.querySelector('.overlay-papi-blades');
const papiBladesCloseBtn = document.querySelector('.papi-blades-close-btn');

if (papiBladesButton && overlayPapiBlades) {
  papiBladesButton.addEventListener('click', () => {
    overlayPapiBlades.classList.add('active');
  });
  overlayPapiBlades.addEventListener('click', (e) => {
    if (e.target === overlayPapiBlades) {
      overlayPapiBlades.classList.remove('active');
    }
  });
}

if (papiBladesCloseBtn && overlayPapiBlades) {
  papiBladesCloseBtn.addEventListener('click', () => {
    overlayPapiBlades.classList.remove('active');
  });
}

const lasEternasButton = document.querySelector('.las-eternas');
const overlayLasEternas = document.querySelector('.overlay-las-eternas');
const invisibleCloseLasEternas = document.querySelector('.invisible-close-las-eternas');

lasEternasButton.addEventListener('click', () => {
  overlayLasEternas.classList.add('active');
});

invisibleCloseLasEternas.addEventListener('click', () => {
  overlayLasEternas.classList.remove('active');
});

// Las Eternas carousel setup
const lasEternasImages = [
  {
    src: 'assets/Las Eternas/Dar es Dar- Fito Paez.png',
    caption: '<b>Dar es Dar</b><br>-Fito Paez'
  },
  {
    src: 'assets/Las Eternas/Amor y Control- Ruben Blades.png',
    caption: '<b>Amor y Control</b><br>-Ruben Blades'
  },
  {
    src: 'assets/Las Eternas/Somebody that I used to Know- Gotye.png',
    caption: '<b>Somebody that I used to Know</b><br>-Gotye'
  },
  {
    src: 'assets/Las Eternas/Te Busco- Celia Cruz.png',
    caption: '<b>Te Busco</b><br>-Celia Cruz'
  },
  {
    src: 'assets/Las Eternas/Canción para Mi muerte- Sui Generis.png',
    caption: '<b>Canción para Mi muerte</b><br>-Sui Generis'
  },
  {
    src: 'assets/Las Eternas/Early Summer Late Spring- Mitski.png',
    caption: '<b>Early Summer Late Spring</b><br>-Mitski'
  },
  {
    src: 'assets/Las Eternas/Walts 2XOXO- Elliott Smith.png',
    caption: '<b>Walts#2XOXO</b><br>-Elliott Smith'
  },
  {
    src: 'assets/Las Eternas/Amor de Primavera - Conjunto Chaney.png',
    caption: '<b>Amor de Primavera</b><br>-Conjunto Chaney'
  },
  {
    src: 'assets/Las Eternas/Everywhere-Fleetwoodmac.png',
    caption: '<b>Everywhere</b><br>-Fleetwood Mac'
  },
  {
    src: 'assets/Las Eternas/Cruz de Navajas- Mecano.png',
    caption: '<b>Cruz de Navajas</b><br>-Mecano'
  }
];

const carouselImagesContainer = document.querySelector('.carousel-images');
const carouselCaption = document.querySelector('.carousel-caption');
let lasEternasIndex = 0;

function renderLasEternasCarousel() {
  carouselImagesContainer.innerHTML = '';
  // Show previous, current, and next images
  for (let i = -1; i <= 1; i++) {
    let idx = (lasEternasIndex + i + lasEternasImages.length) % lasEternasImages.length;
    const img = document.createElement('img');
    img.src = lasEternasImages[idx].src;
    img.className = 'carousel-image' + (i === 0 ? ' active' : ' side');
    carouselImagesContainer.appendChild(img);
  }
  carouselCaption.innerHTML = lasEternasImages[lasEternasIndex].caption;
}

function lasEternasNext() {
  lasEternasIndex = (lasEternasIndex + 1) % lasEternasImages.length;
  renderLasEternasCarousel();
}
function lasEternasPrev() {
  lasEternasIndex = (lasEternasIndex - 1 + lasEternasImages.length) % lasEternasImages.length;
  renderLasEternasCarousel();
}

// Keyboard navigation for Las Eternas overlay
window.addEventListener('keydown', (e) => {
  if (overlayLasEternas.classList.contains('active')) {
    if (e.key === 'ArrowRight') {
      lasEternasNext();
    } else if (e.key === 'ArrowLeft') {
      lasEternasPrev();
    }
  }
});

// Render carousel when overlay opens
lasEternasButton.addEventListener('click', () => {
  renderLasEternasCarousel();
});
