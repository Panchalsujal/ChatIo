# ChatIo 💬

ChatIo is a real-time chat application designed to enable seamless communication between users using modern web technologies. It demonstrates full-stack development concepts including authentication, real-time messaging, and scalable architecture.

---

## 🚀 Features

* 🔐 User Authentication (Login / Register)
* 💬 Real-time Messaging
* 👥 Multiple Users Support
* 📡 Socket-based Communication
* ⚡ Fast and Responsive UI
* 🧩 Modular Code Structure

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux (if used)
* Tailwind CSS / CSS (update if different)

### Backend

* Node.js
* Express.js
* Socket.io

### Database

* MongoDB (update if different)

---

## 📂 Project Structure

```
ChatIo/
│
├── frontend/        # React frontend
├── backend/         # Node.js backend
├── socket/          # Socket configuration (if separate)
├── .env             # Environment variables
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Panchalsujal/ChatIo.git
cd ChatIo
```

### 2️⃣ Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file inside backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the application

#### Start backend

```bash
npm run dev
```

#### Start frontend

```bash
npm start
```

---

## 📡 API Endpoints (Example)

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |
| GET    | /api/messages      | Get messages  |
| POST   | /api/messages      | Send message  |

---

## 🧪 Future Improvements

* ✅ Typing indicators
* ✅ Message notifications
* ✅ File sharing support
* ✅ Group chat support
* ✅ Deployment (Docker / AWS / Vercel)

---

## 📸 Screenshots

Add screenshots here after deployment:

```
/assets/chat-preview.png
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Sujal Panchal**

GitHub: [https://github.com/Panchalsujal](https://github.com/Panchalsujal)

---

⭐ If you like this project, consider giving it a star on GitHub!
