let pfpMenu = document.getElementById("pfpMenu");

function toggleMenu(){
    pfpMenu.classList.toggle("open-menu");
}

let dropNotif = document.getElementById("notifDrop");

function toggleNotif(){
    dropNotif.classList.toggle("open-notif");
}

const newestBtn = document.getElementById('newest');
const highestBtn = document.getElementById('highest');
const lowestBtn = document.getElementById('lowest');

function changestyle(){
    const buttons = document.querySelectorAll('.sort-button');
    buttons.forEach(button => {
        button.style.backgroundColor = 'rgb(169, 169, 169)';
        button.style.opactiy = '0.7';
    });
}

const ratings1 = document.getElementById('review1');
const ratings2 = document.getElementById('review2');
const ratings3 = document.getElementById('review3');

function countStars(reviewElement) {
    const stars = reviewElement.querySelectorAll('.Userstar');
    let count = 0;
    stars.forEach(star => {
        // Only count filled stars (★)
        if (star.innerHTML === '★') count++; 
    });
    return count;
}

function print(order){
    const reviews = [ratings1, ratings2, ratings3];
    reviews.forEach(review => review.style.display = 'flex');

    if (order == 'newest'){
        reviews.forEach((review, index) => {
            review.style.order = index + 1;
        })
    } else if (order === 'highest') {
        // Sort by highest rated using countStars function
        reviews.sort((a, b) => countStars(b) - countStars(a));
        reviews.forEach((review, index) => {
            review.style.order = index;
        });
    } else if (order === 'lowest') {
        // Sort by lowest rated using countStars function
        reviews.sort((a, b) => countStars(a) - countStars(b));
        reviews.forEach((review, index) => {
            review.style.order = index;
        });
    }
}

newestBtn.addEventListener('click', () => {
    changestyle();
    newestBtn.style.backgroundColor = ' rgb(225, 211, 254)';
    newestBtn.style.opacity = '1';
    print('newest');
});

highestBtn.addEventListener('click', () => {
    changestyle();
    highestBtn.style.backgroundColor = ' rgb(44, 201, 0)';
    highestBtn.style.opacity = '1';
    print('highest');
});

lowestBtn.addEventListener('click', () => {
    changestyle();
    lowestBtn.style.backgroundColor = ' rgb(242, 72, 34)';
    lowestBtn.style.opacity = '1';
    print('lowest');
});

function toggleHamburger() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}