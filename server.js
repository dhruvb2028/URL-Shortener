import e from "express";
import mongoose from "mongoose";
import { createShortUrl, redirectToOriginalUrl } from "./Controllers/urlController.js";

const app = e();
app.use(e.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://dhruvb2028:LvF2WGZW2JYNCITc@cluster0.6viw9wm.mongodb.net/").then(()=>
    console.log("MongoDB connected")).catch((e)=>{console.log(e)})

const port = 3000

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

 