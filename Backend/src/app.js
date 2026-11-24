const express=require("express")
const multer = require("multer")
const uploadFile = require("./services/storage.service")
const postModel = require("./models/post.model")
const cors = require("cors")

const app = express();
app.use(cors())//this will allow 2 applications of a web browser(chrome,firefox,safari,edge,opera etc)to communicate with each other
app.use(express.json())//it will make 'req.body' redable ,only when it is in the raw format

const upload = multer({storage:multer.memoryStorage()})//its a middleware  for handling form-data,which is used for uploading files in Express.js application.
// Don't save the image to a folder on my computer. Keep it temporarily in memory

app.post('/create-post',upload.single("image"), async(req,res)=>{//here image is a key
   //rem:Imagekit is a "cloud storage provider"
   console.log(req.body);//here it contains caption
   console.log(req.file);//here it contains image in the form of buffer
   const result = await uploadFile(req.file.buffer,req.file.originalname)
   console.log(result);//here it contains image url 
   
   const post = await postModel.create({
      image:result.url,
      caption:req.body.caption
   })
   return res.status(201).json({
      message:"Post created successfully",
      post
   })
})

app.get('/posts',async(req,res)=>{
   const posts = await postModel.find()
   return res.status(200).json({
      message:"Posts fetched successfully",
      posts
   })
})
module.exports = app