<h1 align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
  <br>discord-member-status-bot
</h1>
<h4 align="center">Discord bot that dynamically displays the real-time status of all members within a server, utilizing embeds for a user-friendly and visually appealing presentation.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<p align="center">
  <img src="https://img.shields.io/badge/Framework-Discord.js-blue" alt="Framework - Discord.js" />
  <img src="https://img.shields.io/badge/Frontend-Javascript,_Html,_Css-red" alt="Frontend - Javascript, Html, Css" />
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Backend - Node.js" />
  <img src="https://img.shields.io/badge/Database-MongoDB-black" alt="Database - MongoDB" />
</p>
<p align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/discord-member-status-bot?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/discord-member-status-bot?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/discord-member-status-bot?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</p>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
This repository contains a Discord bot project called "discord-member-status-bot" designed to provide real-time updates on the status of all members within a Discord server. The bot utilizes Discord.js, Node.js, MongoDB, and other technologies for seamless integration and enhanced functionality. 

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | Architecture   | The codebase follows a modular architectural pattern with separate directories for different functionalities, ensuring easier maintenance and scalability.             |
| 📄 | Documentation  | The repository includes a README file that provides a detailed overview of the project, its dependencies, and usage instructions.|
| 🔗 | Dependencies   | The codebase relies on various external libraries and packages such as Discord.js, mongoose, dotenv, and nodemon, which are essential for building and styling the UI components, and handling external services.|
| 🧩 | Modularity     | The modular structure allows for easier maintenance and reusability of the code, with separate directories and files for different functionalities such as commands, events, models, and utils.|
| 🧪 | Testing        | Implement unit tests using frameworks like Jest or React Testing Library to ensure the reliability and robustness of the codebase.       |
| ⚡️  | Performance    | The performance of the system can be optimized based on factors such as the browser and hardware being used. Consider implementing performance optimizations for better efficiency.|
| 🔐 | Security       | Enhance security by implementing measures such as input validation, data encryption, and secure communication protocols.|
| 🔀 | Version Control| Utilizes Git for version control with GitHub Actions workflow files for automated build and release processes.|
| 🔌 | Integrations   | Interacts with Discord API, MongoDB, and utilizes event listeners for seamless communication and data management.|
| 📶 | Scalability    | Design the system to handle increased user load and data volume, utilizing caching strategies and cloud-based solutions for better scalability.           |

## 📂 Structure

```
├── commands
│   ├── setup.js
│   ├── setstatus.js
│   └── help.js
├── events
│   ├── ready.js
│   ├── guildMemberUpdate.js
│   └── messageCreate.js
├── models
│   ├── member.js
│   └── guild.js
├── utils
│   ├── embedUtils.js
│   ├── commandHandler.js
│   └── logger.js
├── config
│   └── config.json
├── .env
├── package.json
└── README.md

```

## 💻 Installation
### 🔧 Prerequisites
- Node.js
- npm
- MongoDB

### 🚀 Setup Instructions
1. Clone the repository:
   - `git clone https://github.com/coslynx/discord-member-status-bot.git`
2. Navigate to the project directory:
   - `cd discord-member-status-bot`
3. Install dependencies:
   - `npm install`
4. Create a `.env` file and add your Discord bot token and MongoDB connection string.
5. Start the bot:
   - `npm start`

## 🏗️ Usage
### 🏃‍♂️ Running the Project
1. Start the bot by running:
   - `npm start`
2. The bot will connect to Discord and start monitoring member status.
3. Use the following commands:
   - `/setup`: Configure the channel where the member status embeds will be displayed.
   - `/setstatus`: Customize your displayed status.
   - `/help`: View a list of available commands.

### ⚙️ Configuration
- Configure the bot's behavior by modifying the `config.json` file.
- Set environment variables in the `.env` file.

### 📚 Examples
- `/setup #general`: Sets the #general channel as the display channel for member status embeds.
- `/setstatus "Taking a break"`: Sets your status to "Taking a break."
- `/help`: Displays a list of available commands and their usage.

## 🌐 Hosting
### 🚀 Deployment Instructions
1. Deploy the bot to a cloud platform such as Heroku or AWS.
2. Configure environment variables (Discord bot token, MongoDB connection string) on the hosting platform.
3. Start the bot on the hosting platform.

## 📜 License
This project is licensed under the MIT License.

## 👥 Authors
- Author Name - [Spectra.codes](https://spectra.codes)
- Creator Name - [DRIX10](https://github.com/Drix10)

<p align="center">
    <h1 align="center">🌐 Spectra.Codes</h1>
  </p>
  <p align="center">
    <em>Why only generate Code? When you can generate the whole Repository!</em>
  </p>
  <p align="center">
	<img src="https://img.shields.io/badge/Developer-Drix10-red" alt="">
	<img src="https://img.shields.io/badge/Website-Spectra.codes-blue" alt="">
	<img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
	<img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="">
  <p>