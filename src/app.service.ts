import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

async function readFileAsync(filePath: string): Promise<string> {
  try {
    const fileData = await readFile(filePath, 'utf8');
    return fileData;
  } catch (error) {
    throw error;
  }
}

@Injectable()
export class AppService {
  async getQuestions() {
    try {
      const fileData = await readFileAsync('src/data2.json');
      const jsonData = JSON.parse(fileData);
      return jsonData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
