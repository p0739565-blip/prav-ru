// Функция переключения секций
function show(sectionId) {
  // Скрываем все секции
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  // Показываем выбранную секцию
  document.getElementById(sectionId).classList.add('active');

  // Обновляем состояние кнопок навигации
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
}

// Инициализация — делаем активным первое задание при загрузке
document.addEventListener('DOMContentLoaded', function() {
  show('z1');
});

// Улучшенная обработка клавиатуры для навигации
document.querySelectorAll('.nav-btn').forEach((btn, index) => {
  btn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
});
