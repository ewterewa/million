// ============================================
// СИГНАЛ — 8 каналов годной информации
// ============================================

const channels = [
  {
    num: 1,
    title: "ФИНАНСОВАЯ ГРАМОТНОСТЬ",
    resources: [
      { name: "Мои финансы", url: "https://моифинансы.рф", desc: "Статьи, тесты, калькуляторы по личным финансам" },
      { name: "Финансовая культура", url: "https://fincult.info", desc: "Проект Банка России: инвестиции, защита от мошенников" },
      { name: "РОЦИТ", url: "https://rocit.ru", desc: "База знаний по интернет-платежам и цифровой безопасности" },
      { name: "Банк России", url: "https://cbr.ru", desc: "Официальные данные по ставкам, инфляции, курсам" }
    ]
  },
  {
    num: 2,
    title: "ОБРАЗОВАТЕЛЬНЫЕ ПЛАТФОРМЫ",
    resources: [
      { name: "Stepik", url: "https://stepik.org", desc: "Онлайн-курсы, более 60 бесплатных программ" },
      { name: "ПостНаука", url: "https://postnauka.ru", desc: "Лекции и статьи по науке, культуре, психологии" },
      { name: "Урок цифры", url: "https://урокцифры.рф", desc: "Всероссийский проект по цифровым навыкам" },
      { name: "Открытое образование", url: "https://openedu.ru", desc: "Курсы ведущих российских вузов" }
    ]
  },
  {
    num: 3,
    title: "НАВЫКИ И КАРЬЕРА",
    resources: [
      { name: "Кружковое движение НТИ", url: "https://kruzhok.org", desc: "Курсы, проекты, стажировки от технологических компаний" },
      { name: "Готов к цифре", url: "https://готовкцифре.рф", desc: "Проект о безопасном использовании цифровых технологий" },
      { name: "Знание.Академия", url: "https://znanierussia.ru", desc: "Бесплатные курсы от Российского общества «Знание»" },
      { name: "Россия — страна возможностей", url: "https://rsv.ru", desc: "Конкурсы, проекты, гранты для молодёжи" }
    ]
  },
  {
    num: 4,
    title: "САМОРАЗВИТИЕ И МЫШЛЕНИЕ",
    resources: [
      { name: "4brain", url: "https://4brain.ru", desc: "Развитие аналитического, творческого, коммуникативного мышления" },
      { name: "SPACE", url: "https://space.ru", desc: "Платформа для развития, знакомств и поиска событий" },
      { name: "МоёДвижение", url: "https://moedvizhenie.ru", desc: "Соцсеть для личного и профессионального роста" },
      { name: "kiozk", url: "https://kiozk.ru", desc: "Аудио и тексты статей, лекций, подкастов" }
    ]
  },
  {
    num: 5,
    title: "ТЕХНОЛОГИИ И ПРОГРАММИРОВАНИЕ",
    resources: [
      { name: "OpenLearn", url: "https://www.open.edu/openlearn", desc: "Тысячи бесплатных курсов по программированию и AI" },
      { name: "Stepik — IT", url: "https://stepik.org/catalog/it", desc: "Python, алгоритмы, данные от практиков" },
      { name: "Edurobots", url: "https://edurobots.ru", desc: "Образовательный проект по робототехнике" },
      { name: "Хабр", url: "https://habr.com", desc: "Крупнейшее русскоязычное сообщество IT-специалистов" }
    ]
  },
  {
    num: 6,
    title: "ЗДОРОВЬЕ И СПОРТ",
    resources: [
      { name: "TutorPlace", url: "https://tutorplace.ru", desc: "Курсы по питанию, спорту, психологии" },
      { name: "Здоровое питание", url: "https://здоровое-питание.рф", desc: "Национальный проект о питании и здоровье" },
      { name: "ГТО", url: "https://gto.ru", desc: "Всероссийский физкультурно-спортивный комплекс" },
      { name: "Спорт-экспресс", url: "https://sport-express.ru", desc: "Новости спорта и аналитика" }
    ]
  },
  {
    num: 7,
    title: "ПРОЕКТЫ И ИНИЦИАТИВЫ",
    resources: [
      { name: "Кружковое движение НТИ", url: "https://kruzhok.org", desc: "Технологические проекты, соревнования, стажировки" },
      { name: "Российское общество «Знание»", url: "https://znanierussia.ru", desc: "Лекции, мастер-классы, проекты для молодёжи" },
      { name: "Добро.рф", url: "https://dobro.ru", desc: "Крупнейшая платформа волонтёрства в России" },
      { name: "Росмолодёжь", url: "https://myrosmol.ru", desc: "Гранты и конкурсы для молодёжных проектов" }
    ]
  },
  {
    num: 8,
    title: "БЛОГИНГ И САМОВЫРАЖЕНИЕ",
    resources: [
      { name: "VK для авторов", url: "https://vk.com", desc: "Площадка для ведения блога и сообщества" },
      { name: "Telegram", url: "https://telegram.org", desc: "Каналы и боты для публикации контента" },
      { name: "Дзен", url: "https://dzen.ru", desc: "Платформа для статей и видео" },
      { name: "4brain — блог", url: "https://4brain.ru/blog", desc: "Примеры образовательных блогов и советы авторам" }
    ]
  }
];

let current = 0;

const slideEl = document.getElementById('slide');
const titleEl = document.getElementById('slideTitle');
const textEl = document.getElementById('slideText');
const channelNum = document.getElementById('channelNum');

function render(index) {
  const ch = channels[index];

  slideEl.classList.add('glitching');

  setTimeout(() => {
    channelNum.textContent = `КАНАЛ ${ch.num}`;
    titleEl.textContent = ch.title;

    textEl.innerHTML = ch.resources.map(r => `
      <a class="resource" href="${r.url}" target="_blank" rel="noopener noreferrer">
        <span class="res-name">${r.name}</span>
        <span class="res-desc">${r.desc}</span>
      </a>
    `).join('');

    slideEl.classList.remove('glitching');
    slideEl.scrollTop = 0;
  }, 120);
}

document.getElementById('nextBtn').addEventListener('click', () => {
  current = (current + 1) % channels.length;
  render(current);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  current = (current - 1 + channels.length) % channels.length;
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

// Старт
render(0);
