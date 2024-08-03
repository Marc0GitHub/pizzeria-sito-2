



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
    const menu = document.getElementById('menu');
    const dropdownContent = document.getElementById('dropdownContent');
    const dropdownItems = document.querySelectorAll('.dropdown-content a');
    const menuSections = document.querySelectorAll('.menu-section');

    // Toggle dropdown menu
    menu.addEventListener('click', function(event) {
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
            menu.innerHTML = `${itemName} <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  viewBox="0 0 256 256"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path d="M 90 24.25 c 0 -0.896 -0.342 -1.792 -1.025 -2.475 c -1.366 -1.367 -3.583 -1.367 -4.949 0 L 45 60.8 L 5.975 21.775 c -1.367 -1.367 -3.583 -1.367 -4.95 0 c -1.366 1.367 -1.366 3.583 0 4.95 l 41.5 41.5 c 1.366 1.367 3.583 1.367 4.949 0 l 41.5 -41.5 C 89.658 26.042 90 25.146 90 24.25 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #FFFAE2; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path></g></svg>`;
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

const images = [
    {
        src: 'https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/253662552_2175088992630801_1176450582791739566_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEIzF_raLvU-_XycamxBR8cyqxeZSsN523KrF5lKw3nbWAs81PI4Yu58x7mEMUovIVAIdWhRhu_uR3W5qqjCGAo&_nc_ohc=kvVs0kSeApkQ7kNvgGdsDhP&_nc_ht=scontent-bru2-1.xx&oh=00_AYCRjPViiVOl6iVQVifCDWAa72mCtdDyK2CMz1q3sgxWOQ&oe=66AB45DD',
        text: 'Spaghetti Bolognese'
    },
    {
        src: 'https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/241643245_2126145967525104_1244552071197719889_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGDNfb1wQn4VYRfyvT6uBU1IoOcT1Z22H4ig5xPVnbYfp5Pld7U4KNvH2dzYvesEo99v458DQjdAETe-jQJOa98&_nc_ohc=qwVutRuk_bIQ7kNvgHxiAYL&_nc_ht=scontent-bru2-1.xx&oh=00_AYDHXs1xiHMIf5nCygabrG5VXdv9TBa0pWjFvKxw4EeXQA&oe=66AB2118',
        text: 'Spaghetti Vegetariana'
    },
    {
        src: 'https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/241635087_2126145907525110_8071309544068729427_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHnJfK5oAZQ9s6s-PZziZV6Amg77h35e2UCaDvuHfl7ZVH0WNS4m-IUUSgbd6TiSmtaWYSO94iubiDfsga3XoHx&_nc_ohc=UnuMUE-F74kQ7kNvgEkycsI&_nc_ht=scontent-bru2-1.xx&oh=00_AYD2KcaO-8N9006ZgPh5zRvKKxu7EfSiUzApcw96gCNB9A&oe=66AB1F67',
        text: 'De pasta koken'
    },
    {
        src: 'https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/241634583_2126145844191783_2140451842754824122_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH0-BbJ8CJR8JGCXr2KdCVygTRvJL5Wf3yBNG8kvlZ_fNhXFcsNCmZevgZwzbk9Yme3DyJrqYeaN1v2m0iualL1&_nc_ohc=JNKSqnMfvLIQ7kNvgFIMDWt&_nc_ht=scontent-bru2-1.xx&oh=00_AYC6Nipxz8ji2B6wlimHphSsrZZ7IzClFQQYGsZcLr8jTQ&oe=66AB41A1',
        text: 'Oven aan'
    },
    {
        src: 'assets/pizzeria2.jpg',
        text: 'Een pizza bereiden'
    },
    {
        src: 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.6435-9/69482111_1463427027130338_7055937956527210496_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG9Up4ckOwsp3psDXmMyB20wcU3iqSnRDvBxTeKpKdEOybi6kqYMPoaNGKZfzX6Yq146827vxcaOGNa67OzvN0a&_nc_ohc=hX_9Uwi-oE8Q7kNvgHATOXA&_nc_ht=scontent-bru2-1.xx&oh=00_AYB7PHPtBlqpB3TPKuHe1uh-DUXKxxGPTev91qzUF7YitQ&oe=66CCE68F',
        text: 'Lasagna Vegetariana'
    },
    {
        src: 'assets/unnamed.jpg',
        text: 'Pizza Capricciosa'
    },
    {
        src: 'assets/IMG_7186.jpeg',
        text: 'Pizza Funghi'
    },
    {
        src: 'assets/IMG_7185.jpg',
        text: 'Pizza Koukou'
    },
    {
        src: 'assets/pizza-9in-oven.jpg',
        text: 'Pizza koken'
    },
    {
        src: 'assets/bella-italia.jpg',
        text: 'Pizza Bella Italia'
    },
    {
        src: 'assets/frutti-di-mare.jpg',
        text: 'Spaghettisaus met zeevruchten'
    },
    {
        src: 'assets/siciliana.jpg',
        text: 'Pizza met ansjovis en olijven'
    },
    {
        src: 'assets/sordi.jpg',
        text: 'Interieurdecoraties'
    },
    // Voeg hier meer afbeeldingen en beschrijvingen toe als nodig
];
let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    document.getElementById('modal-img').src = images[index].src;
    document.getElementById('modal-text').innerText = images[index].text;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateModal();
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateModal();
}

function updateModal() {
    document.getElementById('modal-img').src = images[currentIndex].src;
    document.getElementById('modal-text').innerText = images[currentIndex].text;
}

AOS.init();