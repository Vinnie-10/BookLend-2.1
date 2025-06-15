let pfpMenu = document.getElementById("pfpMenu");

function toggleMenu(){
    pfpMenu.classList.toggle("open-menu");
}

let dropNotif = document.getElementById("notifDrop");

function toggleNotif(){
    dropNotif.classList.toggle("open-notif");
}

const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const bookTitleInput = document.getElementById("bookTitleInput");

const detailView = document.getElementById("detailView");
const detailTitle = document.getElementById("detailTitle");
const detailAuthor = document.getElementById("detailAuthor");
const detailRating = document.getElementById("detailRating");
const detailTitleText = document.getElementById("detailTitleText");

let books = [];

function saveBooks() {
  localStorage.setItem("favoriteBooks", JSON.stringify(books));
}

function loadBooks() {
  const data = localStorage.getItem("favoriteBooks");
  if (data) {
    books = JSON.parse(data);
    books.forEach(book => {
      const card = createBookCard(book.title, book.author, book.rating);
      bookList.appendChild(card);
    });
  }
}

function addBook() {
  const title = bookTitleInput.value.trim();
  if (title) {
    const newBook = { title, author: "Penulis", rating: "4.5/5" };
    books.push(newBook);
    saveBooks();

    const card = createBookCard(newBook.title, newBook.author, newBook.rating);
    bookList.appendChild(card);
    bookTitleInput.value = "";
    filterBooks();
  } else {
    alert("Masukkan judul buku");
  }
}

function createBookCard(title = "Judul", author = "Penulis", rating = "4.5/5") {
  const card = document.createElement("div");
  card.className = "book-card";
  card.setAttribute("data-title", title.toLowerCase());
  card.innerHTML = `
    <div class="book-image">X</div>
    <div class="book-info">
      <h3>"${title}"</h3>
      <p>${author}</p>
      <div class="rating">Rating ${rating}</div>
      <div class="delete-btn" onclick="deleteBook('${title}', this)">Hapus</div>
    </div>
    <div class="book-status">Tersedia</div>
  `;

  card.addEventListener("click", () => {
    showDetail({ title, author, rating });
  });

  return card;
}

function deleteBook(title, btn) {
  btn.closest(".book-card").remove();
  books = books.filter(b => b.title !== title);
  saveBooks();
}

function filterBooks() {
  const query = searchInput.value.toLowerCase();
  const cards = bookList.querySelectorAll(".book-card");

  cards.forEach(card => {
    const title = card.getAttribute("data-title");
    card.style.display = title.includes(query) ? "flex" : "none";
  });
}

function showDetail(book) {
  detailTitle.textContent = `"${book.title}"`;
  detailAuthor.textContent = book.author;
  detailRating.textContent = book.rating;
  detailTitleText.textContent = `"${book.title}"`;

  document.querySelector(".search-bar").style.display = "none";
  document.querySelector(".add-form").style.display = "none";
  bookList.style.display = "none";
  detailView.style.display = "block";
}

function showList() {
  detailView.style.display = "none";
  document.querySelector(".search-bar").style.display = "block";
  document.querySelector(".add-form").style.display = "flex";
  bookList.style.display = "block";
}

bookTitleInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") addBook();
});

searchInput.addEventListener("input", filterBooks);

loadBooks();

function showqr(){
    document.getElementById('popup').style.display = "flex";
}

function toggleHamburger() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}