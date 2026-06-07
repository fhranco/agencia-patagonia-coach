import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoryPath = './public/images';

async function convertImages() {
  try {
    const files = fs.readdirSync(directoryPath);
    console.log(`Found ${files.length} items in ${directoryPath}`);

    for (const file of files) {
      if (path.extname(file).toLowerCase() === '.png') {
        const inputFilePath = path.join(directoryPath, file);
        const outputFileName = path.basename(file, '.png') + '.webp';
        const outputFilePath = path.join(directoryPath, outputFileName);

        console.log(`Converting ${file} to ${outputFileName}...`);
        await sharp(inputFilePath)
          .webp({ quality: 82 })
          .toFile(outputFilePath);

        console.log(`[SUCCESS] Converted to ${outputFileName}. Deleting original PNG...`);
        fs.unlinkSync(inputFilePath);
      }
    }
    console.log('Image conversion complete!');
  } catch (error) {
    console.error('Error during image conversion:', error);
  }
}

convertImages();
