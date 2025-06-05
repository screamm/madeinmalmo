# Made in Malmö

Fullstack-applikation med React (Vite) + Node.js (Express) + MongoDB Atlas

## Tech Stack
- **Frontend**: React med Vite, SASS
- **Backend**: Node.js med Express
- **Databas**: MongoDB Atlas

## Setup

### Backend
```bash
cd server
npm install
# Konfigurera .env med din MongoDB Atlas connection string
npm run dev
```

### Frontend
```bash
cd client
npm install
npm run dev
```

## Miljövariabler
Skapa en `.env`-fil i `server/` mappen:
```
MONGODB_URI=din_mongodb_atlas_connection_string
PORT=5000
```
