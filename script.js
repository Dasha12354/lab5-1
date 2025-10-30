// === 1. КНОПКА "НАВЕРХ" ===
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === 2. АККОРДЕОН ===
document.querySelectorAll('.accordion-title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        const isOpen = content.classList.contains('open');

        // Закрываем все
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.classList.remove('open');
        });

        // Открываем текущий
        if (!isOpen) {
            content.classList.add('open');
        }
    });
});

// === 3. ФИЛЬТРАЦИЯ ГАЛЕРЕИ ===
const filterBtns = document.querySelectorAll('.filters button');
const images = document.querySelectorAll('.gallery img');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.category;

        images.forEach(img => {
            if (category === 'all' || img.dataset.category === category) {
                img.classList.remove('hidden');
            } else {
                img.classList.add('hidden');
            }
        });
    });
});

// === 4. МОДАЛЬНОЕ ОКНО ===
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');

images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});