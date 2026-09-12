// ============================================
// ДАННЫЕ О ПОЕЗДАХ — ЗАМЕНИ НА СВОИ!
// ============================================

const trainsData = [
    {
        id: 1,
        name: "Паровоз Эр 797-15",
        category: "steam",
        description: "Легендарный советский паровоз серии Эр. Один из самых массовых паровозов в мире.",
        image: "images/trains/er797.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "45 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", size: "46 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", size: "47 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", size: "48 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 2,
        name: "Тепловоз ТЭ3",
        category: "diesel",
        description: "Классический советский грузовой тепловоз. Двухсекционный, с характерным дизайном.",
        image: "images/trains/te3.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "52 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", size: "53 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", size: "55 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 3,
        name: "Электровоз ВЛ80с",
        category: "electric",
        description: "Мощный советский электровоз для работы на переменном токе.",
        image: "images/trains/vl80.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "38 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", size: "39 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", size: "40 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.2", size: "41 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", size: "42 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 4,
        name: "Пассажирский вагон",
        category: "passenger",
        description: "Классический пассажирский вагон для составов дальнего следования.",
        image: "images/trains/passenger.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "25 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", size: "26 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", size: "28 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 5,
        name: "Паровоз СО17-2211",
        category: "steam",
        description: "Мощный грузовой паровоз серии СО. Известен как 'Серго'.",
        image: "images/trains/so17.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "48 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", size: "49 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 6,
        name: "Тепловоз 2ТЭ116",
        category: "diesel",
        description: "Современный российский грузовой тепловоз с электрической передачей.",
        image: "images/trains/2te116.jpg",
        versions: [
            { mcVersion: "1.16.5", size: "55 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", size: "56 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", size: "58 MB", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    }
];

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initBurger();
    initFilters();
    renderTrains('all');
    initModal();
    initScrollAnimations();
    initCounters();
});

// ============================================
// ШАПКА И СКРОЛЛ
// ============================================

function initHeader() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ============================================
// БУРГЕР-МЕНЮ
// ============================================

function initBurger() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ============================================
// ФИЛЬТРЫ
// ============================================

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            renderTrains(filter);
        });
    });
}

// ============================================
// ОТРИСОВКА ПОЕЗДОВ
// ============================================

function renderTrains(filter) {
    const grid = document.getElementById('trainsGrid');
    grid.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? trainsData 
        : trainsData.filter(train => train.category === filter);
    
    filtered.forEach((train, index) => {
        const card = createTrainCard(train, index);
        grid.appendChild(card);
    });
}

function createTrainCard(train, index) {
    const card = document.createElement('div');
    card.className = 'train-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const categoryNames = {
        steam: 'Паровоз',
        diesel: 'Тепловоз',
        electric: 'Электровоз',
        passenger: 'Пассажирский'
    };
    
    card.innerHTML = `
        <img src="${train.image}" alt="${train.name}" class="train-image" onerror="this.src='https://via.placeholder.com/400x220/1a1a2e/667eea?text=${encodeURIComponent(train.name)}'">
        <div class="train-info">
            <span class="train-category category-${train.category}">${categoryNames[train.category]}</span>
            <h3 class="train-name">${train.name}</h3>
            <p class="train-description">${train.description}</p>
            <div class="train-versions">
                ${train.versions.map(v => `<span class="version-tag">${v.mcVersion}</span>`).join('')}
            </div>
            <div class="train-actions">
                <button class="btn-download" onclick="openVersionModal(${train.id})">
                    Скачать
                </button>
                <button class="btn-info" onclick="showInfo(${train.id})">
                    Инфо
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// ============================================
// МОДАЛЬНОЕ ОКНО ВЕРСИЙ
// ============================================

function initModal() {
    const modal = document.getElementById('versionModal');
    const closeBtn = modal.querySelector('.modal-close');
    const backdrop = modal.querySelector('.modal-backdrop');
    
    closeBtn.addEventListener('click', closeVersionModal);
    backdrop.addEventListener('click', closeVersionModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeVersionModal();
    });
}

function openVersionModal(trainId) {
    const modal = document.getElementById('versionModal');
    const train = trainsData.find(t => t.id === trainId);
    
    if (!train) return;
    
    document.getElementById('modalTrainName').textContent = train.name;
    
    const versionsList = document.getElementById('versionsList');
    versionsList.innerHTML = '';
    
    train.versions.forEach(version => {
        const item = document.createElement('div');
        item.className = 'version-item';
        item.innerHTML = `
            <div class="version-info">
                <span class="version-number">MC ${version.mcVersion}</span>
                <span class="version-size">${version.size}</span>
            </div>
            <a href="${version.url}" target="_blank" class="btn-download-small">
                Скачать
            </a>
        `;
        versionsList.appendChild(item);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVersionModal() {
    const modal = document.getElementById('versionModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// ИНФОРМАЦИЯ О ПОЕЗДЕ
// ============================================

function showInfo(trainId) {
    const train = trainsData.find(t => t.id === trainId);
    if (!train) return;
    
    alert(`${train.name}\n\n${train.description}\n\nДоступные версии: ${train.versions.map(v => v.mcVersion).join(', ')}`);
}

// ============================================
// АНИМАЦИИ ПРИ СКРОЛЛЕ
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ============================================
// СЧЁТЧИКИ
// ============================================

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// ПЛАВНЫЙ СКРОЛЛ
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
