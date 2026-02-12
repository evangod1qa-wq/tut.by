// Данные об играх
const gamesData = [
    {
        title: "Google Dino",
        description: "Вам известная игра 'Гугл Дино'.",
        details: "Нажмите ИГРАТЬ",
        iconClass: "game-icon",
        url: "#" // Ссылка на игру
    },
    {
        title: "Игра без названия",
        description: "Не сильно известная игра, но то же получше.",
        details: "",
        iconClass: "game-icon second-icon",
        url: "#"
    },
    {
        title: "Еще одна игра",
        description: "Описание третьей игры.",
        details: "Играйте онлайн!",
        iconClass: "game-icon",
        url: "#"
    },
    // Добавьте больше игр здесь, копируя структуру объекта
];

// Функция для создания HTML-элемента карточки игры
function createGameCard(game) {
    const section = document.createElement('section');
    section.classList.add('game-item', 'card');
    
    section.innerHTML = `
        <div class="${game.iconClass}"></div>
        <div class="game-info">
            <h2>${game.title}</h2>
            <p>${game.description}</p>
            <p>${game.details}</p>
            <button class="play-small" onclick="window.location.href='${game.url}'">ИГРАТЬ</button>
        </div>
    `;
    return section;
}

// Функция для добавления всех игр на страницу
function renderGames() {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        // Очищаем существующий контент, если нужно
        mainContent.innerHTML = ''; 
        
        // Добавляем каждую игру из массива данных
        gamesData.forEach(game => {
            const card = createGameCard(game);
            mainContent.appendChild(card);
        });
    }
}

// Запускаем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', renderGames);
