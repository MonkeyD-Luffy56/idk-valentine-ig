const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainContent = document.getElementById('main-content');
const successContent = document.getElementById('success-content');

// Function to move the 'No' button randomly
function moveNoButton() {
    // Get viewport dimensions
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Add event listeners for hover (desktop) and touch (mobile)
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent clicking on touch devices
    moveNoButton();
});

// Click handler for Yes button
yesBtn.addEventListener('click', () => {
    // 1. Fade out the main content
    mainContent.style.opacity = '0';
    
    // 2. Wait for the fade out to finish (0.5s matches CSS transition)
    setTimeout(() => {
        mainContent.classList.add('hidden');
        successContent.classList.remove('hidden');
        
        // 3. Force reflow so the browser realizes it needs to transition opacity
        void successContent.offsetWidth;
        
        // 4. Fade in the success content
        successContent.style.opacity = '1';
    }, 500);
});