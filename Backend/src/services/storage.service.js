//the reason why we created this "storage.service.js" file is, we are not confirmed which cloud storage provider we use 
// that is we might use 1.Imagekit 2.Cloudinary 3.Amazon s3 , the services that provides best services with low pricing is taken as cloud storage provider
const {ImageKit} = require('@imagekit/nodejs');

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY  //imagekit private key
});

async function uploadFile(buffer,originalname){
  const result = await imagekit.files.upload({
  file: buffer.toString("base64"),
  fileName: originalname,
});
    return result;
}

module.exports = uploadFile;
