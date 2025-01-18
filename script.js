
// for about 
// Get all the info items (e.g., Name, Email)
const infoItems = document.querySelectorAll('.info-item');

// Add event listeners to handle the hover effect
infoItems.forEach(item => {
    const infoSpan = item.querySelector('.info');
    const hintSpan = item.querySelector('.hint');

    // On mouseover (hover in)
    item.addEventListener('mouseenter', () => {
        // Show the information and change the hint
        infoSpan.style.display = 'inline';
        hintSpan.style.display = 'none'; // Hide the "hover to reveal" hint
    });

    // On mouseout (hover out)
    item.addEventListener('mouseleave', () => {
        // Hide the information again and show the hint
        infoSpan.style.display = 'none';
        hintSpan.style.display = 'inline';
    });
});


// for certification// Lightbox functionality for certificates
document.addEventListener("DOMContentLoaded", function () {
    const certificateLinks = document.querySelectorAll('.certificate-link');

    certificateLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            
            // Create the lightbox overlay
            const lightboxOverlay = document.createElement('div');
            lightboxOverlay.classList.add('lightbox-overlay');
            
            // Create the lightbox image
            const lightboxImage = document.createElement('img');
            lightboxImage.src = link.getAttribute('href');
            lightboxImage.alt = 'Certificate Image';
            
            // Append the image to the overlay
            lightboxOverlay.appendChild(lightboxImage);
            document.body.appendChild(lightboxOverlay);

            // Close the lightbox on click
            lightboxOverlay.addEventListener('click', function () {
                document.body.removeChild(lightboxOverlay);
            });
        });
    });
});


    