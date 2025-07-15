🧩 Mini GitHub Explorer
A lightweight React.js application that allows users to search for GitHub usernames and explore their public profile and repositories.

🚀 Demo
Live Demo (Optional: Add your deployed link if available)

📌 Features
🔍 Search for GitHub users by username

👤 View user profile with avatar, bio, and public stats

📚 Browse public repositories with star counts and links

🧠 Bonus: Sort and filter repositories by name or star count

⚠️ Graceful error handling for:

User not found

Network/API issues

No repositories available

🛠️ Tech Stack
React.js (with Hooks)

fetch for API calls

React Context (optional state management)

Tailwind CSS / Custom CSS (for UI styling)

GitHub REST API v3

📦 Installation & Setup
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/mini-github-explorer.git
cd mini-github-explorer
Install dependencies

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm run dev
(If using Create React App, replace with npm start)

Open the app
Navigate to http://localhost:5173 (or http://localhost:3000 if using CRA) in your browser.

📁 Project Structure
pgsql
Copy
Edit
📦 mini-github-explorer/
├── public/
├── src/
│   ├── components/
│   ├── context/            # (If using React Context)
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
🧪 Example Usage
Type a GitHub username (e.g., torvalds) into the search field.

Click on "Search".

View the user profile and list of public repositories.

Use the filter input and sorting options to refine the repo list.

🔧 API Endpoints Used
User Profile:
https://api.github.com/users/{username}

User Repositories:
https://api.github.com/users/{username}/repos

⚠️ Error Handling
🚫 Invalid username → "User not found"

🌐 Network issues → "Something went wrong"

📭 No repositories → "No public repositories found"

📈 Bonus Implementations
 Sort repositories by stars or name

 Filter repositories by keyword

 Global state management using Context API (if implemented)

🤝 Contributing
Feel free to fork this repo and submit pull requests!

🪪 License
This project is open source and available under the MIT License.

