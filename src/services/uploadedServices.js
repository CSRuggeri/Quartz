import cloudinary from"../utils/cloudinary/cloudinary.js";
import { loadModels } from "../database/db.js";
const uploadService ={
    dbimage: async (file)=>{
        const { Upload } = await loadModels();
        try {
            const result = await cloudinary.uploader.upload(file.path); 
            const url = result.secure_url; 
            console.log(url); 
            const avatar = await Upload.create({url})
            return url;
        } catch (error) {
            console.error('Error uploading image to Cloudinary:', error);
            throw new Error('Failed to upload image to Cloudinary');
        }
    }
}


export default uploadService;