import e from "express";
import mongoose from "mongoose";
import { createShortUrl, redirectToOriginalUrl } from "./Controllers/urlController.js";
import dotenv from "dotenv";

dotenv.config();

const app = e();
app.use(e.urlencoded({extended:true}))

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

 