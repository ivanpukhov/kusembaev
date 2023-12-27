const sharp = require('sharp');
const glob = require('glob');

// Поиск всех PNG файлов в проекте
glob("**/*.png", { ignore: ["node_modules/**/*"] }, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    files.forEach(file => {
        sharp(file)
            .toFormat('webp')
            .toFile(file.replace('.png', '.webp'))
            .then(() => {
                console.log(`Конвертировано: ${file}`);
            })
            .catch(err => {
                console.error(`Ошибка при конвертации файла ${file}:`, err);
            });
    });
});
