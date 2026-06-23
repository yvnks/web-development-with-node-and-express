import fs from 'node:fs';
import { randomBytes } from 'node:crypto';

const file = fs.createWriteStream('./big-file.txt');

for (let index = 0; index < 1e6; index++) {
  file.write(randomBytes(200).toString('hex'));
}
file.end();
