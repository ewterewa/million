const slides = [
  {
    title: "МОЙ МИЛЛИОН\nВОЗМОЖНОСТЕЙ",
    text: "Итоговый проект по финансовой грамотности\nВыполнил: [Фамилия Имя], 11 класс"
  },
  {
    title: "ПЛАН ДО 30 ЛЕТ",
    text: "17–18: школа и поступление\n18–22: бакалавриат, Python, AI, стажировки\n23–25: стабильный доход, запуск проекта\n26–30: портфель, недвижимость, пассивный доход"
  },
  {
    title: "КАРТА ИНСТРУМЕНТОВ",
    text: "Радость — 15% — дебетовая карта\nРазвитие — 25% — накопительный счёт\nКапитал — 50% — короткие ОФЗ + вклад\nСоциум — 10% — Добро.рф, фонды"
  },
  {
    title: "ФИНАНСОВЫЕ ПРАВИЛА",
    text: "1. Плати сначала себе — 10% в резерв\n2. Правило 24 часов перед покупкой\n3. Инвестиции в знания\n4. Диверсификация\n5. Налоговые вычеты"
  },
  {
    title: "ПЛАН В СЛОЖНЫХ СИТУАЦИЯХ",
    text: "Потеря дохода → резерв + фриланс\nКрупные расходы → накопительный счёт\nПросадка рынка → не продавать в минус\nУсреднение вместо паники"
  },
  {
    title: "ВЛОЖЕНИЯ В СЕБЯ",
    text: "IT: Python, алгоритмы, AI\nЯзык: свободный английский\nСпорт: 66 кг, велоспорт\nКреатив: фотография и дизайн"
  },
  {
    title: "МОЯ ИНИЦИАТИВА",
    text: "Эксперимент «От 0 до 1»\nКастомные худи ручной росписи\nБюджет до 350 000 руб.\nПроверка спроса, цены и времени"
  },
  {
    title: "БЛАГОТВОРИТЕЛЬНОСТЬ",
    text: "Фото для фондов и приютов\nПомощь новичкам в велоспорте\nРазвитие локального комьюнити\nНавыки как вклад в общество"
  }
];

let current = 0;
const slideEl = document.getElementById('slide');
const titleEl = document.getElementById('slideTitle');
const textEl = document.getElementById('slideText');
const channelNum = document.getElementById('channelNum');

function render(index) {
  slideEl.classList.add('glitching');
  setTimeout(() => {
    titleEl.innerHTML = slides[index].title.replace(/\n/g, '<br>');
    textEl.innerHTML = slides[index].text;
    channelNum.textContent = `КАНАЛ ${index + 1}`;
    slideEl.classList.remove('glitching');
  }, 120);
}

document.getElementById('nextBtn').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  render(current);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  render(current);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') document.getElementById('nextBtn').click();
  if (e.key === 'ArrowLeft') document.getElementById('prevBtn').click();
});

// Таймер в футере
let seconds = 0;
setInterval(() => {
  seconds++;
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${h}:${m}:${s}`;
}, 1000);

render(0);
