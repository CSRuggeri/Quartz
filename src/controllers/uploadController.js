import uploadService from"../services/uploadedServices.js";

const uploadController = {
    imageUpload: async (req, res, next) => {
        try {
            const url = await uploadService.dbimage(req.file);
            // Handle success response
            res.status(200).json({ url });
        } catch (error) {
            // Handle error response
            res.status(500).json({ error: error.message });
        }
    }
};

export default uploadController;