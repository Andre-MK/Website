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

/*function scrollToAbout() {
    const aboutSection = document.querySelector('.about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
}*/

/*
function extendLine() {
    const aboutSection = document.querySelector('.about');
    const line = document.querySelector('#center-line line');

    line.setAttribute('y2', '0');

    setTimeout(() => {
        aboutSection.scrollIntoView({behavior: 'smooth'});
        line.setAttribute('y2', '400');
    }), 2000;
}*/
/*
function extendLine() {
    const lineContainer = document.querySelector('.center-line-container');
    const line = document.querySelector('#center-line line');
    const aboutSection = document.querySelector('.about');
    const button = document.querySelector('.about-button');

    const buttonOffset = button.getBoundingClientRect();
    const buttonBottom = buttonOffset.top + window.scrollY + buttonOffset.height;
    lineContainer.style.top = `${buttonBottom + 10}px`;

    // Calculate the distance from the button to the "About me" section
    const lineLength = aboutSection.offsetTop - buttonBottom;


    let currentLength = 0;
    const targetLength = lineLength;

   function animateLine(){
    if (currentLength < targetLength) {
        currentLength += 5;
        line.setAttribute('y2', currentLength);
        requestAnimationFrame(animateLine);
    }
   }

   animateLine();

    setTimeout(() => {
        aboutSection.scrollIntoView({behavior: 'smooth'});
    }, 0); 
}*/
/*
function extendLine() {
    const line = document.querySelector('#center-line line');
    const aboutSection = document.querySelector('.about');
    const button = document.querySelector('.about-button');

    // Calculate the distance from the button to the "About me" section
    const buttonOffset = button.getBoundingClientRect();
    const buttonBottom = buttonOffset.top + window.scrollY + buttonOffset.height;
    const lineLength = aboutSection.offsetTop - buttonBottom + 50; // Extend a bit longer

    // Set the line container's position relative to the button
    const lineContainer = document.querySelector('.center-line-container');
    lineContainer.style.top = `${button.offsetTop + button.offsetHeight + 10}px`;

    // Animate the line extension
    let currentLength = 0;
    const targetLength = lineLength;

    function animateLine() {
        if (currentLength < targetLength) {
            currentLength += 5;
            line.setAttribute('y2', currentLength);
            requestAnimationFrame(animateLine);
        }
    }

    animateLine();

    // Scroll to the "About me" section after the line fully extends
    setTimeout(() => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }, 0);
}

*/
/*
function extendLine() {
    const line = document.querySelector('#center-line line');
    const aboutSection = document.querySelector('.about');
    const button = document.querySelector('.about-button');

    // Calculate the button position
    const buttonOffset = button.getBoundingClientRect();
    const buttonBottom = buttonOffset.top + window.scrollY + buttonOffset.height;

    // Position the line container just below the button
    const lineContainer = document.querySelector('.center-line-container');
    lineContainer.style.top = `${buttonBottom}px`;

    // Calculate the distance to the "About me" section
    const lineLength = aboutSection.offsetTop - buttonBottom + 50; // Extend slightly longer

    // Animate the line extension
    let currentLength = 0;
    const targetLength = lineLength;

    function animateLine() {
        if (currentLength < targetLength) {
            currentLength += 5;
            line.setAttribute('y2', currentLength);
            requestAnimationFrame(animateLine);
        }
    }

    animateLine();

    // Scroll to the "About me" section after the line fully extends
    setTimeout(() => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }, 0);
}
*/
/*
function updateLinePosition() {
    const lineContainer = document.querySelector('.center-line-container');
    const button = document.querySelector('.about-button');

    // Calculate the button's position
    const buttonOffset = button.getBoundingClientRect();
    const buttonBottom = buttonOffset.top + window.scrollY + buttonOffset.height;

    // Update the line container's position
    lineContainer.style.top = `${buttonBottom}px`;
}

function extendLine() {
    const line = document.querySelector('#center-line line');
    const aboutSection = document.querySelector('.about');

    // Calculate the distance to the "About me" section
    const lineLength = aboutSection.offsetTop - parseFloat(document.querySelector('.center-line-container').style.top) + 50;

    // Animate the line extension
    let currentLength = 0;
    const targetLength = lineLength;

    function animateLine() {
        if (currentLength < targetLength) {
            currentLength += 5;
            line.setAttribute('y2', currentLength);
            requestAnimationFrame(animateLine);
        }
    }

    animateLine();

    // Scroll to the "About me" section after the line fully extends
    setTimeout(() => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
}

// Update the line's position on load, scroll, and resize
window.addEventListener('load', updateLinePosition);
window.addEventListener('resize', updateLinePosition);
window.addEventListener('scroll', updateLinePosition);

*/
/*
function updateLinePosition() {
    const lineContainer = document.querySelector('.center-line-container');
    const button = document.querySelector('.about-button');
    const line = document.querySelector('#center-line line');
    const aboutSection = document.querySelector('.about');

    // Calculate the button's position
    const buttonOffset = button.getBoundingClientRect();
    const buttonBottom = buttonOffset.top + window.scrollY + buttonOffset.height;

    // Update the line container's position
    lineContainer.style.top = `${buttonBottom}px`;

    // Calculate the distance to the "About me" section
    const lineLength = aboutSection.offsetTop - buttonBottom + 50;

    // Update the line's length
    line.setAttribute('y2', lineLength);
}

function extendLine() {
    const line = document.querySelector('#center-line line');
    const aboutSection = document.querySelector('.about');

    let currentLength = 0;
    const targetLength = parseFloat(line.getAttribute('y2'));

    function animateLine() {
        if (currentLength < targetLength) {
            currentLength += 5;
            line.setAttribute('y2', currentLength);
            requestAnimationFrame(animateLine);
        }
    }

    animateLine();

    setTimeout(() => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }, 0);
}

window.addEventListener('load', updateLinePosition);
window.addEventListener('resize', updateLinePosition);
window.addEventListener('scroll', updateLinePosition);
*/
/*
function updateLinePosition() {
    const lineContainer = document.querySelector('.center-line-container');
    const button = document.querySelector('.about-button');
    const line = document.querySelector('#center-line line');
    const aboutSection = document.querySelector('.about');

    // Calculate the button's position
    const buttonOffset = button.getBoundingClientRect();
    const buttonBottom = buttonOffset.top + window.scrollY + buttonOffset.height;

    // Update the line container's position
    lineContainer.style.top = `${buttonBottom}px`;

    // Calculate the distance to the "About me" section
    const lineLength = aboutSection.offsetTop - buttonBottom + 50;

    // Update the line's length but keep it hidden
    line.setAttribute('y2', '0'); // Ensure it's collapsed initially
}

function extendLine() {
    const line = document.querySelector('#center-line line');
    const aboutSection = document.querySelector('.about');

    // Make the line visible
    line.style.opacity = '1';

    // Recalculate the line length
    updateLinePosition();
    const targetLength = aboutSection.offsetTop - parseFloat(document.querySelector('.center-line-container').style.top) + 50;

    // Start the line extension animation
    let currentLength = 0;

    function animateLine() {
        if (currentLength < targetLength) {
            currentLength += 5;
            line.setAttribute('y2', currentLength);
            requestAnimationFrame(animateLine);
        } else {
            // Keep the line visible by ensuring its final state
            line.setAttribute('y2', targetLength);
            line.style.opacity = '1'; // Ensure it stays fully visible
        }
    }

    animateLine();

    // Scroll to the "About me" section after the line fully extends
    setTimeout(() => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
}

// Update the line's position and length on load, scroll, and resize
window.addEventListener('load', updateLinePosition);
window.addEventListener('resize', updateLinePosition);
window.addEventListener('scroll', updateLinePosition);
*/
/*
function updateLinePosition() {
    const lineContainer = document.querySelector('.center-line-container');
    const button = document.querySelector('.about-button');

    // Calculate the button's position
    const buttonOffset = button.getBoundingClientRect();
    const buttonBottom = buttonOffset.top + window.scrollY + buttonOffset.height;

    // Update the line container's position
    lineContainer.style.top = `${buttonBottom}px`;
}

function extendLine() {
    const line = document.querySelector('#center-line line');
    const aboutSection = document.querySelector('.about');

    // Make the line visible
    line.style.opacity = '1';

    // Recalculate the line length
    updateLinePosition();
    const targetLength = aboutSection.offsetTop - parseFloat(document.querySelector('.center-line-container').style.top) + 50;

    // Start the line extension animation
    let currentLength = 0;

    function animateLine() {
        if (currentLength < targetLength) {
            currentLength += 5;
            line.setAttribute('y2', currentLength);
            requestAnimationFrame(animateLine);
        } else {
            // Finalize the line length and keep it visible
            line.setAttribute('y2', targetLength);
            line.style.opacity = '1'; // Ensure it stays fully visible
        }
    }

    animateLine();

    // Scroll to the "About me" section after the line fully extends
    setTimeout(() => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
}

// Update the line's position on load and resize, but NOT on scroll
window.addEventListener('load', updateLinePosition);
window.addEventListener('resize', updateLinePosition);
*/
/*
function updateLinePosition() {
    const lineContainer = document.querySelector('.center-line-container');
    const button = document.querySelector('.about-button');

    // Calculate the button's position
    const buttonOffset = button.getBoundingClientRect();
    const buttonBottom = buttonOffset.top + window.scrollY + buttonOffset.height;

    // Update the line container's position
    lineContainer.style.top = `${buttonBottom}px`;
}

function extendLine() {
    const line = document.querySelector('#center-line line');
    const aboutSection = document.querySelector('.about');

    // Make the line visible
    line.style.opacity = '1';

    // Recalculate the line length
    updateLinePosition();
    const targetLength = aboutSection.offsetTop - parseFloat(document.querySelector('.center-line-container').style.top) + 50;

    // Use requestAnimationFrame for smooth animation with easing
    let currentLength = 0;
    let startTime;

    function animateLine(timestamp) {
        if (!startTime) startTime = timestamp;

        // Calculate the elapsed time
        const elapsed = timestamp - startTime;

        // Calculate progress with easing (ease-out cubic function)
        const progress = elapsed / 2000; // Adjust the duration (2 seconds)
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease-out effect

        // Update the line length
        currentLength = targetLength * easedProgress;
        line.setAttribute('y2', currentLength);

        // Continue the animation if not finished
        if (progress < 1) {
            requestAnimationFrame(animateLine);
        }
    }

    // Start the animation
    requestAnimationFrame(animateLine);

    // Scroll to the "About me" section
    setTimeout(() => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }, 400);
}

// Update the line's position on load and resize
window.addEventListener('load', updateLinePosition);
window.addEventListener('resize', updateLinePosition);
*/

function updateLinePosition() {
    const lineContainer = document.querySelector('.center-line-container');
    const button = document.querySelector('.about-button');

    // Calculate the button's position
    const buttonOffset = button.getBoundingClientRect();
    const buttonBottom = buttonOffset.top + window.scrollY + buttonOffset.height;

    // Update the line container's position
    lineContainer.style.top = `${buttonBottom}px`;
}

function extendLine() {
    const line = document.querySelector('#center-line line');
    const aboutSection = document.querySelector('.about');

    // Make the line visible
    line.style.opacity = '1';

    // Recalculate the line length
    updateLinePosition();
    const targetLength = aboutSection.offsetTop - parseFloat(document.querySelector('.center-line-container').style.top) + 50;

    // Use scroll event to synchronize the line extension
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

    // Add scroll event listener to sync the line with scrolling
    window.addEventListener('scroll', syncLineWithScroll);

    // Scroll to the "About me" section after the line extends
    setTimeout(() => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Update the line's position on load and resize
window.addEventListener('load', updateLinePosition);
window.addEventListener('resize', updateLinePosition);


const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburgerMenu.classList.toggle('active');
});