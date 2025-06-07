# abc-quizzy
ABC Quizzy is a web application for generating and solving quizzes. It features user authentication, challenge creation, and history tracking. The project is transitioning from Clerk to a custom authentication system using FastAPI, SQLAlchemy, and PostgreSQL (Neon DB). The frontend uses React with Flowbite for UI and React Toastify for notifications.

- To run backend(windows os) => go to backend root folder, and create virtual environment first.

```
uv venv
.\.venv\Scripts\activate
uv sync
uv run uvicorn src.app:app --reload

```
- To run frontend(windows os) =>

```
npm i
npm run build
npm run dev
```

## FLOW OF PROJECT
```

abc-quizzy/                   # Frontend (React)
   ├── src/
   │   ├── auth/
   │   │   ├── Login.jsx         # Login page
   │   │   ├── Register.jsx      # Sign-up page
   │   │   ├── Verify.jsx        # Email verification page
   │   │   ├── ForgotPassword.jsx # Forgot password page
   │   │   ├── ResetPassword.jsx  # Password reset page
   │   │   ├── ProtectedRoute.jsx # Protects routes for logged-in users
   │   ├── challenge/
   │   │   ├── ChallengeGenerator.jsx # Quiz creation
   │   │   ├── MCQChallenge.jsx       # MCQs
   │   ├── history/
   │   │   ├── HistoryPanel.jsx  # User quiz history
   │   ├── components/
   │   │   ├── Layout.jsx        # App layout (e.g., navbar)
   |   |    ......
   │   ├── components/
   │   │   ├── Profile.jsx    
   |   |    ......    
   │   ├── App.jsx               # Main app with routing
   │   ├── App.css               # Global styles
   │   ├── assets/
   │   │   ├── logo.png          # App logo
   |   |    ......
   ├── tailwind.config.js        # Tailwind CSS config
   ├── .env                      # Frontend env (VITE_BACKEND_URL, VITE_GOOGLE_CLIENT_ID)

abc-quizzy-backend/           # Backend (FastAPI)
   ├── src/
   │   ├── database/
   │   │   ├── models.py         # SQLAlchemy models (User, Challenge, ChallengeQuota)
   │   │   ├── db.py             # Database utilities
   │   ├── routes/
   │   │   ├── auth.py           # Auth endpoints (/register, /login, /verify, etc.)
   │   │   ├── challenge.py      # Challenge-related endpoints
   │   ├── utils/
   │   │   ├── auth.py           # Auth utilities (JWT, password hashing, email)
   │   ├── app.py                # FastAPI app with CORS
   ├── ai_generator.py           # AI prompt based code generation for MCQs
   ├── utils.py                  # utilities
   ├── app.py                    # main function
   ├── migrate.py                # Database migrations
   ├── .env                      # Backend env (DB_URI, GMAIL_ADDRESS, etc.)


```

## Tech Stack
- Frontend: React, React Router, Flowbite, React Toastify, Tailwind CSS, Google OAuth
- Backend: FastAPI, SQLAlchemy, PostgreSQL (Neon DB), JWT
- Others: Python, Node.js, Vite, Uvicorn

## Setup Instructions

## Prerequisites
- Node.js (v18+)
- Python (3.10+)
- PostgreSQL (Neon DB account)
- Gmail account with App Password for email sending

### Backend Setup
```
- Navigate to backend:
cd abc-quizzy-app/abc-quizzy-backend

- Create virtual environment:
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
.venv\Scripts\activate     # Windows

- Install dependencies:
pip install fastapi uvicorn sqlalchemy psycopg2-binary python-jose[cryptography] passlib[bcrypt] python-dotenv requests smtplib

- Create .env in abc-quizzy-backend/:
DB_URI=postgresql://<user>:<password>@<neon-host>/abc-quizzy-db?sslmode=require
GMAIL_ADDRESS=your.gmail.address@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password
FRONTEND_URL=http://localhost:5173
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
JWT_SECRET=your-jwt-secret


- Run migrations:
python migrate.py

- Start backend:
uv run uvicorn src.app:app --reload --host 0.0.0.0 --port 8000
```

## Frontend Setup
```
- Navigate to frontend:
cd abc-quizzy-app/abc-quizzy

- Install dependencies:
npm install

- Create .env in abc-quizzy/:
VITE_BACKEND_URL=http://localhost:8000
VITE_GOOGLE_CLIENT_ID=your-google-client-id

- Start frontend post build:
npm run build
npm run dev
Database Schema

users: Stores user data (id, google_id, email, password, verification_token, is_verified, created_at).

```

### challenge_quotas: 
Tracks user quiz creation limits (id, user_id, quota_remaining, last_reset_date).

### Authentication Flow
Sign-Up (/sign-up):
User enters email and password at http://localhost:5173/sign-up.
Frontend sends POST /api/auth/register with {email, password}.

#### Future Improvements:
Add token expiration for verification/reset links.
Implement refresh tokens for JWT.

#### Clean up unverified users periodically.
Enhance UI/UX for better user feedback.

#### Contributing
Fork the repo, create a branch (feature/login-fix), and submit a PR.
Report issues via GitHub Issues.

#### License
MIT License
