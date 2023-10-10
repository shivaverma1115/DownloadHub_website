const express = require("express") ;
const cloudinaryRouter = express.Router() ;
const cloudinary = require("cloudinary");
const fs = require('fs');

require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

  cloudinary.uploads = (file, folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({
                url: result.url,
                id: result.public_id
            })
        }, {
            resource_type: "auto",
            folder: folder
        })
    })
}

const { upload } = require("../Middleware/multer")
cloudinaryRouter.post('/', upload.array('Image'), async (req, res) => {
    const uploader = async (path) => await cloudinary.uploads(path, 'Image')
    if (req.method === "POST") {
        const urls = []
        const files = req.files
        for (const f of files) {
            const { path } = f
            const newPath = await uploader(path)

            urls.push(newPath)

            fs.unlinkSync(path)
        }

        res.status(200).json({
            msg: 'Images uploaded successfully',
            data: urls
        })
    }
    else {
        res.status(405).json({
            err: "Images not uploaded successfully"
        })
    }
})

module.exports={
    cloudinaryRouter
}
