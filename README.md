 # Remind-me-later API

## 📌 Overview
This is a REST API that accepts and stores reminder requests with:
- `date`
- `time`
- `message`
- `type`: `email` or `sms`

## 🚀 How to Run Locally

1. Clone repo and install dependencies:
```bash
npm init -y
npm install express mongoose dotenv cors
Add your MongoDB URI to .env file:
MONGO_URL=mongodb+srv://tashukumari129895:1KqfUTmqKsOlXn09@reminderdata.jdvnp46.mongodb.net/?retryWrites=true&w=majority&appName=reminderData

Start the server: npm start
📮 API Endpoint - port(5000)
POST /api/reminders
Body:
{
  "date": "2025-06-07",
  "time": "14:30",
  "message": "Join the team meeting",
  "type": "email"
}

---
Returns:

201 Created with saved reminder

### ✅ Test API using Postman or curl

**POST** to: `http://localhost:5000/api/reminders`

**Body (JSON):**
```json
{
    "message": "Reminder created",
    "data": {
        "date": "2025-06-07",
        "time": "14:30",
        "message": "Join the team meeting",
        "type": "email",
        "_id": "6842ae9b95efc965fba826ac",
        "__v": 0
    }
}

