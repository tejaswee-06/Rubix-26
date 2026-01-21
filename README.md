🏙️ Nagar Mitra

Urban Street Vendor Permit & Compliance Management System

Nagar Mitra is a GovTech-style web application designed to digitize street vendor permit management, improve municipal compliance, and bring transparency and fairness to urban street vending.

Built as part of RUBIX ’26 Hackathon (CSI-TSEC).

🎯 Problem Statement

Urban street vending suffers from:

Manual and opaque permit processes

Poor compliance tracking

Lack of real-time visibility for authorities

No structured grievance or alert mechanisms

Nagar Mitra addresses these gaps using a role-based digital platform for vendors and municipal authorities.

🧩 Key Features
👥 Vendor Side

Apply for vending permits

View permit status & expiry

Compliance alerts (hygiene, safety, expiry)

View compliance score

Receive system-generated notifications

🏛️ Authority Side

Review & approve/reject permits

Update compliance checklist (hygiene & safety)

Automatic compliance score calculation

Centralized permit overview

⚙️ Smart System Logic

Dynamic compliance scoring

Permit expiry alerts

Role-based access control

JSON-based persistent storage (hackathon-optimized)

🧠 Architecture Overview
Frontend (Next.js)
        ↓
Next.js App Router Backend (API routes)
        ↓
JSON File-Based Data Store


The backend is designed to be storage-agnostic — JSON persistence is used for hackathon stability and can be swapped with MongoDB without changing APIs.

🛠️ Tech Stack
Frontend

Next.js (App Router)

TypeScript

Tailwind CSS

ShadCN UI

Framer Motion

Backend

Next.js API Routes

Custom authentication middleware

JSON file–based persistence

📁 Project Structure (Backend)
identity-backend/
├── app/
│   └── api/
│       ├── authority/
│       │   └── permit/review/route.js
│       └── vendor/
│           └── alerts/route.js
├── data/
│   └── permits.json
├── lib/
│   ├── authenticate.js
│   ├── jsondatastore.js
│   └── compliance.js

🔐 Authentication & Roles

Vendor: Can apply for permits and view alerts

Authority: Can review permits and update compliance

Access is enforced at API level using role checks

🚀 How to Run Locally
npm install
npm run dev


App runs on:

http://localhost:3000

🔄 Sample APIs
Authority – Review Permit
POST /api/authority/permit/review

Vendor – View Alerts
GET /api/vendor/alerts

📌 Hackathon Note (IMPORTANT)

For demo stability and speed:

File-based JSON persistence is used

APIs and logic are fully functional

Data layer can be upgraded to MongoDB without refactoring API contracts
