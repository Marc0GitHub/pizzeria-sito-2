



document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const headerLinks = document.querySelectorAll('header ul li');
    const threshold = 16; // 1rem is approximately 16px

    window.addEventListener('scroll', function() {
        if (window.scrollY > threshold) {
            header.classList.add('scrolled');
            headerLinks.forEach(link => link.classList.add('scrolled-text'));
        } else {
            header.classList.remove('scrolled');
            headerLinks.forEach(link => link.classList.remove('scrolled-text'));
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const dropdownContent = document.getElementById('dropdownContent');
    const dropdownItems = document.querySelectorAll('.dropdown-content a');
    const menuSections = document.querySelectorAll('.menu-section');

    // Toggle dropdown menu
    menuButton.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownContent.classList.toggle('show');
    });

    // Hide dropdown when clicking outside
    window.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            dropdownContent.classList.remove('show');
        }
    });

    // Change content when a menu item is clicked and update button text
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const contentId = event.target.getAttribute('data-content');
            const itemName = event.target.textContent;

            // Hide dropdown menu
            dropdownContent.classList.remove('show');

            // Show the selected menu section
            menuSections.forEach(section => {
                if (section.id === contentId) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });

            // Update the button text
            menuButton.innerHTML = `${itemName} <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  viewBox="0 0 256 256"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path d="M 90 24.25 c 0 -0.896 -0.342 -1.792 -1.025 -2.475 c -1.366 -1.367 -3.583 -1.367 -4.949 0 L 45 60.8 L 5.975 21.775 c -1.367 -1.367 -3.583 -1.367 -4.95 0 c -1.366 1.367 -1.366 3.583 0 4.95 l 41.5 41.5 c 1.366 1.367 3.583 1.367 4.949 0 l 41.5 -41.5 C 89.658 26.042 90 25.146 90 24.25 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #FFFAE2; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path></g></svg>`;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('vacation-popup');
    const closePopupButton = document.getElementById('close-popup');
    let popupClosed = false; // Flag to track if the popup has been closed

    // Function to show the popup
    function showPopup() {
        if (!popupClosed) {
            popup.style.display = 'block';
        }
    }

    // Function to hide the popup
    function hidePopup() {
        popup.style.display = 'none';
        popupClosed = true; // Set the flag to indicate the popup has been closed
    }

    // Event listener to hide the popup when the close button is clicked
    closePopupButton.addEventListener('click', hidePopup);

    // Event listener to show the popup after scrolling down 100px
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            showPopup();
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 60) { // 1rem is approximately 16px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('[data-lang]');
    
    function switchLanguage(language) {
        elements.forEach(element => {
            const text = element.getAttribute(`data-${language}`);
            if (text) {
                // Decode HTML entities and set innerHTML
                element.innerHTML = decodeEntities(text);
            }
        });
    }

    function decodeEntities(encodedString) {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = encodedString;
        return textarea.value;
    }

    window.switchLanguage = switchLanguage;
    
    // Set default language
    switchLanguage('nl');
});

