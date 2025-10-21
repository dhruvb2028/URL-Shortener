import shortid from "shortid";
import { urls } from "../Models/UrlModel.js";

// Controller: Create new short URL
export const createShortUrl = async (req, res) => {
    const longUrl = req.body.longUrl;
    const shortCode = shortid.generate();

    const shortUrl = `https://auroraai.online/${shortCode}`;
    

    // Save to database
    const newUrlEntry = new urls({ shortCode, longUrl });
    await newUrlEntry.save();

    console.log("Short URL saved:", newUrlEntry);

    res.render("index.ejs", { shortUrl });
};

// Controller: Redirect to original URL

export const redirectToOriginalUrl = async (req, res) => {
    // const shortCode = req.params.getShortCode     Below line means the same, done destructuring
    const { shortCode } = req.params;

    // Find shortCode in database
    const urlEntry = await urls.findOne({ shortCode });

    if (urlEntry) {
        res.redirect(urlEntry.longUrl);
    } else {
        res.status(404).send("URL not found");
    }
};
