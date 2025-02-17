const interests = [
    { text: "Game Development", image: "imgs/game dev icon1.png" },
    { text: "Web Development", image: "imgs/web dev icon.png" },
    { text: "Graphic Design", image: "imgs/gd icon.png" },
    { text: "App Development", image: "imgs/app dev icon.png" },
    { text: "Photography", image: "imgs/camera icon.png" },
    { text: "3D Animation/Modeling", image: "imgs/3d-modeling2.png" }
];


let index = 0;
const dynamicText = document.getElementById("dynamic-text");
const heroBackground = document.querySelector(".hero-background"); 

function updateContent() {



    setTimeout(() => {

        dynamicText.textContent = interests[index].text;
        heroBackground.style.backgroundImage = `url('${interests[index].image}')`;

        index = (index + 1) % interests.length;

        dynamicText.classList.remove("fade-out");
        dynamicText.classList.add("fade-in");
        heroBackground.classList.remove("fade-out");
        heroBackground.classList.add("fade-in");
    }, 500); 
}

setInterval(updateContent, 5000);

updateContent();

//Line animation
function updateLinePosition() {
    const lineContainer = document.querySelector('.center-line-container');
    const button = document.querySelector('.about-button');

    const buttonOffset = button.getBoundingClientRect();
    const buttonBottom = buttonOffset.top + window.scrollY + buttonOffset.height;

    lineContainer.style.top = `${buttonBottom}px`;
}

function extendLine() {
    const line = document.querySelector('#center-line line');
    const aboutSection = document.querySelector('.about');


    line.style.opacity = '1';

    updateLinePosition();
    const targetLength = aboutSection.offsetTop - parseFloat(document.querySelector('.center-line-container').style.top) + 50;


    function syncLineWithScroll() {
        const scrollPosition = window.scrollY;
        const buttonPosition = parseFloat(document.querySelector('.center-line-container').style.top);
        const aboutPosition = aboutSection.offsetTop;
        const scrollProgress = Math.min((scrollPosition - buttonPosition) / (aboutPosition - buttonPosition), 1);
        
        const currentLength = targetLength * scrollProgress;
        line.setAttribute('y2', currentLength);

        if (scrollProgress > 0) {
            line.style.opacity = '1';
        }
    }


    window.addEventListener('scroll', syncLineWithScroll);


    setTimeout(() => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}


window.addEventListener('load', updateLinePosition);
window.addEventListener('resize', updateLinePosition);

//Hamburger menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburgerMenu.classList.toggle('active');
});


// Lightbox
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeLightbox = document.querySelector('.close');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentImageIndex = 0;

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentImageIndex = index;
        showImageInLightbox(image.src);
    });
});

function showImageInLightbox(src) {
    lightbox.classList.add('show');
    lightboxImage.src = src;
}

closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
});

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    showImageInLightbox(galleryImages[currentImageIndex].src);
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showImageInLightbox(galleryImages[currentImageIndex].src);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightbox.classList.remove('show');
    }
});

