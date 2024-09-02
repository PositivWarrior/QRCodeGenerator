import inquirer from 'inquirer';
import qr from 'qr-image';
import fs, { writeFile } from 'fs';

inquirer
	.prompt({
		message: 'Paste in here...',
		name: 'URL',
	})
	.then((answers) => {
		const url = answers.URL;

		const qrCode = qr.image(url, { type: 'png', margin: 1 });
		qrCode.pipe(fs.createWriteStream('qr_image.png'));
		console.log('QR code generated and saved as "qrcode.png".');

		fs.writeFile('URL.txt', url, (err) => {
			if (err) throw err;
			console.log('File has been saved.');
		});
	})
	.catch((error) => {
		if (error.isTtyError) {
		} else {
		}
	});
