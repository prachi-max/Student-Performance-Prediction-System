# Student Performance Tracker — Setup Guide

## Prerequisites
- Node.js 18+
- Python 3.9+
- MongoDB Atlas account

## Backend Setup

### Node.js API (Port 5000)
```bash
cd Backend
cp .env.example .env
# Fill in MONGO_URI and JWT_SECRET in .env

npm install
npm start
```

### Flask ML API (Port 5001)
```bash
cd Backend
pip install -r requirements.txt
python app.py
```

## Frontend Setup

```bash
cd Frontend/student-tracker
npm install
ng serve
# Opens at http://localhost:4200
```

## Port Summary
| Service | Port |
|---------|------|
| Angular Frontend | 4200 |
| Node.js API | 5000 |
| Flask ML API | 5001 |
