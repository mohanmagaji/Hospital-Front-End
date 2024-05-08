import app from "./App.js"
import cloudinary from "cloudinary"
cloudinary.v2.config({
  cloud_name:process.env.Cloudinary_cloud_name,
 api_secret:process.env.Cloudinary_Api_secrete,
  api_key:process.env.Clodinary_Api_key,
})

app.listen(process.env.PORT,() => {
  console.log(`Server listening on port ${process.env.PORT}`);
});