const fs = require('fs');
const path = require('path');

function getImageFiles() {
  const staticDir = path.resolve(__dirname, 'static'); // Path to your static directory
  const files = fs.readdirSync(staticDir);
  const imageFiles = files.filter((file) => {
    const extname = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(extname);
  });

  return imageFiles.map((file) => path.join('/static', file));
}

module.exports = { getImageFiles };
