import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folder = path.join(__dirname, '/public/images/Elects53');

const processFolder = (dir) => {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir,file);

    if(fs.statSync(fullPath).isDirectory()) {
      processFolder(fullPath);
      return;
    }
    
    const ext = path.extname(file);
    const name = path.basename(file, ext);
  
    let newExt = ext;
    if (/^\.jpe?g$/i.test(ext)) newExt = '.png';
    if (/^\.png$/i.test(ext)) newExt = '.png';
  
    const newPath = path.join(dir, name + newExt);
    
    if (fullPath !== newPath) {
      fs.renameSync(fullPath, newPath);
      console.log(`Renamed: ${file} → ${name + newExt}`);
    }
  })

}

processFolder(folder);