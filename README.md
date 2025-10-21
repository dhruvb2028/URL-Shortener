# URL Shortener

A simple URL shortener application built with Node.js, Express, and MongoDB.

## Features

- Shorten long URLs to compact, shareable links
- Redirect short URLs to original destinations
- MongoDB database for storing URL mappings
- Clean and simple user interface
- Deployed on Vercel

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **View Engine**: EJS
- **URL Generation**: shortid
- **Deployment**: Vercel

## Setup Instructions

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhruvb2028/URL-Shortener.git
   cd URL-Shortener
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory (use `.env.example` as a template):
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. **Run the application**
   ```bash
   npm start
   ```

5. **Access the application**
   
   Open your browser and navigate to `http://localhost:3000`

### Deploy to Vercel

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Vercel Dashboard**
   - Push your code to GitHub
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel project settings:
     - `MONGODB_URI`: Your MongoDB connection string
   - Deploy!

3. **Deploy via CLI** (alternative)
   ```bash
   vercel
   ```

## Usage

1. Enter a long URL in the input field
2. Click "Shorten URL"
3. Copy and share the generated short URL
4. The short URL will redirect to the original URL when accessed

## Project Structure

```
├── Controllers/
│   └── urlController.js    # URL shortening and redirection logic
├── Models/
│   └── UrlModel.js         # Mongoose schema for URLs
├── views/
│   └── index.ejs           # Main UI template
├── .env                    # Environment variables (not tracked)
├── .env.example            # Example environment configuration
├── .gitignore              # Git ignore file
├── vercel.json             # Vercel configuration
├── package.json            # Project dependencies
├── README.md               # Project documentation
└── server.js               # Main application file
```

## Environment Variables

Make sure to set these environment variables in Vercel:

- `MONGODB_URI`: Your MongoDB Atlas connection string

## Security Note

⚠️ **Important**: Never commit your `.env` file containing sensitive credentials to GitHub. Always use environment variables for sensitive data like database connection strings.

## License

This project is open source and available for educational purposes.
