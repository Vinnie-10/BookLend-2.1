let pfpMenu = document.getElementById("pfpMenu");

function toggleMenu(){
    pfpMenu.classList.toggle("open-menu");
}

let dropNotif = document.getElementById("notifDrop");

function toggleNotif(){
    dropNotif.classList.toggle("open-notif");
}

const allstars = document.querySelectorAll('.Rcontainer');

allstars.forEach(container => {
    const stars = container.querySelectorAll('.star');

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach((s, i) => {
                if (i <= index){
                    s.textContent = '★';
                } else {
                    s.textContent = '☆'; 
                }
            })
        })
    })
})

function toggleHamburger() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}