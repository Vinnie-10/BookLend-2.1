let pfpMenu = document.getElementById("pfpMenu");

function toggleMenu(){
    pfpMenu.classList.toggle("open-menu");
}

let dropNotif = document.getElementById("notifDrop");

function toggleNotif(){
    dropNotif.classList.toggle("open-notif");
}

function favorite(heart){
    heart.classList.toggle("fa-regular");
    heart.classList.toggle("fa-solid");
}

const checkbox1 = document.getElementById('term3');
const checkbox2 = document.getElementById('term4');
const button = document.getElementById('submit');
const dateInput = document.getElementById('extend');

function borrowingLimit(){
    const today = new Date();
    const max = new Date();

    max.setDate(today.getDate() + 7);

    const todayStr = today.toISOString().split('T')[0];
    const maxStr = max.toISOString().split('T')[0];

    dateInput.min = todayStr;
    dateInput.max = maxStr;

    validateSubmit();
}

function validateSubmit(){   
    const date1 = dateInput.value; 
    const checkboxes = checkbox1.checked && checkbox2.checked;

    let validDate = false;
    if (date1) {
        const selectedDate = new Date(date1);
        const minDate = new Date(dateInput.min);
        const maxDate = new Date(dateInput.max);
        validDate = selectedDate >= minDate && selectedDate <= maxDate;
    }
}

dateInput.addEventListener('change', validateSubmit);
checkbox1.addEventListener('change', validateSubmit);
checkbox2.addEventListener('change', validateSubmit);

borrowingLimit();

function showqr(){
    document.getElementById('popup').style.display = "flex";
}

button.addEventListener("click", function(e) {
    const date1 = dateInput.value;
    const checkboxes = checkbox1.checked && checkbox2.checked;

    let validDate = false;
    if (date1) {
        const selectedDate = new Date(date1);
        const minDate = new Date(dateInput.min);
        const maxDate = new Date(dateInput.max);
        validDate = selectedDate >= minDate && selectedDate <= maxDate;
    }

    if (checkboxes && validDate) {
        showqr();
    } else {
        e.preventDefault(); // prevent default action (if any)
        alert("Harap isi tanggal dan centang kedua pernyataan terlebih dahulu.");
    }
});

function toggleHamburger() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}
