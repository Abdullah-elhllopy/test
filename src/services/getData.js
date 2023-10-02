import fs from 'fs';
import path from 'path';

export const getData = (fileName) => {
    const filePath = path.join(process.cwd(), 'public', 'database', `${fileName}.json`);
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    return data;
}