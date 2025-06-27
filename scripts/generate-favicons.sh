#!/bin/bash

# Убедимся, что у нас установлен Inkscape
if ! command -v inkscape &> /dev/null; then
    echo "Error: Inkscape is not installed. Please install it first."
    exit 1
fi

# Создаем директорию для favicon если её нет
mkdir -p public/favicons

# Массив размеров для favicon
sizes=(16 32 48 64 128 256)

# Конвертируем SVG в PNG разных размеров
for size in "${sizes[@]}"; do
    inkscape -w "$size" -h "$size" public/favicon.svg -o "public/favicons/favicon-${size}x${size}.png"
done

# Создаем ICO файл из PNG файлов
convert public/favicons/favicon-*.png public/favicon.ico

echo "Favicons generated successfully!" 