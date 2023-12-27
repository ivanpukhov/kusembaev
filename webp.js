const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Функция для рекурсивного обхода директорий
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
};

// Функция для конвертации PNG изображений в WebP
function convertToWebP(filePath) {
  if (/\.(png)$/i.test(filePath)) {
    const outputPath = filePath.replace(/\.\w+$/, '.webp');
    sharp(filePath)
      .toFile(outputPath)
      .then(() => {
        console.log(`Converted ${filePath} to ${outputPath}`);
        updateReferences(filePath, outputPath);
      })
      .catch(err => console.error(`Error converting ${filePath}: ${err}`));
  }
}

// Функция для обновления ссылок на изображения
function updateReferences(oldPath, newPath) {
  const oldFileName = path.basename(oldPath);
  const newFileName = path.basename(newPath);
  walkDir('src', (file) => {
    if (/\.(js|jsx|css)$/i.test(file)) {
      let content = fs.readFileSync(file, 'utf8');
      if (content.includes(oldFileName)) {
        const updatedContent = content.split(oldFileName).join(newFileName);
        fs.writeFileSync(file, updatedContent, 'utf8');
        console.log(`Updated references in ${file}`);
      }
    }
  });
}

// Запуск конвертации для директории src
walkDir('src', convertToWebP);
