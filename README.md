# АгроЛенд - Лендинг аграрной компании

Одностраничный лендинг для аграрной компании, разработанный на Next.js с использованием TypeScript и Tailwind CSS.

## Технологии

- Next.js 14
- TypeScript
- Tailwind CSS
- Feature-Sliced Design (упрощенная версия)

## Структура проекта

```
src/
├── app/               # Next.js App Router
├── widgets/           # Компоненты-секции сайта
├── entities/          # Базовые сущности
├── shared/            # Переиспользуемые компоненты
└── public/            # Статические файлы
```

## Особенности

- Адаптивный дизайн для мобильных и десктопных устройств
- Оптимизированные SVG-изображения
- Плавная прокрутка к секциям страницы
- Статическая генерация (SSG)
- Украинская версия сайта

## Запуск проекта

1. **Установка зависимостей:**

```bash
npm install
```

2. **Запуск в режиме разработки:**

```bash
npm run dev
```

3. **Сборка для продакшена:**

```bash
npm run build
```

4. **Запуск продакшен-версии:**

```bash
npm run start
```

## Секции сайта

- **Хедер:** Логотип, меню навигации, контактный телефон
- **О компании:** Описание компании и ее миссии
- **Продукция:** Информация о выращиваемой пшенице и подсолнечнике
- **Контакты:** Контактная информация и местоположение на карте
- **Футер:** Логотип, меню, соцсети, копирайт 