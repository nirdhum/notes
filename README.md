# 📝 Notes - React + Vite

A simple yet efficient **Notes Application** built with **React** and **Vite**. Users can create, edit, search and delete notes — all stored in the browser's **localStorage**, ensuring your data persists even after refreshing or closing the browser.

## 🚀 Features

- 🧠 **Create notes** instantly
- 🖋️ **Edit** any note with ease
- 🗑️ **Delete** notes you no longer need
- 💾 **Persistent storage** using `localStorage`
- ⚡ Built with **Vite** for blazing fast performance
- 📱 Fully responsive and lightweight

## 🖼️ Demo

[Live Demo]

## 📦 Tech Stack

- [React](https://reactjs.org/) – UI library
- [Vite](https://vitejs.dev/) – Build tool for lightning-fast development
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) – Styling
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) – Persistent client-side storage

## 📂 Folder Structure

```bash
notes/
├── src/
│ ├── components/
│ │ ├── createDate.jsx
│ │ └── NoteItem.jsx
│ ├── img/
│ ├── screens/
│ │ ├── CreateNote.jsx
│ │ ├── EditNote.jsx
│ │ └── Notes.jsx
│ ├── App.jsx
│ ├── index.css
│ └── index.jsx
├── .gitignore
├── index.html
├── LICENSE
├── package.json
├── README.md
└── vite.config.js
```

## 🛠️ Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone hhttps://github.com/nirdhum/notes.git
cd react-notes-app
```

### 2. Install dependencies and Run the app

```bash
npm install
npm run dev
```

## 🧠 How It Works

- On app load, it checks localStorage for any saved notes.
- Notes are stored as an array of objects in localStorage.
- Each time a note is created, edited, or deleted — the changes are instantly synced with localStorage.

## 🧾 License

This project is open-source and available under the MIT License.

## 👤 Author

Nirdhum
