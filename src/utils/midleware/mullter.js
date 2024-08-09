import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../cloudinary/cloudinary.js';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'ZodHoes', // Opcional: especifica una carpeta en Cloudinary donde deseas almacenar los archivos
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif'] // Opcional: especifica los formatos de archivo permitidos
  }
});

const upload = multer({ storage: storage });

export default upload;
