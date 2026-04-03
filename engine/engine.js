const cardsPerPage = 4;
const truckContainer = document.getElementById('container');
const vehicleCards = Array.from(truckContainer.getElementsByClassName('card'));
const paginationContainer = document.getElementById('pagination-numbers');
let currentPage = 1;

function showPage(page) {
    currentPage = page;
    const totalPages = Math.ceil(vehicleCards.length / cardsPerPage);
    
    // Show/Hide Cards
    vehicleCards.forEach((card, index) => {
        card.style.display = (index >= (page - 1) * cardsPerPage && index < page * cardsPerPage) ? 'block' : 'none';
    });

    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    paginationContainer.innerHTML = '';

    // 1. Left Arrow
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => showPage(currentPage - 1);
    paginationContainer.appendChild(prevBtn);

    // 2. Number Buttons
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        btn.innerText = i;
        btn.onclick = () => showPage(i);
        paginationContainer.appendChild(btn);
    }

    // 3. Right Arrow
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => showPage(currentPage + 1);
    paginationContainer.appendChild(nextBtn);
}

showPage(1);