import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

const files = await imagemin(['assets/img/**/*.{jpg,png}'], {
	destination: 'build/assets/img',
	plugins: [
		imageminJpegtran(),
		imageminPngquant({
			quality: [0.6, 0.6]
		})
	]
});
