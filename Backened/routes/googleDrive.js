const stream = require('stream');
const express = require('express');
const multer = require('multer');
const path = require('path');
const { google } = require('googleapis');
const { drive } = require('googleapis/build/src/apis/drive');

const googleDriveRoute = express.Router();

const upload = multer();

const KEYFILEPATH = path.join(__dirname + "/../credentials.json")
const SCOPES = ['https://www.googleapis.com/auth/drive']

const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES
})


const uploadFile = async (fileObject) => {
    const bufferStream = new stream.PassThrough();
    bufferStream.end(fileObject.buffer);
    const { data } = await google.drive({
        version: 'v3',
        auth: auth
    }).files.create({
        media: {
            mimeType: fileObject.mimeType,
            body: bufferStream
        },
        requestBody: {
            name: fileObject.originalname,
            parents: ['1EcA6OWYOJb010rKbvHkOVZZz-xLlRzjJ']
        },
        fields: "id,name"
    })
    console.log(`Uplaoded File ${data.name} ${data.id}`)
   return generatePublicUrl(data.id) ;
}


googleDriveRoute.post('/', upload.any(), async (req, res) => {
    try {
        const { body, files } = req
        // for (let f = 0; f < files.length; f++) {
           const arr = await uploadFile(files[0]);
        // }
        // console.log(body);
        res.status(200).send(arr);
    } catch (error) {
        res.send(error.message);
        console.log(error);
    }
})



let generatePublicUrl =async(id)=>{
    try {
        const fileID = id
        const result = await drive({
            version: 'v3',
            auth: auth
        }).files.get({
            fileId:fileID ,
            fields: 'webViewLink,webContentLink'
        })
        // console.log(result.data) ;
        return result.data ;
    } catch (error) {
        console.log(error) ;
    }
}

// async function deleteFile(){
//     try {
//         const res = await google.drive({
//             version: 'v3',
//             auth: auth
//         }).files.delete({
//             fileId : '1zQqOCpHt8ozKBt1DbhQPtgSaHST8wG9h'
//         })
//         console.log(res.data,res.status) ;
//     } catch (error) {
//         console.log(error) ;
//     }
// }

// deleteFile() ;

module.exports = {
    googleDriveRoute
}