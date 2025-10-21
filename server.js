import e from "express";
import mongoose from "mongoose";
import { createShortUrl, redirectToOriginalUrl } from "./Controllers/urlController.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = e();
app.use(e.urlencoded({extended:true}))

// Set view engine and views directory for Vercel
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect(process.env.MONGODB_URI).then(()=>
    console.log("MongoDB connected")).catch((e)=>{console.log(e)})

const port = process.env.PORT || 3000

// shortUrl must be null
app.get("/", (req, res) => {
    res.render("index.ejs", { shortUrl: null });
});

//shorting URL Logic
app.post('/shortenUrl', createShortUrl)


// get original URL from Dynamic Routing
app.get('/:shortCode', redirectToOriginalUrl)


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})

// Export the Express app for Vercel
export default app;

 