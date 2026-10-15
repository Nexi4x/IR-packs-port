/* =====================================================
   NEXI4X IR PACKS — INTERACTIVE CATALOG
   Работает поверх существующего js/main.js.
   ===================================================== */

(() => {
    'use strict';

    const STORAGE_KEY = 'nexi4x-ir-favorites-v1';

    const state = {
        query: '',
        version: 'all',
        favoritesOnly: false,
        sort: 'default',
        favorites: loadFavorites()
    };

    let searchInput;
    let versionSelect;
    let sortSelect;
    let favoritesButton;
    let resultsLabel;
    let emptyMessage;
    let grid;
    let toastStack;
    let backTopButton;

    function loadFavorites() {
        try {
            const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            return new Set(Array.isArray(value) ? value.map(String) : []);
        } catch {
            return new Set();
        }
    }

    function saveFavorites() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.favorites]));
        } catch {
            toast('Не удалось сохранить избранное в браузере.');
        }
    }

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, char => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[char]);
    }

    function getCardId(card) {
        const button = card.querySelector('[data-train-id]');
        return button ? String(button.dataset.trainId) : '';
    }

    function getCardName(card) {
        return card.querySelector('.train-name')?.textContent.trim() || 'Модель';
    }

    function getCardVersions(card) {
        return [...card.querySelectorAll('.version-tag')]
            .map(tag => tag.textContent.trim());
    }

    function toast(message) {
        if (!toastStack) return;

        const item = document.createElement('div');
        item.className = 'ux-toast';
        item.innerHTML = `
            <span class="ux-toast__mark">✓</span>
            <span>${escapeHTML(message)}</span>
        `;

        toastStack.appendChild(item);

        window.setTimeout(() => {
            item.classList.add('is-leaving');
            window.setTimeout(() => item.remove(), 220);
        }, 2600);
    }

    function buildToolbar() {
        const toolbar = document.createElement('div');
        toolbar.className = 'catalog-toolbar';
        toolbar.innerHTML = `
            <div class="catalog-toolbar__top">
                <label class="catalog-search">
                    <span class="catalog-search__icon" aria-hidden="true">⌕</span>
                    <input
                        class="catalog-input"
                        id="catalogSearch"
                        type="search"
                        placeholder="Поиск: ЭД4М, ЧС6, автор..."
                        autocomplete="off"
                        aria-label="Поиск моделей"
                    >
                </label>

                <select
                    class="catalog-select"
                    id="catalogSort"
                    aria-label="Сортировка моделей"
                >
                    <option value="default">Сортировка: по умолчанию</option>
                    <option value="name-asc">По названию: А → Я</option>
                    <option value="name-desc">По названию: Я → А</option>
                    <option value="versions">По числу версий</option>
                </select>
            </div>

            <div class="catalog-toolbar__bottom">
                <div class="catalog-toolbar__group">
                    <span class="catalog-label">Показать</span>
                    <button class="catalog-chip active" id="catalogAll" type="button">
                        Все модели
                    </button>
                    <button class="catalog-chip" id="catalogFavorites" type="button">
                        ♥ Избранное
                        <span class="catalog-chip__count" id="favoritesCount">0</span>
                    </button>
                </div>

                <div class="catalog-toolbar__group">
                    <label class="catalog-label" for="catalogVersion">Версия MC</label>
                    <select class="catalog-select" id="catalogVersion">
                        <option value="all">Все версии</option>
                    </select>
                    <button class="catalog-tool-btn" id="catalogReset" type="button">
                        Сбросить
                    </button>
                </div>

                <div class="catalog-results" id="catalogResults" aria-live="polite"></div>
            </div>

            <p class="catalog-hint">
                Подсказка: нажми <kbd>/</kbd>, чтобы перейти к поиску.
                Избранное сохраняется на этом устройстве.
            </p>
        `;

        const filters = document.querySelector('.filters');
        if (filters) {
            filters.parentNode.insertBefore(toolbar, filters);
        } else {
            grid.parentNode.insertBefore(toolbar, grid);
        }

        searchInput = toolbar.querySelector('#catalogSearch');
        versionSelect = toolbar.querySelector('#catalogVersion');
        sortSelect = toolbar.querySelector('#catalogSort');
        favoritesButton = toolbar.querySelector('#catalogFavorites');
        resultsLabel = toolbar.querySelector('#catalogResults');

        const allButton = toolbar.querySelector('#catalogAll');

        searchInput.addEventListener('input', () => {
            state.query = searchInput.value.trim().toLocaleLowerCase('ru');
            applyFilters();
        });

        versionSelect.addEventListener('change', () => {
            state.version = versionSelect.value;
            applyFilters();
        });

        sortSelect.addEventListener('change', () => {
            state.sort = sortSelect.value;
            applyFilters();
        });

        favoritesButton.addEventListener('click', () => {
            state.favoritesOnly = true;
            favoritesButton.classList.add('active');
            allButton.classList.remove('active');
            applyFilters();
        });

        allButton.addEventListener('click', () => {
            state.favoritesOnly = false;
            allButton.classList.add('active');
            favoritesButton.classList.remove('active');
            applyFilters();
        });

        toolbar.querySelector('#catalogReset').addEventListener('click', resetFilters);
    }

    function updateVersionOptions() {
        const versions = new Set();

        grid.querySelectorAll('.train-card').forEach(card => {
            getCardVersions(card).forEach(version => versions.add(version));
        });

        const sorted = [...versions].sort((a, b) =>
            a.localeCompare(b, undefined, { numeric: true })
        );

        versionSelect.innerHTML =
            '<option value="all">Все версии</option>' +
            sorted.map(version =>
                `<option value="${escapeHTML(version)}">${escapeHTML(version)}</option>`
            ).join('');

        if (state.version !== 'all' && !versions.has(state.version)) {
            state.version = 'all';
        }

        versionSelect.value = state.version;
    }

    function decorateCards() {
        grid.querySelectorAll('.train-card').forEach((card, index) => {
            if (card.dataset.uxReady === '1') return;

            card.dataset.uxReady = '1';

            const id = getCardId(card);
            const actions = card.querySelector('.train-actions');

            if (!id || !actions) return;

            const number = document.createElement('span');
            number.className = 'ux-card-number';
            number.textContent = `NEXI4X / ${String(id).padStart(2, '0')}`;

            const title = card.querySelector('.train-name');
            if (title) {
                title.parentNode.insertBefore(number, title);
            }

            const favorite = document.createElement('button');
            favorite.type = 'button';
            favorite.className = 'ux-icon-btn';
            favorite.dataset.uxFavorite = id;
            favorite.title = 'Добавить в избранное';
            favorite.setAttribute('aria-label', 'Добавить в избранное');
            favorite.textContent = '♡';

            const share = document.createElement('button');
            share.type = 'button';
            share.className = 'ux-icon-btn';
            share.dataset.uxShare = id;
            share.title = 'Поделиться моделью';
            share.setAttribute('aria-label', 'Поделиться моделью');
            share.textContent = '↗';

            actions.append(favorite, share);
            updateFavoriteButton(favorite, id);

            card.style.animationDelay = `${Math.min(index * 0.025, 0.25)}s`;
        });
    }

    function updateFavoriteButton(button, id) {
        const active = state.favorites.has(String(id));

        button.classList.toggle('is-favorite', active);
        button.textContent = active ? '♥' : '♡';
        button.title = active ? 'Убрать из избранного' : 'Добавить в избранное';
        button.setAttribute(
            'aria-label',
            active ? 'Убрать из избранного' : 'Добавить в избранное'
        );
        button.setAttribute('aria-pressed', String(active));
    }

    function updateFavoriteCount() {
        const counter = document.getElementById('favoritesCount');
        if (counter) counter.textContent = state.favorites.size;
    }

    function applyFilters() {
        decorateCards();

        const cards = [...grid.querySelectorAll('.train-card')];
        let visible = 0;

        cards.forEach(card => {
            const id = getCardId(card);
            const text = card.textContent.toLocaleLowerCase('ru');
            const versions = getCardVersions(card);

            const matchesQuery = !state.query || text.includes(state.query);
            const matchesVersion =
                state.version === 'all' || versions.includes(state.version);
            const matchesFavorite =
                !state.favoritesOnly || state.favorites.has(id);

            const show = matchesQuery && matchesVersion && matchesFavorite;

            card.hidden = !show;
            if (show) visible++;
        });

        const sorted = cards.slice();

        if (state.sort === 'name-asc') {
            sorted.sort((a, b) =>
                getCardName(a).localeCompare(getCardName(b), 'ru')
            );
        } else if (state.sort === 'name-desc') {
            sorted.sort((a, b) =>
                getCardName(b).localeCompare(getCardName(a), 'ru')
            );
        } else if (state.sort === 'versions') {
            sorted.sort((a, b) =>
                getCardVersions(b).length - getCardVersions(a).length
            );
        } else {
            sorted.sort((a, b) =>
                Number(getCardId(a)) - Number(getCardId(b))
            );
        }

        sorted.forEach(card => grid.appendChild(card));

        if (!emptyMessage) {
            emptyMessage = document.createElement('div');
            emptyMessage.className = 'catalog-empty';
            emptyMessage.innerHTML = `
                <div class="catalog-empty__icon">🚂</div>
                <h3>Ничего не найдено</h3>
                <p>Попробуй изменить запрос или сбросить фильтры.</p>
                <button type="button" id="catalogEmptyReset">Сбросить фильтры</button>
            `;
            grid.appendChild(emptyMessage);

            emptyMessage.querySelector('#catalogEmptyReset')
                .addEventListener('click', resetFilters);
        }

        emptyMessage.hidden = visible !== 0;

        resultsLabel.innerHTML =
            `Найдено моделей: <strong>${visible}</strong> из <strong>${cards.length}</strong>`;

        updateFavoriteCount();

        cards.forEach(card => {
            const button = card.querySelector('[data-ux-favorite]');
            if (button) updateFavoriteButton(button, getCardId(card));
        });
    }

    function resetFilters() {
        state.query = '';
        state.version = 'all';
        state.favoritesOnly = false;
        state.sort = 'default';

        searchInput.value = '';
        versionSelect.value = 'all';
        sortSelect.value = 'default';

        document.getElementById('catalogAll')?.classList.add('active');
        favoritesButton.classList.remove('active');

        document.querySelectorAll('.filter-btn').forEach(button => {
            button.classList.toggle('active', button.dataset.filter === 'all');
        });

        if (typeof window.renderTrains === 'function') {
            window.renderTrains('all');
        }

        window.setTimeout(() => {
            updateVersionOptions();
            applyFilters();
        }, 0);
    }

    function handleCardActions(event) {
        const favoriteButton = event.target.closest('[data-ux-favorite]');
        const shareButton = event.target.closest('[data-ux-share]');

        if (favoriteButton) {
            const id = String(favoriteButton.dataset.uxFavorite);

            if (state.favorites.has(id)) {
                state.favorites.delete(id);
                toast('Модель удалена из избранного.');
            } else {
                state.favorites.add(id);
                toast('Модель добавлена в избранное.');
            }

            saveFavorites();
            applyFilters();
            return;
        }

        if (shareButton) {
            const id = String(shareButton.dataset.uxShare);
            const url = new URL(window.location.href);
            url.hash = `model-${id}`;

            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(url.href)
                    .then(() => toast('Ссылка на каталог скопирована.'))
                    .catch(() => toast(url.href));
            } else {
                toast('Ссылка: ' + url.href);
            }
        }
    }

    function handleModelHash() {
        const match = window.location.hash.match(/^#model-(\d+)$/);
        if (!match) return;

        const id = match[1];
        const card = [...grid.querySelectorAll('.train-card')]
            .find(item => getCardId(item) === id);

        if (!card) {
            toast('Модель может быть скрыта текущими фильтрами.');
            return;
        }

        state.query = '';
        state.version = 'all';
        state.favoritesOnly = false;

        searchInput.value = '';
        versionSelect.value = 'all';
        favoritesButton.classList.remove('active');
        document.getElementById('catalogAll')?.classList.add('active');

        applyFilters();

        window.setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.animate(
                [
                    { outline: '2px solid rgba(139,124,255,0)' },
                    { outline: '2px solid rgba(139,124,255,.9)' },
                    { outline: '2px solid rgba(139,124,255,0)' }
                ],
                { duration: 1100 }
            );
        }, 50);
    }

    function setupExtras() {
        toastStack = document.createElement('div');
        toastStack.className = 'ux-toast-stack';
        toastStack.setAttribute('aria-live', 'polite');
        document.body.appendChild(toastStack);

        backTopButton = document.createElement('button');
        backTopButton.className = 'ux-back-top';
        backTopButton.type = 'button';
        backTopButton.title = 'Наверх';
        backTopButton.setAttribute('aria-label', 'Вернуться наверх');
        backTopButton.textContent = '↑';
        document.body.appendChild(backTopButton);

        backTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', () => {
            backTopButton.classList.toggle('is-visible', window.scrollY > 500);
        }, { passive: true });

        document.addEventListener('keydown', event => {
            const target = event.target;
            const typing = target instanceof HTMLInputElement ||
                target instanceof HTMLTextAreaElement ||
                target instanceof HTMLSelectElement ||
                target?.isContentEditable;

            if (event.key === '/' && !typing && !event.ctrlKey && !event.metaKey) {
                event.preventDefault();
                searchInput.focus();
            }

            if (event.key === 'Escape' && target === searchInput) {
                searchInput.value = '';
                state.query = '';
                applyFilters();
                searchInput.blur();
            }
        });

        document.addEventListener('click', handleCardActions);
        window.addEventListener('hashchange', handleModelHash);
    }

    function init() {
        grid = document.getElementById('trainsGrid');

        if (!grid) return;

        buildToolbar();
        setupExtras();
        decorateCards();
        updateVersionOptions();
        applyFilters();

        // Существующие категории перерисовывают карточки через main.js.
        // Обрабатываем обновлённый каталог после штатного обработчика.
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', () => {
                window.setTimeout(() => {
                    updateVersionOptions();
                    applyFilters();
                }, 0);
            });
        });

        handleModelHash();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();