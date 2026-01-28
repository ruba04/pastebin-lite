Pastebin-Lite

A lightweight Pastebin-style application to create and share text snippets with optional expiration time (TTL) and view limits. Built with Node.js, Express, MongoDB Atlas, and Tailwind CSS.

🚀 Live Demo

🔗 https://pastebin-y4od.onrender.com

✨ Features

📝 Create and share text-based pastes

⏱️ Set expiration (TTL) in seconds

👁️ Limit how many times a paste can be viewed

🔗 Get a unique shareable link to access the paste

💅 Clean responsive UI with Tailwind CSS

📋 Auto-copy link on creation

📦 Tech Stack

Backend: Node.js, Express

Database: MongoDB Atlas, Mongoose

Frontend: HTML, Tailwind CSS, JavaScript

Deployment: Render

⚙️ How to Run Locally
1. Clone the repository
git clone https://github.com/ruba04/pastebin-lite.git

cd pastebin-lite

3. Install dependencies
4. 
npm install

5. Set up environment variables


Create a .env file in the root directory:

PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@clusterpastebin.llungin.mongodb.net/?retryWrites=true&w=majority
BASE_URL=http://localhost:5000

🔒 Don’t push .env to GitHub. It is already included in .gitignore.

4. Run the server
5. 
npm start


Then open: http://localhost:5000

🌐 Deployment on Render

✅ Steps:

Push your project to GitHub

Go to https://render.com

Create a new Web Service

Connect your GitHub repository

Add Environment Variables in Render > Environment:

PORT=5000

MONGODB_URI=your MongoDB Atlas URI

BASE_URL=https://pastebin-y4od.onrender.com

Use the following Start Command:

node server.js


Deploy your app and test the endpoint


